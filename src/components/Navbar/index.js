import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import businessImg from '../../img/business.png';
import budgetImg from '../../img/budget.png';
import homeImg from '../../img/home.png';

const Navbar = styled.div`
    position: fixed;
    width: 460px;
    height: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 40px;
    background: rgba(242, 242, 242, 0.85);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
`

const NavItem = styled.div`
    width: 55px;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .4s ease;

    &:hover {
        transform: translate(0px, -10px);
    }
`
const NavImage = styled.img`
    width: 50px;
`

export default () => {
    return (
        <Navbar>
            <NavLink to={'/business'} activeClassName="selected">
                <NavItem>
                    <NavImage src={businessImg} alt={'Loading...'}/>
                </NavItem>
            </NavLink>

            <NavLink to={'/home'} activeClassName="selected">
                <NavItem>
                    <NavImage src={homeImg} alt={'Loading...'}/>
                </NavItem>
            </NavLink>

            <NavLink to={'/budget'} activeClassName="selected">
                <NavItem>
                    <NavImage src={budgetImg} alt={'Loading...'}/>
                </NavItem>
            </NavLink>
        </Navbar>
    )
}