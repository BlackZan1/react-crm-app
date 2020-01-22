import React from 'react';
import styled from 'styled-components';

const ButtonIn = styled.div`
    background: #56CCF2;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    transition: all .3s ease;
    cursor: pointer;
    animation: fadeInLeft .6s ease;

    &:hover {
        background: #2aacd3;
    }
`

const Horisont = styled.div`
    position: absolute;
    width: 15px;
    height: 55px;
    background: #FFFFFF;
    border-radius: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
`

const Vertical = styled.div`
    position: absolute;
    width: 15px;
    height: 55px;
    background: #FFFFFF;
    border-radius: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export default ({toggleModalMode}) => {
    return <ButtonIn onClick={() => toggleModalMode(true, true)}>
        <Horisont />

        <Vertical />
    </ButtonIn>
}