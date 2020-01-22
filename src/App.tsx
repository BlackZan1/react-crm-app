import React, { useEffect } from 'react'
import { useRoutes } from './assets/Routes';
import { connect } from 'react-redux';
import { getUserInfoAction } from './redux/user-reducer';
import { getAppSelector } from './redux/selectors/app-selector';
import Footer from './components/Footer/index.js';
import Navbar from './components/Navbar/index.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index.js';
import BigLoader from './assets/BigLoader';

interface AppProps {
    isAuth: boolean
    getUserInfoAction: () => void
}

const App: React.FC<AppProps> = ({isAuth, getUserInfoAction}) => {
    const routes = useRoutes(isAuth)

    useEffect(() => {
        getUserInfoAction()
    }, [getUserInfoAction])

    return (
        <>
            {
                isAuth ?
                <BrowserRouter>
                    <div className='App'>
                        <Header />

                        { routes }

                        <Footer>
                            <Navbar />
                        </Footer>
                    </div>
                </BrowserRouter>
                :
                <BigLoader />
            }
        </>
    )
}

let mapStateToProps = (state: object) => (
    getAppSelector(state)
)

export default connect(mapStateToProps, {getUserInfoAction})(App);