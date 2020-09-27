import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

let x = 1;