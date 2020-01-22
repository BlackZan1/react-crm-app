import React, { useState } from 'react'
import styled from 'styled-components'
import penImage from '../../../img/pen.png'
import successImage from '../../../img/business.png'
import { TasksListItemProps, TaskItem } from '../interfaces'
import TasksListItemInput from './TasksListItemInput'

const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 30px;
    animation: fadeIn .5s ease;
`

const ItemTitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    text-align: right;
    width: 65%;
    padding: 0px 0px 30px 0px;
    border-bottom: 1px solid #dcdcdc; 

    & > img {
        width: 45px;
        cursor: pointer;
    }

    & > img:hover {
        opacity: 0.7;
    }

    & > input {
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        text-align: right;
        background: none;
        border: none;
        color: #a9a9a9;
    }

    & > input::placeholder {
        color: #dcdcdc;
    }
`

const ItemTaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`

const ItemListName = styled.div`
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    animation: fadeInLeft .5s ease;
    position: relative;

    & > div {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 20px 0 0;
        cursor: pointer;

        & > img {
            width: 25px;
        }
    }
`
const ItemListBtn = styled.button`
    position: absolute;
    right: 0;
    background: none;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    padding: 5px 7.5px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        border: 1px solid #a9a9a9;
    }
`

const TasksListItem: React.FC<TasksListItemProps> = ({name, color, data, id, addTagTask, deleteTagTaskAction, setTaskDoneAction, setTagNameAction}) => {
    let [changeMode, setChangeMod] = useState<boolean>(false)
    let [newName, setNewName] = useState<string>('')
    let colors: any = {
        'red': '#EB5757',
        'green': '#219653',
        'blue': '#56CCF2',
        'purple': '#9B51E0',
        'yellow': '#F2C94C',
        'leaf': '#6FCF97',
        'pink': 'rgba(244, 145, 157, 0.85)'
    }

    let colorStyle = colors[`${color}`]

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(ev.currentTarget.value)
    }

    const addNewTagTask = (data: TaskItem) => {
        addTagTask(id, data)
    }

    const deleteTagTask = (taskId: string | null |number) => {
        deleteTagTaskAction(id, taskId)
    }

    const setTaskDone = (taskId: string | null | number) => {
        setTaskDoneAction(id, taskId)
    }

    const setTagName = (title: string) => {
        setTagNameAction(id, title)
        setChangeMod(false)
        setNewName('')
    }

    return <ContainerItem>
            <ItemTitle style={{color: colorStyle}}>
                {
                    changeMode ? <input type="text" placeholder={name} value={newName} onChange={onChangeHandler} onBlur={() => setTagName(newName)} /> : <> {name} </>
                }

                <img src={penImage} alt="..." onClick={() => setChangeMod(!changeMode)} />
            </ItemTitle>
        
            <ItemTaskList>
                {
                    data.length ? 
                        data.map((j: TaskItem) => {
                            let borderStyles = j.done ? '' : '1px solid #dcdcdc'
                            let key: any = j._id

                            return <ItemListName key={key}>
                                <div style={{border: borderStyles}} onClick={() => setTaskDone(j._id)}>
                                    {
                                        j.done && <img src={successImage} alt="..." />
                                    }
                                </div>
                                
                                <p>
                                    {j.title}
                                </p>

                                <ItemListBtn style={{color: colorStyle}} onClick={() => deleteTagTask(j._id)}>
                                    <span role={'img'}>❌</span>
                                </ItemListBtn>
                            </ItemListName>
                        })
                    :

                    <h3>Нету заданий! Вы можете поставить их прямо сейчас</h3>
                }

                <TasksListItemInput color={colorStyle} addNewTagTask={addNewTagTask} />
            </ItemTaskList>
    </ContainerItem>
}

export default TasksListItem