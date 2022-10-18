import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'

const TypeBCss = styled.div`
    .section1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fd89b9;
  }

  .container1 {
    position: relative;
    margin-bottom: -100px;
    width: 50%;
    height: 30%;
    background-color: #fff;
    border: 1px solid #000;
  }

  .box1 {
    width: 100px;
    height: 100px;
    background-color: #165e83;
  }

  .section2 {
    display: flex;
    justify-content: center;
    padding: 200px 0;
    background-color: #fd89b9;
    // background-color: #1e2a60;
  }
`

export default function TypeB() {

    const scrollTypea = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".box1",
                    markers: true,
                    start: 'top 35%', 
                    end: 'top 5%',
                    scrub: true,
                }
            })
                .to('.box1', {
                    top: 0,
                    left: '50%',
                    xPercent: '-50',
                    // duration: 10,
                    position: 'absolute',
                }).to('.box1', {
                    top: '100%',
                    yPercent: '-100',
                    // duration: 20,
                    position: 'absolute',
                })
        }, scrollTypea);

        return () => ctx.revert();
    });
    return (
        <TypeBCss ref={scrollTypea as any}>
            <section className="section1">
                <div className="container1">
                    <div className="box1 scrub">1</div>
                </div>
            </section>
            <section className="section2">
            </section>
        </TypeBCss>
    )
}
