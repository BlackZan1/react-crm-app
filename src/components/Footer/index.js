import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background: #EB5757;
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
`

export default (props) => {
    return <Footer>
        {props.children}
    </Footer>
}