import React from "react";
import Main from "./Main";
import Header from "./Header";



const App = () => (
    localStorage.setItem('ACCESS_TOKEN',''),
    
    <>
        <Header />
        <Main />
    </>
);

export default App;