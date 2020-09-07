import React from 'react';
import NavLink from './NavLink';
import styled from 'styled-components';
import { GlobalStyle } from '../assets/fonts/fonts';

const Container = styled.div`
    margin: auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Li = styled.li `
    display: inline-block;    
    list-style-type: none;
    padding: 30px;
`;

const Navbar = styled.nav`
    height: 3%;
    width: 100%;
    background-color: rgb(3,7,30);
`

const Ul = styled.ul`
    display: block;
`;



const Header = () => {
    return (
        <Navbar>
            <GlobalStyle/>
            <Container>
                <Ul>
                    <Li><NavLink to="/">Home</NavLink></Li>
                    <Li><NavLink to="about">About</NavLink></Li>
                    <Li><NavLink to="projects">Projects</NavLink></Li>
                    <Li><NavLink to="blog">Blog</NavLink></Li>
                    <Li><NavLink to="contact">Contact</NavLink></Li>
                </Ul>
            </Container>
        </Navbar>
    )                                                                                                                           
}

export default Header;
