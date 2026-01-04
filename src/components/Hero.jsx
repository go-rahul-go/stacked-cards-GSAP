import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { images } from '../data'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {



        gsap.fromTo(".box:not(:first-child)",
            {

               x: "-200vw",
                rotate:"-90deg"


            },
            {
               x: "0",
                rotate:"0deg",
                stagger: 0.5,
                duration:1,
                scrollTrigger: {
                    trigger:".wrapper",
                    pin:true,
                    scrub:1,
                    


                }
            })



    }, [])
    return (
        <div className='wrapper h-screen'>
            <div className='hero'>
                {
                    images.map((image, index) => {
                        return (
                            <div className='box absolute  w-[80%] h-[50vh] md:w-[50%] md:h-[80vh] overflow-hidden' key={index}>
                                <img src={image} alt="" className='w-full h-full object-cover' loading='blur' />
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default Hero