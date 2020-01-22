import React from 'react'
import styled from 'styled-components'
import userImage from '../../../img/user.png'

interface InfoComponentProps {
    image: string | null
    email: string
    name: string
}

const InfoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 15px #dcdcdc;
    padding: 80px 0;
    animation: fadeIn 1s ease;
`

const InfoImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #323232;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    & > div { 
        width: inherit;
        height: inherit;
        overflow: hidden;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > img {
            width: 275px;
        }
    }
`

const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 20px;
    margin: 0 0 0 200px;

    & > p:first-child {
        font-size: 26px;
        font-weight: 500;
        border-bottom: 2px solid #323232;
        padding: 0 30px 15px 0;
        margin: 0 0 -15px 0;
    }
`

const InfoComponent: React.FC<InfoComponentProps> = ({image, email, name}) => {
    return (
        <InfoContainer>
            <InfoImage>
                <div>
                    <img src={image ? image : userImage} alt="Loading..."/>
                </div>
            </InfoImage>

            <InfoText>
                <p> {name} </p>

                <p> {email} </p>
            </InfoText>
        </InfoContainer>
    )
}

export default InfoComponent