import React from 'react'
import styled from 'styled-components';
import NavLink from './NavLink';

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    height: 100%;

    @media(max-width: 768px) {
        display: none;
        flex-flow: column nowrap;
        display: ${({ open }) => open ? 'block' : 'none'};
        width: 100px;
    }
`;


export const Li = styled.li`
    list-style-type: none;
    height: 100%;                           
`;

const Nav = ({open}) => {
    return (
        <Ul open={open}>
            <Li><NavLink className="nav__item" to="/">Home</NavLink></Li>
            <Li><NavLink className="nav__item" to="/projects/">Projects</NavLink></Li>
            <Li><NavLink className="nav__item" to="/blog/">Blog</NavLink></Li>
        </Ul>
    )
}
export default Nav
