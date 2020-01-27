import React from 'react';
import AccountList from './components/AccountList'
import NavBar from './components/NavBar'

function App(){
    return (
        <div>
            <NavBar/>
            <h1>Hello welcome to react js</h1>
            <h1>{2+3+5}</h1>
            <AccountList/>


        </div>


    )
}

export default App;