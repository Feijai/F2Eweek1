import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Banner } from '../../assets/banner.svg'
import TurnBox from '../../components/Box/TurnBox'
import HoverBox from '../../components/Box/HoverBox'
import MoveBox from '../../components/Box/MoveBox'
import FromBox from '../../components/Box/FromBox'
import Carousel from '../../components/Carousel'
import TimeLineBox from '../../components/Box/TimeLineBox'
import ClickBox from '../../components/Box/ClickBox'
import TypeA  from '../../components/ScrollTrigger/TypeA'

const HomeCss = styled.div`
    .firstRow{
        column-gap:1rem;
    }
`

export default function Home() {


    return (
        <HomeCss className='banner '>
            {/* <div className='position-relatvie'>
                <Banner />
            </div> */}
            <div className='firstRow d-flex p-3 '>
                <TurnBox />
                <HoverBox />
                <MoveBox />
                <FromBox />
                <TimeLineBox />
            </div>
            <div className='mt-5'>
                <TypeA />
            </div>
            <div className='mt-5'>
                <Carousel />
            </div>
            <div className='mt-5'>
                <ClickBox />
            </div>

        </HomeCss>
    )
}
function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.')
}

