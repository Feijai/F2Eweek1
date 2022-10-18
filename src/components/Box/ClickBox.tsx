import React, { ReactNode, useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components';

const BoxCss = styled.div`
height:100px;
width:100px;
background-color:black;
border-radius:10px;
color: white;
`
const CircleCss = styled.div`
height:100px;
width:100px;
background-color:yellow;
border-radius:100px;
color: black;
`


const Box: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <BoxCss className="box ms-3 d-flex justify-content-center align-items-center">{children}</BoxCss>;
}

const Circle: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <CircleCss className="circle ms-3 d-flex justify-content-center align-items-center">{children}</CircleCss>;
}

function ClickBox() {
    const [reversed, setReversed] = useState(false);
    const clickbox = useRef();
    // store the timeline in a ref.
    const tl = useRef<GSAPTimeline>();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // add a box and circle animation to our timeline and play on first render
            tl.current && tl.current.progress(0).kill();
            tl.current = gsap.timeline()
                .to(".box", {
                    rotation: 360
                })
                .to(".circle", {
                    x: 100
                });
        }, clickbox);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // toggle the direction of our timeline
        console.log("toggling reverse to", reversed);
        /* @ts-ignore */
        tl.current.reversed(reversed);
    }, [reversed]);

    return (
        <div className="clickbox d-flex justify-content-center align-items-center" ref={clickbox as any}>
            <div>
                <button onClick={() => setReversed(!reversed)}>Toggle</button>
            </div>
            <Box>box</Box>
            <Circle>circle</Circle>
        </div>
    );
}


export default ClickBox;
