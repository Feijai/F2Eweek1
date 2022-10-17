import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

const TimeLineBoxCss = styled.div`
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

const TimeLineBox = () => {
    const box = useRef<GSAPTimeline>();
    // const tl = useRef<GSAPTimeline | null>(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // tl.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
            gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
                .to(".box", { x: 100, duration: 1 }) // 水平方向に移動
                .to(".box", { y: 100, duration: 1 }) // 垂直方向に移動
                .to(".box", { rotation: 360, duration: 1 }) // 回転
                .to(".box", { x: 0, duration: 1 }) // 水平方向に移動
                .to(".box", { y: 0, duration: 1 }); // 垂直方向に移動
        }, box);

        return () => ctx.revert();
    });

    return (
        <div ref={box as any} className="aaa">
            <TimeLineBoxCss className="box">Hello</TimeLineBoxCss>
        </div>
    );
}

export default TimeLineBox
