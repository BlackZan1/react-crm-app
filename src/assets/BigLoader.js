import React from 'react';
import styled from 'styled-components';
import loader from '../img/loader.gif';

const BigLoader = styled.div`
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BigLoaderImage = styled.img`
    width: 350px;
    animation: zoomIn 1s ease;
    filter: drop-shadow(0 0 10px white);
`

export default () => {
    return (
        <BigLoader>
            <BigLoaderImage src={loader} alt={'Loading'} />
        </BigLoader>
    )
}