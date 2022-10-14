import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

const MoveBoxCss = styled.div`
	width: 100px;
	height: 100px;
    border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-weight: 600;
    background-color:green;
`

const MoveBox = () => {
    const box = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".box", {
                y: 100,
                repeat: -1,
                repeatDelay: 1, 
                yoyo: true
            });
        }, box);

        return () => ctx.revert();
    });

    return (
        <div ref={box as any} className="aaa">
            <MoveBoxCss className="box">Hello</MoveBoxCss>
        </div>
    );
}

export default MoveBox
