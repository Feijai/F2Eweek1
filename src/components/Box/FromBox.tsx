import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

const FromBoxCss = styled.div`
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

const FromBox = () => {
    const box = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".box", {
                rotation: "+=360",
                y: 100,
                opacity: 0,
                repeat: -1,
                repeatDelay: 1, 
                duration: 1
            });
        }, box);

        return () => ctx.revert();
    });

    return (
        <div ref={box as any} className="aaa">
            <FromBoxCss className="box">Hello</FromBoxCss>
        </div>
    );
}

export default FromBox
