import React, {useState} from 'react';





 function AccountList(){
    const [accounts, setAccounts] =useState( []);

   async  function getAccountst (acctType){
        let url = " http://localhost:5000/api/accounts";
        if(acctType!="All")
        {
            url = `${url}?acctType=${acctType}`;
        }


        const response = await fetch(url);
        const data = await response.json();
        setAccounts(data);
        console.log(data);
    }


    return <div>
        <select id="acctType" onChange={(e)=>getAccountst(e.target.value)}>
            <option value="">All</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
        </select>
        <ul>
            {accounts.map((account, index) => <li>{account.acctType}</li>)}

        </ul>




    </div>


}


export default AccountList