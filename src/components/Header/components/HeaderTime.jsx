import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Time = styled.div`
    width: 220px;
    height: 50px;
    background: #F2F2F2;
    border-radius: 0px 0px 20px 0px;
    color: #000;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Oxygen";
    padding: 0 10px 0 0;
    z-index: 999;
`

export default () => {
    let [time, setTime] = useState({
        lts: null,
        mdy: null
    });

    useEffect(() => {
        setInterval(() => {
            let lts = moment().format('LTS');
            let mdy = moment().format("MMM Do");

            setTime({
                lts,
                mdy
            })
        }, 1000)
    }, [])

    return (
        <Time>
            <p>{time.mdy}</p>
            <p>{time.lts}</p>
        </Time>
    )
}