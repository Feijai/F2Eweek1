import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import { SlowMo } from 'gsap/EasePack';

const AnimateBoxCss = styled.div`
        height: 100vh;
        margin: 0;
        padding: 0;
        color: white;
        background: #000;
        font-family: sans-serif;
        display: grid;
        place-items: center;
      

      .container {
        display: grid;
        grid-template-columns: repeat(13, 5vw);
        gap: 10px;
      }

      .rect {
        width: 5vw;
        height: 5vw;
        display: block;
        border: white 2px solid;
        position: relative;
      }
`

export default function AnimateBox() {

    const AnimateBox = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(SlowMo);
        for (let i = 0; i < 13 * 3; i++) {
            const rect = document.createElement("div");
            rect.classList.add("rect");
            document.querySelector(".container")!.appendChild(rect);
        }

        let ctx = gsap.context(() => {
            // 格子状に適用
            const tl = gsap
                .timeline()
                .from(".rect", {
                    scale: 0,
                    rotation: -360,
                    duration: 0.5,
                    stagger: {
                        each: 0.1,
                        from: "start", // 中央から
                        grid: "auto", // 格子状に開始
                    },
                })
                .addLabel("complete");

            // 時間軸に対してトゥイーン
            tl.tweenTo("complete", {
                duration: 6,
                // ここに時間軸に対してイージング
                ease: "slow(0.2, 0.7, false)",
                repeat: -1,
                repeatDelay: 0.5,
            });
        }, AnimateBox);

        return () => ctx.revert();
    });


    return (
        <AnimateBoxCss ref={AnimateBox as any}><div className="container"></div></AnimateBoxCss>
    )
}
