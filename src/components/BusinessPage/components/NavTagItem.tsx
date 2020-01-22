import React from 'react'
import styled from 'styled-components'
import closeImage from '../../../img/close.png'
import { NavTagItemProps } from '../interfaces'

const NavItem = styled.div`
    position: relative;
    width: 75%;
    background: transparent;
    padding: 5px 10px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px 10px;
    border-radius: 10px;
    transition: background. 4s ease;
    cursor: pointer;
    animation: fadeInLeft .4s ease;

    &:hover {
        background: #fff;
    }

    & > .close {
        display: none;
    }
`

const NavItemColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 10px 0 0;
`

const NavItemCloseBtn = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    hieght: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    cursor: pointer;

    & > img {
        filter: brightness(0%);
        opacity: 0.7;
        width: 10px;
    }
`

const NavTagItem: React.FC<NavTagItemProps> = ({name, color, id, onClick, deleteTag}) => {
    let colors: any = {
        'red': '#EB5757',
        'green': '#219653',
        'blue': '#56CCF2',
        'purple': '#9B51E0',
        'yellow': '#F2C94C',
        'leaf': '#6FCF97',
        'pink': 'rgba(244, 145, 157, 0.85)'
    }
    let componentID: any = id

    let fixName: string[] = name.split('')

    for (let i = 0; i < fixName.length; i++) {
        if(i > 12 && fixName.length >= 15) {
            fixName[i] = '.'
        } 
        if(i > 15) {
            fixName[i] = ''
        }
    }

    let itemName: string = fixName.join('')

    console.log(itemName)

    return <NavItem onClick={() => onClick(id)} className={'nav-tag'} id={componentID}>
        <NavItemColor style={{background: colors[color] ? colors[color] : color}} />
        
        <span>{itemName}</span>

        <NavItemCloseBtn className='close' onClick={() => deleteTag(id)}>
            <img src={closeImage} alt={'x'} />
        </NavItemCloseBtn>
    </NavItem>
}

export default NavTagItem