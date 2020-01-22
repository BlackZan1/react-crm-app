import React from 'react';
import styled from 'styled-components';
import historyImg from '../img/history.png';

const Empty = styled.div`
    background: transparent;
    height: 100%;
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    line-height: 1000%;

    & > img {
        width: 50px;
        margin: 15px 0 0 15px;
    }
`

export default (props) => {
    return (
        <Empty>
            {props.children} <img src={historyImg} alt={'...'} />
        </Empty>
    )
}