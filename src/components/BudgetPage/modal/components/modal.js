import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn .3s ease;
`

export const ModalBody = styled.div`
    width: 500px;
    height: 400px;
    background: #fff;
    border-radius: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ModalCloseBtn = styled.button`
    width: 50px;
    height: 50px;
    background: #323232;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: absolute;
    right: -15px;
    top: -15px;
    transition: all .4s ease;
    cursor: pointer;

    & > img {
        width: 25px;
    }

    &:hover {
        background: #000;
    }
`

export const ModalInput = styled.input`
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 0 0 10px;
    font-size: 18px;
    transition: all .4s ease;
    margin: 55px 0 0 50px;
    align-self: flex-start;

    &:hover {
        border-bottom: 1px solid #323232;
    }

    &:focus {
        border-bottom: 1px solid #323232;
    }
`

export const ModalColorItem = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
`

export const ModalColors = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ModalSumInput = styled.input`
    width: 35%;
    height: 50px;
    border: 1px solid #a9a9a9;
    border-radius: 10px;
    font-size: 20px;
    padding: 0 20px;
`

export const ModalSubmitBtn = styled.button`
    width: 250px;
    height: 45px;
    background: #27AE60;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    margin: 0 0 30px 0;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        background: #157f41;   
    }
`