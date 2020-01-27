import React, {useState} from 'react'
import {render} from 'react-dom'

function App() {
    const initialValue = [
        {
            _id: 1000,
            acctType: "Saving",
            balance: 2000
        },
        {
            _id: 1001,
            acctType: "Current",
            balance: 12000
        }
    ];
    const [accounts, setAccounts] = useState(initialValue);

    function handleAddAccount(account) {
        account._id = accounts.length + 1;
        const newAccounts = [...accounts];
        newAccounts.push(account);
        setAccounts(newAccounts);


    }

    return <>
        <AddAccount onAddAccount={handleAddAccount}/>
        <AccountTable accounts={accounts}/>
    </>
}

function AddAccount({onAddAccount}) {
    const [account, setAccount] = useState({});

    function handleChange(e) {
        const newAccount = {
            ...account,
            [e.target.name]: e.target.value

        };
        setAccount(newAccount)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddAccount(account);
    }
    return <>
        <h3>Add Account</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="acctType">Account Type</label>
            <select
                onChange={handleChange}
                name="acctType" id="acctType" required>

                <option></option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>

            <label htmlFor="balance">Balance</label>
            <input
                onChange={handleChange}
                type="number" name="balance" id="balance" required/>
            <button type="Submit">Submit</button>
        </form>
    </>
}

function AccountTable({accounts}) {
    return <>
        <h1>Accounts</h1>
        <table>
            <thead>
            <tr>
                <th>Account No</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {accounts.map(account => <Account key={account._id}
                                              account={account}/>)}
            </tbody>
        </table>
    </>
}

function Account({account}) {
    return <tr>
        <td>{account._id}</td>
        <td>{account.acctType}</td>
        <td>{account.balance}</td>

    </tr>
}

render(<App/>, document.querySelector("#root"))
