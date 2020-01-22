import React from 'react';
import styled from 'styled-components';
import userImage from '../../../img/user.png';

const UserHeader = styled.div`
    position: absolute;
    width: 560px;
    height: 70px;
    right: 0px;
    top: 0px;
    background: #323232;
    border-radius: 0px 0px 0px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-size: 20px; 
    padding: 0 0 0 40px;
`

const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
    overflow: hidden;
    margin: 0 20px 0 0;

    & > img {
        height: 55px;
    }
`

const UserLogOutBtn = styled.div`
    padding: 8px;
    background: #fff;
    font-size: 16px;
    border-radius: 10px;
    color: #000;
    font-weight: 500;
    margin: 0 0 0 55%;
    cursor: pointer;

    &:hover {
        background: #dcdcdc;
    }
`

export default ({name, isAuth, image}) => {
    return (
        <UserHeader>
            <UserAvatar>
                <img src={image ? image : userImage} alt={'Loading...'} />
            </UserAvatar>

            {isAuth ? name : 'Log In'}

            <UserLogOutBtn>
                {isAuth ? 'Log out' : 'Log In'}
            </UserLogOutBtn>
        </UserHeader>
    )
}