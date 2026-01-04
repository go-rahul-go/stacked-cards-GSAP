import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import c from "../assets/c.jpg"
gsap.registerPlugin(ScrollTrigger)

const Balloon = () => {
    useGSAP(() => {
        gsap.fromTo(".balloon", {
            width: "100px",
            height: "100px"
        },
            {
                width: "100%",
                height: "100%",
                borderRadius:"0px",
                duration:0.2,
                scrollTrigger: {
                    trigger:".container",
                    pin: ".container",
                    scrub: true
                }
            })
    })
    return (
        <div className='container w-full h-[100vh]'>
            <div className='balloon overflow-hidden'>
                <img src={c} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default Balloon