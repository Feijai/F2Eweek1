import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Banner } from '../../assets/banner.svg'
import TurnBox from '../../components/Box/TurnBox'
import HoverBox from '../../components/Box/HoverBox'
import MoveBox from '../../components/Box/MoveBox'
import FromBox from '../../components/Box/FromBox'
import Carousel from '../../components/Carousel'
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
            </div>
            <div className='mt-5'>
                <Carousel />
            </div>
            <div className='mt-5'>
                
            </div>
        </HomeCss>
    )
}
