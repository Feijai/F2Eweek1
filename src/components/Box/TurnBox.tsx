import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

const TurnBoxCss = styled.div`
	width: 100px;
	height: 100px;
    border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: var(--green);
	font-weight: 600;
	color: var(--light);
    background-color:green;
`

const TurnBox = () => {
    const box = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".box", {
                repeat: -1,
                repeatDelay: 1,
                rotation: "+=360",
            });
        }, box);

        return () => ctx.revert();
    });

    return (
        <div ref={box as any} className="aaa">
            <TurnBoxCss className="box">Hello</TurnBoxCss>
        </div>
    );
}

export default TurnBox
