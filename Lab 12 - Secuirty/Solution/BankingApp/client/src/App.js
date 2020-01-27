import React, {useState} from 'react';
import Accounts from "./component/Accounts";

function App() {
    const [isAuthorized, setIsAuthorized] =useState(false);
    handleLogin(){
        setIsAuthorized(true);
    }
    handleLogout(){
        setIsAuthorized(false);
    }
    return (
        <>
            <Accounts/>
        </>
    )
};

export default App;