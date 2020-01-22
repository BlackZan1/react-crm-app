import React from 'react';
import styled from 'styled-components';

const BudgetItem = styled.div`
    width: 90%;
    height: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 17px;
    margin: 15px auto;
    padding: 0 5%;
`

const BudgetItemColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`

const BudgetItemNumber = styled.div`
    width: 20px;
    font-weight: 500;
`

const BudgetItemTitle = styled.div`
    margin: 0 0 0 30px;
    width: 80%;
`

const BudgetItemCloseBtn = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > img {
        width: 15px;
    }

    &:hover > img {
        animation: spin 1s ease;
    }
`

const BudgetListItem = ({title, color, sum, course, index}) => {
    let colors = {
        'red': '#EB5757',
        'green': '#219653',
        'blue': '#56CCF2',
        'purple': '#9B51E0',
        'yellow': '#F2C94C',
        'leaf': '#6FCF97',
        'pink': 'rgba(244, 145, 157, 0.85)'
    }

    let itemColor = colors[color];

    return (
        <BudgetItem>
            <BudgetItemNumber>
                {index}
            </BudgetItemNumber>

            <BudgetItemColor style={{background: itemColor}} />

            <BudgetItemTitle>
                {title}

                . Сумма: 
                <span style={{color: itemColor, fontWeight: 500}}>
                    {' ' + sum}

                    {' ' + course.toUpperCase()}
                </span>
            </BudgetItemTitle>

            <BudgetItemCloseBtn>
                <span style={{color: itemColor}}>❌</span>
            </BudgetItemCloseBtn>
        </BudgetItem>
    )
}

export default BudgetListItem;