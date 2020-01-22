import React from 'react';
import styled from 'styled-components';
import tasksImage from '../../../img/tasks.png';
import addImage from '../../../img/add.png';
import NavTagItem from './NavTagItem';
import { BusinessNavProps, TagItem } from '../interfaces';

const BusinessNav = styled.div`
    position: absolute;
    width: 250px;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #F2F2F2;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeInLeft .4s ease;
`

const BusinessTasks = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const NavBtn = styled.div`
    width: 75%;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.7;
    display: flex;
    justify-content: flex-start;
    align-self: flex-center;
    align-items: center;
    margin: 35px 0px;
    padding: 10px 15px;
    border-radius: 10px;
    transition: background. 4s ease;
    cursor: pointer;

    & > img {
        width: 20px;
        margin: 0 10px 0 0;
    }

    &:hover {
        background: #fff;
    }
`

const NavEmpty = styled.div`
    font-size: 20px;
    color: #a9a9a9;
    font-weight: 500;
    text-align: center;
`

const BusinessNavComponent: React.FC<BusinessNavProps> = ({tasks, changeTagId, onClickDelete, toggleAddTagModal}) => {
    const onClickHandler = (id: string | number | null) => {
        let elements = document.querySelectorAll('.nav-tag')

        elements.forEach(i => {
            if(i.id === id) i.classList.add('tagSelected')
            else i.classList.remove('tagSelected')
        })

        changeTagId(id === 'main-tag' ? null : id)
    }

    const onClickDeleteHandler = (id: string | number | null) => {
        onClickDelete(id)
        changeTagId(null)
    }

    let showTags = tasks.map((i: TagItem) => {
        let key: any = i._id

        return <NavTagItem 
                name={i.name} 
                key={key} 
                color={i.color} 
                id={i._id}
                onClick={onClickHandler}
                deleteTag={onClickDeleteHandler}
        />
    })

    return <BusinessNav>
        <BusinessTasks>
            {
                tasks.length ? <>
                    <NavBtn className={'nav-tag tagSelected'} id={'main-tag'} onClick={() => onClickHandler('main-tag')}>
                        <img src={tasksImage} alt={'+'} />

                        <span>Все задачи</span>
                    </NavBtn>
                
                    {
                        showTags
                    }
                </>
                :
                <NavEmpty>
                    Нету задач :(
                </NavEmpty>
            }

            <NavBtn onClick={() => toggleAddTagModal()} id={'add_tag'}>
                <img src={addImage} alt={'+'} />

                <span>Добавить папку</span>
            </NavBtn>
        </BusinessTasks>
    </BusinessNav>
}

export default BusinessNavComponent