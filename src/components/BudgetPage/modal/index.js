import React, { useState } from 'react';
import closeImg from '../../../img/close.png';
import { Modal, ModalBody, ModalCloseBtn, ModalInput, ModalColors, ModalColorItem, ModalSubmitBtn, ModalSumInput } from './components/modal';

const BudgetModal = (props) => {
    let [enterData, setEnterData] = useState({
        title: '',
        color: null,
        sum: 0
    })

    let colors = [
        {color: '#EB5757', title: 'red'},
        {color: '#219653', title: 'green'},
        {color: '#56CCF2', title: 'blue'},
        {color: '#9B51E0', title: 'purple'},
        {color: '#F2C94C', title: 'yellow'},
        {color: '#6FCF97', title: 'leaf'},
        {color: 'rgba(244, 145, 157, 0.85)', title: 'pink'}
    ]

    const onClickHandler = () => {
        props.action(enterData);

        setEnterData({
            title: '',
            sum: 0,
            color: null
        })

        props.toggleModalMode(false, false);
    }

    const onChangeHandlerSum = (ev) => {
        let {value} = ev.currentTarget;
        
        setEnterData(prev => ({
            ...prev,
            sum: value
        }))
    }

    const onChangeHandlerTitle = (ev) => {
        let {value} = ev.currentTarget;
        
        setEnterData(prev => ({
            ...prev,
            title: value
        }))
    }

    const setColor = (ev, index) => {
        let group = document.querySelectorAll('#color');
        let elName = ev.currentTarget.attributes.name.value;

        group.forEach(c => {
            if(c.attributes.name.value === elName) {
                c.classList.add('colorSelected');
            }
            else c.classList.remove('colorSelected');
        })

        setEnterData(prev => ({
            ...prev,
            color: elName
        }))
    }

    let success = enterData.title.length > 0 && enterData.color && enterData.sum;

    return (
        <Modal>
            <ModalBody>
                <ModalCloseBtn onClick={() => props.toggleModalMode(false)}>
                    <img src={closeImg} alt='Loading...' />
                </ModalCloseBtn>

                <ModalInput placeholder={'Введите текст'} name='title' onChange={(ev) => onChangeHandlerTitle(ev)} />

                <ModalColors>
                    {
                        colors.map((i, index) => {
                            return <ModalColorItem key={index} id='color' name={i.title} style={{background: i.color}} onClick={(ev) => setColor(ev, index)} />
                        })
                    }
                </ModalColors>

                <ModalSumInput placeholder={'Введите сумму'} name='sum' type='number' onChange={(ev) => onChangeHandlerSum(ev)} />

                <ModalSubmitBtn disabled={!success} onClick={() => onClickHandler()}>
                    {props.actionType}
                </ModalSubmitBtn>
            </ModalBody>
        </Modal>
    )
}

export default BudgetModal;