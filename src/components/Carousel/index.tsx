import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap';

const CarouselCss = styled.section`
    height: 100%;
    overflow: hidden; /*隱藏超出外層容器的元素*/
    max-width: 100%;
  .loop {
    display: inline-block;
    font-family: "Dela Gothic One";
    font-size: 5rem;
    color: transparent;
    white-space: nowrap; /*文字必須設為nowrap，否則文字會自動換行*/
    height: 100%;
    -webkit-text-stroke: 1px black;
  }
  .loop > span {
    display: inline-block;
  }
`

export default function Carousel() {
    const carousel = useRef();

    useLayoutEffect(() => {
        const loop = gsap.context(() => {
            gsap.to(".loop", {
                xPercent: "-50", //往左50%
                ease: "none",
                duration: 10,
                repeat: -1,
            });
        }, carousel);

        return () => loop.revert();
    });


    return (
        <CarouselCss className="section4" ref={carousel as any}>
            <ul className="loop">
                <li>
                    <span> THE F2E THE F2E THE F2E THE F2E </span
                    ><span> THE F2E THE F2E THE F2E THE F2E </span>
                </li>
                <li>
                    <span> THE F2E THE F2E THE F2E THE F2E </span>
                    <span> THE F2E THE F2E THE F2E THE F2E </span>
                </li>
                <li>
                    <span> THE F2E THE F2E THE F2E THE F2E </span>
                    <span> THE F2E THE F2E THE F2E THE F2E </span>
                </li>
            </ul>
        </CarouselCss>
    )
}
