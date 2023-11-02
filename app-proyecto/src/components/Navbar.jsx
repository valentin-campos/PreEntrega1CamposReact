import React, { useState } from 'react'
import styled from "styled-components"
import BurgerButton from './BurgerButton'


function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        // Cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }
    return (
        <>
            <NavbarContainer>
                <h2>Tu <span>Musica</span></h2>
                <div className= {`links ${clicked ? 'active' : ''}`}>
                    <a href="./">Inicio</a>
                    <a href="./">Tienda</a>
                    <a href="./">Sobre nosotros</a>
                    <a href="./">Contacto</a>
                </div> 
                <div className="burger">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                
            </NavbarContainer>
        </>
    )
}

export default Navbar

const NavbarContainer = styled.nav`
    h2 {
        color: green;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links{
        display: flex;
        align-items: center;
        margin-left: 10px;
        @media(min-width: 768px){

        }
    }
    .links.active {
        width: 100%;
        display:block;
        position: absolute;
        margin-left: auto;
    }
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .burger {
        @media(min-width: 768px){
            display: none;
        }
    }
`

