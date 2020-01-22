import React from 'react';
import styled from 'styled-components';
import BudgetListItem from './BudgetItem';
import EmptyTitle from '../../../assets/EmptyTitle';

const BudgetList = styled.div`
    width: 500px;
    min-height: 325px;
    max-height: 100%;
    background: #FAFAFA;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 30px 0;
    align-self: flex-start;
`

const BudgetListHeader = styled.header`
    width: 100%;
    height: 57px;
    background: #313131;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
`

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
`

export default (props) => {
    const showDataHistory = props.data.map((item, index) => {
        return (
            <BudgetListItem
                key={item._id}
                title={item.title} 
                color={item.color} sum={item.sum} 
                course={item.course} 
                index={index + 1} 
            />  
        )
    })

    return <BudgetList>
        <BudgetListHeader style={props.left ? {borderRadius: '5px 25px 0px 0px'} : {borderRadius: '25px 5px 0px 0px'} }>  
            <p>{props.name}</p>    
        </BudgetListHeader> 

        <ColumnContainer>
            {
                props.data.length ? showDataHistory : <EmptyTitle>Нету истории</EmptyTitle>
            }
        </ColumnContainer>
    </BudgetList>
}