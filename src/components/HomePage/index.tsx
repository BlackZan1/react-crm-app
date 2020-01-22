import React, { useEffect } from 'react';
import Schedule from './components/Schedule';
import { connect } from 'react-redux';
import { getProgressData } from '../../redux/home-reducer';
import Loader from '../../assets/Loader';
import { getHomeSelector } from '../../redux/selectors/home-selector';
import InfoComponent from './components/Info';

export interface ProgressItem {
    title: string
    value: number | string
    color: string
}

export interface UserInfo {
    image: string | null
    name: string
    email: string
}

interface HomePageProps {
    isFetching: boolean
    progress: ProgressItem[]
    getProgressData: () => void
    user: UserInfo
}

const HomePage: React.FC<HomePageProps> = ({isFetching, getProgressData, user, progress}) => {
    useEffect(() => {
        getProgressData()
    }, [getProgressData])

    return isFetching ? <Loader /> 
    : 
    (
        <div className='Home'>
            <InfoComponent name={user.name} email={user.email} image={user.image} />

            {
                progress.length && progress.map((i: any, index: number) => {
                    return <Schedule key={index} progress={i.data} title={i.title} />
                })
            }
        </div>
    )
}

let mapStateToProps = (state: any) => (
    getHomeSelector(state)
)

export default connect(mapStateToProps, {getProgressData})(HomePage);