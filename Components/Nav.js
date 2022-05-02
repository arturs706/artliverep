import React, {useEffect, useRef} from 'react'
import gsap from 'https://cdn.skypack.dev/gsap'
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    const { data: session } = useSession()  
    useEffect (() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
          start: 'top -50',
          end: 99999,
          toggleClass: {className: 'jwpnavbar--scrolled', targets: ".target_class"}
        });
        gsap.to(".target_class", {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            start: 'top -300',
            end: 99999,
            toggleActions: "play none none reverse"
          }
        });
      }, []);

      
  return (
    <div className='bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ... sticky w-full z-50 flex justify-between h-20 content-center'>
        <div className='bg-red-500 flex items-center'>LOGO</div>
        <div className='bg-red-500 flex items-center'>AACCOUT</div>
    </div>
  )
}

export default Nav