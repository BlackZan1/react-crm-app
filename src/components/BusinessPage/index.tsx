import React, { useEffect } from 'react';
import Business from './components/Business';
import { 
    getBusinessDataAction, 
    deleteTagAction, 
    addTagTaskAction,
    addTagAction, 
    deleteTagTaskAction, 
    setTaskDoneAction, 
    setTagNameAction 
} from '../../redux/business-reducer';
import { connect } from 'react-redux';
import { getBusinessSelector } from '../../redux/selectors/business-selector';
import Loader from '../../assets/Loader'
import { BusinessContainerProps } from './interfaces';

const BusinessPageContainer: React.FC<BusinessContainerProps> = ({getBusinessDataAction, isFetching, ...props}) => {
    useEffect(() => {
        getBusinessDataAction()
    }, [getBusinessDataAction])

    return isFetching ? <Loader/> : <Business {...props} />
}

let mapStateToProps = (state: object) => (
    getBusinessSelector(state)
)

export default connect(mapStateToProps, 
{
    getBusinessDataAction, 
    addTagTaskAction, 
    deleteTagAction, 
    addTagAction, 
    deleteTagTaskAction, 
    setTaskDoneAction,
    setTagNameAction
})(BusinessPageContainer)