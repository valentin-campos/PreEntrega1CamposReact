import React from 'react'
import styled from 'styled-components'

function BurgerButton() {
    return (
        <Burger>
            <div className="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burger>
    )
}

export default BurgerButton

const Burger = styled.div`
    
#nav-icon3 span:nth-child(1) {
    top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 18px;
}

#nav-icon3 span:nth-child(4) {
    top: 36px;
}

#nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
}

#nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
}
`
//  <div onClick={props.handleClick} className={`nav-icon3 ${props.clicked ? 'open' : ''} `}