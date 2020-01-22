import React, { useState, useEffect } from 'react'
import TasksList from './TasksList'
import { BusinessProps, TagItem, TaskItem } from '../interfaces'
import { AlertModal } from '../modal/alert'
import AddTagModal from '../modal/AddTagModal'
import BusinessNavComponent from './BusinessNav'

const Business: React.FC<BusinessProps> = (
    {
        tasks, 
        deleteTagAction, 
        addTagTaskAction, 
        addTagAction, 
        deleteTagTaskAction,
        setTaskDoneAction,
        setTagNameAction
    }
    ) => {
    let [tagId, setTagId] = useState<number | null | string>(null)
    let [data, setData] = useState<TagItem[] | []>([])
    let [alertModal, setAlertModal] = useState<boolean>(false)
    let [addTagModal, setAddTagModal] = useState<boolean>(false)

    useEffect(() => {
        let elements = document.querySelectorAll('.nav-tag')
        configData(tagId)

        elements.forEach(i => {
            i.classList.remove('tagSelected')
        })
    }, [tasks, tagId])

    const configData = (id: number | null | string) => {
        if(id === null) {
            let arr: TagItem[] = []

            tasks.forEach((i: TagItem) => {
                arr.push(i);
            })

            setData(arr)
        }
        else if(id) {
            tasks.forEach((i: TagItem) => {
                if(i._id === id) {
                    setData([i])
                }
            })
        }
    }

    const onClickDelete = (id: string | number | null) => {
        deleteTagAction(id)
        setTagId(null)
        setAlertModal(true)

        setTimeout(() => {
            setAlertModal(false)
        }, 2000)
    }

    const changeTagId = (id: string | number | null) => {
        configData(id)
    }

    const addTag = (data: TagItem) => {
        addTagAction({...data})
    }

    const toggleAddTagModal = () => {
        setAddTagModal(!addTagModal)
    }

    const addTagTask = (id: string | number | null, data: TaskItem) => {
        addTagTaskAction(id, data)
        configData(id)
    }

    return <>
        <div className='Business'>
            <BusinessNavComponent 
                tasks={tasks} 
                changeTagId={changeTagId} 
                onClickDelete={onClickDelete}
                toggleAddTagModal={toggleAddTagModal} 
            />

            <TasksList  
                data={data} 
                addTagTask={addTagTask} 
                deleteTagTaskAction={deleteTagTaskAction} 
                setTaskDoneAction={setTaskDoneAction}
                setTagNameAction={setTagNameAction}
            />
        </div>

        {
            alertModal && <AlertModal />
        }

        {
            addTagModal && <AddTagModal addTag={addTag} toggleAddTagModal={toggleAddTagModal} />
        }
    </>
}

export default Business