import React from 'react';
import styled from 'styled-components';
import loader from '../img/loader.gif';

const Loader = styled.div`
    background: transparent;
    height: 100%;
    padding: 200px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn .4s ease;
`

const LoaderImage = styled.img`
    width: 350px;
`

export default () => {
    return (
        <Loader>
            <LoaderImage src={loader} alt={'Loading'} />
        </Loader>
    )
}