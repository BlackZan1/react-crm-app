import React from 'react'
import TasksListItem from './TasksListItem'
import { TagItem, TasksListProps } from '../interfaces'
import styled from 'styled-components'

const TasksListContainer = styled.div`
    position: absolute;
    left: 250px;
    top: 70px;
    bottom: 80px;
    right: 0;
    padding: 50px 100px 100px;
    overflow: auto;
`

const TaskListEmpty = styled.div`
    font-size: 32px;
    color: #323232;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 1s ease;
    text-align: left;

    p:last-child {
        line-height: 10px;
        font-weight: 500;
        font-size: 42px;
        color: #a9a9a9;
    } 
`

const TasksList: React.FC<TasksListProps> = ({data, addTagTask, deleteTagTaskAction, setTaskDoneAction, setTagNameAction}) => {
    const showTasks = data.map((i: TagItem) => {
        let key: any = i._id

        return <TasksListItem
                name={i.name} 
                color={i.color} 
                key={key}
                id={i._id}
                data={i.data}
                addTagTask={addTagTask}
                deleteTagTaskAction={deleteTagTaskAction}
                setTaskDoneAction={setTaskDoneAction}
                setTagNameAction={setTagNameAction}
        />
    })

    return (
        <TasksListContainer className={'container'}>
            {
                data.length ?
                showTasks :
                <TaskListEmpty>
                    <p>Добавьте новое дело ✓</p>
                    <p>Это очень легко и практично</p>
                </TaskListEmpty>
            }
        </TasksListContainer>
    )
}

export default TasksList