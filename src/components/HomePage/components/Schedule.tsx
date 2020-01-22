import React, { useState, useEffect } from 'react'
import PieChart from 'react-minimal-pie-chart'
import { ProgressItem } from '..'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface ScheduleProps {
    progress: ProgressItem[]
    title: string
}

const ScheduleContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInLeft 1s ease;

    & > a {
        width: 150px;
        margin: 30px auto;
        border-bottom: 2px solid #dcdcdc;
        border-top: 2px solid #dcdcdc;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 10px 0;
        color: dodgerblue;
        text-decoration: none;
        transition: all .4s ease;
        cursor: pointer;

        &:hover {
            border-bottom: 2px solid #323232;
            border-top: 2px solid #323232;
        }
    }
`

const ScheduleInfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;

    & > div {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin: 0 40px 0 0;
    }

    & > span {
        font-size: 20px;
    }
`

const ScheduleTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: #323232;
    text-align: center;
    margin: 50px auto 0;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 50px 20px;
`

const Schedule: React.FC<ScheduleProps> = ({progress, title}) => {
    let [data, setData] = useState<any[]>([])

    useEffect(() => {
        progress.forEach((i: ProgressItem) => {
            let newDataObject: ProgressItem = {
                color: i.color,
                value: i.value,
                title: i.title
            }

            setData(prev => [
                ...prev,
                newDataObject
            ])
        })
    }, [])

    return (
        <ScheduleContainer>
            <ScheduleTitle>
                {title}
            </ScheduleTitle>

            <PieChart 
                style={{width: '50%', height: '50%', margin: '-150px auto'}}
                animate={true}
                animationDuration={1000}
                animationEasing="ease-in-out"
                cx={50}
                cy={50}
                data={data}
                label={true}
                labelStyle={{
                    fill: '#121212',
                    fontFamily: 'Oxygen',
                    fontSize: '0.3px'
                }}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={15}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={15}
                rounded={true}
                startAngle={0}
                viewBoxSize={[
                10,
                10
                ]}
            />

            {
                data.length && data.map((i, index) => {
                    return <ScheduleInfoItem key={index}>
                        <div style={{background: i.color}}>

                        </div>

                        <span>{i.title} в %</span>
                    </ScheduleInfoItem>
                })
            }

            <NavLink to={title === 'Бюджет' ? '/budget' : '/business'}>
                Перейти >
            </NavLink>
        </ScheduleContainer>
    )
}

export default Schedule