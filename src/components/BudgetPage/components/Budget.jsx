import React, { useState } from 'react';
import styled from 'styled-components';
import BudgetList from './BudgetList';
import BudgetButtonIn from './BudgetButtonIn';
import BudgetButtonCost from './BudgetButtonCost';
import BudgetModal from '../modal';

const BudgetTop = styled.div`
    width: 30%;
    height: 80px;
    background: #FAFAFA;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 26px;
    font-weight: 400;
    padding: 0 30px;
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translate(-50%, 0px);
`

const BudgetHistory = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    margin: 320px auto 150px;
`

const BudgetAbsoluteButtonsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translate(-50%, 0px);
`

export default (props) => {
    let [modal, setModal] = useState(false);
    let [income, setIncome] = useState(null)

    const toggleModalMode = (mode, income) => {
        setModal(mode);
        setIncome(income);
    }

    return <>
        <div className='Budget' style={{animation: 'fadeIn .3s ease'}}>
            <BudgetTop>
                <p>Бюджет</p>
                <span>
                    {props.budget} RU
                </span>
            </BudgetTop>

            <BudgetAbsoluteButtonsContainer>
                <BudgetButtonIn toggleModalMode={toggleModalMode} />

                <BudgetButtonCost toggleModalMode={toggleModalMode} />
            </BudgetAbsoluteButtonsContainer>

            <BudgetHistory>
                <BudgetList name={'Доходы'} data={props.income} left={true} />

                <BudgetList name={'Расходы'} data={props.costs} />
            </BudgetHistory>
        </div>

        {
            modal && <BudgetModal 
                action={income ? props.addIncomeItemAction : props.addCostsItemAction} 
                toggleModalMode={toggleModalMode}
                actionType={income ? 'Пополнить' : 'Вычесть'} 
            />
        }
    </>
}