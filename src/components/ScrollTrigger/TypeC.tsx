import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const TypeCCss = styled.section`
display: flex;
justify-content: center;
padding: 200px 0;
background-color: #1e2a60;
  .container2 {
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    margin-left: -10%;
  }
  .boxwrap-half {
    position: relative;
    display: flex;
    justify-content: end;
    width: 50%;
  }
  .boxwrap-full {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .box2 {
    width: 300px;
    height: 300px;
    background-color: #fff;
  }

  .typing {
    font-size: 2rem;
    font-family: "DotGothic16", sans-serif;
    color: #fff;
  }
  .cursor {
    visibility: "hidden";
    color: #fff;
    font-size: 2rem;
  }
`

export default function TypeB() {
    const scrollTypea = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        const hide = (element: HTMLElement) => {
            gsap.set(element, { opacity: 0, visibility: "hidden" });
        }
        const animated = (element: HTMLElement) => {
            //依照條件設定x初始值
            const x = element.classList.contains("from-left") ? -200 : element.classList.contains("from-right") ? 200 : 0

            //設定元素初始值
            element.style.transform = `translate(${x}px, 0px)`;
            gsap.fromTo(
                element,
                { x: x, y: 0, opacity: 0, visibility: "hidden" },
                {
                    duration: 1,
                    delay: 0.2,
                    x: 0,
                    y: 0,
                    visibility: "visible",
                    opacity: "1",
                    ease: "expo",
                    overwrite: "auto",
                }
            );
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".cursor",
                0,
                {
                    visibility: "hidden",
                },
                {
                    visibility: "visible",
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 0.3,
                }
            );
            gsap.utils.toArray<HTMLElement>(".animation-wrapper").forEach((element) => {
                if (
                    element.classList.contains("from-left") ||
                    element.classList.contains("from-right")
                ) {
                    hide(element);
                    ScrollTrigger.create({
                        trigger: element,
                        markers: true,
                        onEnter: function () {
                            animated(element);
                        },
                        onEnterBack: function () {
                            animated(element);
                        },
                        onLeave: function () {
                            hide(element);
                        },
                    });
                } else if (element.classList.contains("typing")) {
                    const typing1Content = "這裡是第一段";
                    const typing2Content = "這裡是第二段";
                    const typing3Content = "這裡是第三段";

                    gsap.to(".typing1", {
                        text: typing1Content,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".typing1",
                            toggleActions: "play pause resume reset",
                        },
                    })
                    gsap.to(".typing2", {
                        text: typing2Content,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".typing2",
                            toggleActions: "play pause resume reset",
                        },
                    });
                    gsap.to(".typing3", {
                        text: typing3Content,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: ".typing3",
                            toggleActions: "play pause resume reset",
                        },
                    });
                }
            })
        }, scrollTypea);

        return () => ctx.revert();
    });
    return (
        <TypeCCss ref={scrollTypea as any} className="section2">
            <ul className="container2">
                <li className="boxwrap-half">
                    <div>
                        <div className="animation-wrapper box2 from-left">2</div>
                        <p>
                            <span className="animation-wrapper typing typing1"></span>
                            <span className="cursor">_</span>
                        </p>
                    </div>
                </li>
                <li className="boxwrap-full">
                    <div>
                        <div className="animation-wrapper box2 from-right">2</div>
                        <p>
                            <span className="animation-wrapper typing typing2"></span>
                            <span className="cursor">_</span>
                        </p>
                    </div>
                </li>
                <li className="boxwrap-half">
                    <div>
                        <div className="animation-wrapper box2 from-left">2</div>
                        <p>
                            <span className="animation-wrapper typing typing3"></span>
                            <span className="cursor">_</span>
                        </p>
                    </div>
                </li>
            </ul>
        </TypeCCss>
    )
}
