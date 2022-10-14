import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

const HoverBoxCss = styled.div`
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

const HoverBox = () => {
    const box = useRef();

    const onEnter = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
    };

    const onLeave = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };
    return (
        <div ref={box as any} className="aaa">
            <HoverBoxCss onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Hover Me</HoverBoxCss>
        </div>
    );
}

export default HoverBox
