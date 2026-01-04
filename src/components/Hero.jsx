import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {
        


        gsap.fromTo(".box:not(:first-child)",
            {

                x: "100vw",


            },
            {
                x: "0",

                stagger: 3,
                duration: 3,
                scrollTrigger: {
                  
                    pin: ".wrapper",
                    scrub: 3,


                }
            })

            

    }, [])
    return (
        <div className='wrapper h-screen'>
            <div className='hero'>
                <div className='box absolute bg-blue-500'></div>
                <div className='box absolute bg-red-500'></div>
                <div className='box absolute bg-orange-500'></div>
                <div className='box absolute bg-green-500'></div>
                <div className='box absolute bg-purple-500'></div>
                <div className='box absolute bg-zinc-500'></div>
            </div>
        </div>
    )
}

export default Hero