import React from "react";
import { Link } from "gatsby";

const NavLink = ({children, to}) => {
    return (
        <Link to={to}>{children}</Link>    
    )
}

export default NavLink;