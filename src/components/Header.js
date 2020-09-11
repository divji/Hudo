import React from 'react';
import NavLink from './NavLink';
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

`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    height: 100%;
`;


export const Li = styled.li`
    list-style-type: none;
    height: 100%;
`;

const Header = () => {
    return (
        <Navbar>
            <GlobalStyle/>
            <Container>
                <NavLink className="nav__logo" to="/"><img src={thunder} alt="Web site logo" className="header__logo"></img></NavLink>
                <Ul>
                    <Li><NavLink className="nav__item" to="/">Home</NavLink></Li>
                    <Li><NavLink className="nav__item" to="about">About</NavLink></Li>
                    <Li><NavLink className="nav__item" to="projects">Projects</NavLink></Li>
                    <Li><NavLink className="nav__item" to="blog">Blog</NavLink></Li>
                    <Li><NavLink className="nav__item" to="contact">Contact</NavLink></Li>
                </Ul>
            </Container>
        </Navbar>
    )                                                                                                                           
}

export default Header;
