import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Budget from './components/Budget';
import { getBudgetDataAction, addIncomeItemAction, addCostsItemAction,  } from '../../redux/budget-reducer';
import { getBudgetSelector } from '../../redux/selectors/budget-selector';
import Loader from '../../assets/Loader';

const BusinessPageContainer = ({getBudgetDataAction, isFetching, ...props}) => {
    useEffect(() => {
        getBudgetDataAction()
    }, [getBudgetDataAction])

    return isFetching ? <Loader /> : <Budget {...props} />
}

let mapStateToProps = (state) => (
    getBudgetSelector(state)
)

export default connect(mapStateToProps, { getBudgetDataAction, addIncomeItemAction, addCostsItemAction })(BusinessPageContainer);