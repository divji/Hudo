import React from 'react';
import NavLink from './NavLink';
import Burger from './Burger';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/fonts/fonts';
import thunder from "../assets/images/thunder.png";

export const Container = styled.div`
    margin: auto;
    max-width: 1170px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const Navbar = styled.nav`
    width: 100%;
    background-color: snow;

    @media(max-width: 768px) {
        display: flex;
        width: 100%;
        
    }
`
const Header = () => {
    return (
        <Navbar>
            <GlobalStyle/>
            <Container>
                <NavLink className="nav__logo" to="/"><img src={thunder} alt="Web site logo" className="header__logo"></img></NavLink>
                <Burger/>
            </Container>
        </Navbar>
    )                                                                                                                           
}

export default Header;
