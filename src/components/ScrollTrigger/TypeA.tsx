import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import styled from 'styled-components'

const TypeACss = styled.section`
position: relative;
display: flex;
height: 500px;
overflow: hidden;
  i {
    font-size: 10rem;
  }
  .gate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .gate-left {
    left: 0;
  }
  .gate-right {
    right: 0;
  }

  .gate-right-1 {
    background-color: #ffe7a9;
  }
  .gate-right-1 > i {
    color: #69f0ae;
  }
  .gate-left-1 {
    background-color: #e7ffa9;
  }
  .gate-left-1 > i {
    color: #ffa09d;
  }

  .gate-right-2 {
    background-color: #559496;
  }
  .gate-right-2 > i {
    color: #69f0ae;
  }
  .gate-left-2 {
    background-color: #005f62;
  }
  .gate-left-2 > i {
    color: #ffa09d;
  }

  .gate-right-3 {
    background-color: #69f0ae;
  }
  .gate-right-3 > i {
    color: #69f0ae;
  }
  .gate-left-3 {
    background-color: #ddfbed;
  }
  .gate-left-3 > i {
    color: #ffa09d
  }

`



export default function TypeA() {
    const scrollTypea = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".section3",
                    pin: true,
                    markers: true, // 標記
                    scrub: true,
                    start: "100", // when the top of the trigger hits the top of the viewport
                    end: "+=200", // end after scrolling 500px beyond the start
                }
            })
                .to(".gate-left-1", { yPercent: "-100" })
                .to(".gate-right-1", { yPercent: "100" }, "<")
                .to(".gate-left-2", { yPercent: "-100" })
                .to(".gate-right-2", { yPercent: "100" }, "<")
        }, scrollTypea);

        return () => ctx.revert();
    });

    return (
        <TypeACss className="section3" ref={scrollTypea as any}>
            <div className="gate gate-left gate-left-1 z-20">
                <i className="fa-solid fa-house"></i>
            </div>
            <div className="gate gate-right gate-right-1 z-20">
                <h2>WEEK 1</h2>
            </div>
            <div className="gate gate-left gate-left-2 z-10">
                <i className="fa-solid fa-cloud"></i>
            </div>
            <div className="gate gate-right gate-right-2 z-10">
                <h2>WEEK 2</h2>
            </div>
            <div className="gate gate-left gate-left-3 z-0">
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="gate gate-right gate-right-3 z-0">
                <h2>WEEK 3</h2>
            </div>
        </TypeACss>

    )
}
