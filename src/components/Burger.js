import React, {useState} from 'react'
import styled from 'styled-components';
import Nav from './Nav';

export const StyledBurger = styled.button`
    @media(max-width: 768px) {
        display: flex;
        width: 2rem;
        height: 2rem;
        z-index: 10;
        justify-content: space-around;
        flex-flow: column nowrap;
        margin: 15px 10px 10px 40px;

    div {
        width: 35px;
        height: 3px;
        background-color: coral;
        margin: 0 0 0 0;
        border-radius: 10px;
        transform-origin: 1px;
        transition: 0.30s linear all;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(40deg)' : 'rotate(0)'};
          }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
          }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-40deg)' : 'rotate(0)'};
        }
    }
}
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
      <>
       <Nav open={open}/>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
      </>
    )
}

export default Burger;
