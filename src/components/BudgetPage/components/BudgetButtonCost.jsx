import React from 'react';
import styled from 'styled-components';

const ButtonCost = styled.div`
    background: #F2994A;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    transition: all .3s ease;
    cursor: pointer;
    animation: fadeInRight .6s ease;

    &:hover {
        background: #ce7629;
    }
`

const Minus = styled.div`
    position: absolute;
    width: 15px;
    height: 55px;
    background: #FFFFFF;
    border-radius: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
`

export default ({toggleModalMode, addCostsItemAction}) => {
    return <ButtonCost onClick={() => toggleModalMode(true, false)}>
        <Minus />
    </ButtonCost>
}