import React from 'react'
import styled from 'styled-components'

const ModalAlert = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: bounceInUp .5s ease;
`

const ModalAlertBody = styled.div`
    font-size: 18px;
    font-weight: 500;
    background: #fff;
    border-radius: 10px;
    padding: 15px 20px;
    box-shadow: 0px 1px 7px #a9a9a9;
`

export const AlertModal = () => {
    return <ModalAlert >
        <ModalAlertBody>
            Задача удалена
        </ModalAlertBody>
    </ModalAlert>
}