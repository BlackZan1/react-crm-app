import React from 'react';
import HeaderTime from './components/HeaderTime';
import HeaderUser from './components/HeaderUser';
import { connect } from 'react-redux';
import { getHeaderSelector } from '../../redux/selectors/header-selector';

const Header = (props) => {
    return <div style={{background: 'transparent'}}>
        <HeaderTime />

        <HeaderUser {...props} />
    </div>
}

let mapStateToProps = (state) => (
    getHeaderSelector(state)
)

export default connect(mapStateToProps)(Header);