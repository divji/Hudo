import React from "react";
import { Link } from "gatsby";

const NavLink = ({children, to, className}) => {
    return (
        <Link to={to} className={className}>{children}</Link>    
    )
}

export default NavLink;