import React, { useState } from 'react'
import styled from 'styled-components'
import { ListInputProps, TaskItem } from '../interfaces'

const ListForm = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 110%;
    border-top: 1px solid #dcdcdc;
    padding: 25px 0 0;
    margin: 20px 0;
`

const ListInput = styled.input`
    width: 220px;
    height: 40px;
    border-radius: 7px;
    border: 1px solid #dcdcdc;
    padding: 0 20px;
    font-size: 16px;
`

const ListBtn = styled.button`
    height: 40px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    text-decoration:none;
    color: #fff;
    padding:10px 20px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        filter: brightness(90%);
    }
`

const TasksListItemInput: React.FC<ListInputProps> = ({color, addNewTagTask}) => {
    let [title, setTitle] = useState<string>('')

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(ev.currentTarget.value)
    }

    const onClickHandler = () => {
        let newTask: TaskItem = {
            _id: 't' + Math.random().toString(36).substr(2, 9),
            title,
            done: false
        }

        addNewTagTask(newTask)
        setTitle('')
    }

    return (
        <ListForm>
            <ListInput type='text' name='tasksInput' placeholder='Новое дело...' value={title} onChange={onChangeHandler} />

            <ListBtn style={{background: color}} onClick={onClickHandler}>
                Добавить
            </ListBtn>
        </ListForm>
    )
}

export default TasksListItemInput