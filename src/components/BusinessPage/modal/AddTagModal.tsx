import React, { useState } from 'react'
import styled from 'styled-components'
import { ModalColors, ModalCloseBtn } from '../../BudgetPage/modal/components/modal'
import closeImg from '../../../img/close.png'
import { TagItem } from '../interfaces'

interface AddTagModalProps {
    addTag: (data: TagItem) => void
    toggleAddTagModal: () => void
}

interface ColorItem {
    color: string
    title: string
}

interface EnteredData {
    name: string
    color: string
}

interface PositionData {
    x: number | undefined
    y: number | undefined
}

const AddTagModalBody = styled.div`
    position: absolute;
    width: 250px;
    height: 150px;
    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn .3s ease;
`

const AddTagModalInput = styled.input`
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 0 0 10px;
    font-size: 18px;
    transition: all .4s ease;
    margin: 10px 0;

    &:hover {
        border-bottom: 1px solid #323232;
    }

    &:focus {
        border-bottom: 1px solid #323232;
    }
`

const AddTagModalColorItem = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
`

const AddTagModalBtn = styled.button`
    width: 65%;
    height: 35px;
    background: #27AE60;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    margin: 15px 0;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        background: #157f41;   
    }
`

const AddTagModal: React.FC<AddTagModalProps> = ({addTag, toggleAddTagModal}) => {
    let [enteredData, setEnteredData] = useState<EnteredData>({
        name: '',
        color: ''
    })
    let [pos, setPos] = useState<PositionData>({
        x: 0,
        y: 0
    })
    let nodeElPos: HTMLElement | null = document.querySelector('#add_tag')

    useState(() => {
        console.log(nodeElPos?.offsetLeft, nodeElPos?.offsetTop)

        setPos({
            x: nodeElPos?.offsetLeft,
            y: nodeElPos?.offsetTop
        })
    })

    let success = enteredData.name && enteredData.color

    let colors: ColorItem[] = [
        {color: '#EB5757', title: 'red'},
        {color: '#219653', title: 'green'},
        {color: '#56CCF2', title: 'blue'},
        {color: '#9B51E0', title: 'purple'},
        {color: '#F2C94C', title: 'yellow'},
        {color: '#6FCF97', title: 'leaf'},
        {color: 'rgba(244, 145, 157, 0.85)', title: 'pink'}
    ]

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        let {value} = ev.currentTarget

        setEnteredData(prev => ({
            ...prev,
            name: value
        }))
    }

    const setColor = (ev: React.SyntheticEvent<HTMLElement>) => {
        let group = document.querySelectorAll('#color')
        let elName = ev.currentTarget.title

        group.forEach((c: any) => {
            if(c.title === elName) {
                c.classList.add('colorSelected')
            }
            else c.classList.remove('colorSelected')
        })

        setEnteredData(prev => ({
            ...prev,
            color: elName
        }))
    }

    const onClickHandler = () => {
        let data: TagItem = {
            _id : 't' + Math.random().toString(36).substr(2, 9),
            name: enteredData.name,
            color: enteredData.color,
            data: []
        }

        addTag(data)
        toggleAddTagModal()
    }

    return (
        <AddTagModalBody style={{left: pos.x, top: pos.y}}>
            <AddTagModalInput type='text' value={enteredData.name} placeholder='Введите текст...' onChange={onChangeHandler} />
        
            <ModalColors>
                {
                    colors.map((i: ColorItem, index: number) => {
                        return <AddTagModalColorItem 
                            key={index} 
                            id='color'
                            title={i.title}
                            className={i.title}
                            style={{background: i.color}} 
                            onClick={setColor} 
                        />
                    })
                }
            </ModalColors>

            <AddTagModalBtn disabled={!success} onClick={onClickHandler}>
                Добавить
            </AddTagModalBtn>

            <ModalCloseBtn onClick={() => toggleAddTagModal()}>
                <img src={closeImg} alt='Loading...' />
            </ModalCloseBtn>
        </AddTagModalBody>
    )
}

export default AddTagModal