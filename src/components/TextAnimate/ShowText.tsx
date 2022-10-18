import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components';

const ShowTextCss = styled.div`
padding: 50px;
background: #000;
color: white;
font-family: sans-serif;

.word {
    display: inline-block;
    overflow: hidden;
    position: relative;
    line-height: 1;
    font-size: 4rem;
    font-weight: 900;
}
.rect {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
}

`

export default function ShowText() {
    const textRef = useRef();

    useLayoutEffect(() => {
        function createChildTimeline(element: HTMLElement) {
            const elText = element.querySelector(".rect");
            const tl = gsap
                .timeline()
                .from(element, {
                    y: 16,
                    opacity: 0,
                    duration: 0.75,
                    ease: "power4.out",
                })
                .set(elText, { opacity: 0 })
                .to(
                    elText,
                    {
                        x: "105%",
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=50%",
                );
            return tl;
        }
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

            document.querySelectorAll<HTMLElement>(".word").forEach((word) => {
                tl.add(createChildTimeline(word), "-=90%");
            });

        }, textRef);

        return () => ctx.revert();
    });

    return (
        <ShowTextCss ref={textRef as any}>
            <span className="word">
                <span className="rect"></span>
                <span className="label">INTERACTION</span>
            </span>
            <span className="word">
                <span className="rect"></span>
                <span className="label">DESIGN</span>
            </span>
            <span className="word">
                <span className="rect"></span>
                <span className="label">...</span>
            </span>
            <span className="word">
                <span className="rect"></span>
                <span className="label">TECHNOLOGY</span>
            </span >
            <span className="word">
                <span className="rect"></span>
                <span className="label">by</span>
            </span >
            <span className="word">
                <span className="rect"></span>
                <span className="label">ICS MEDIA</span>
            </span>
        </ShowTextCss>
    )
}
