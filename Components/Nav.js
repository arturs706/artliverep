import React, {useEffect, useRef} from 'react'
import gsap from 'https://cdn.skypack.dev/gsap'
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
// import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
//   const { data: session } = useSession()  
  
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
    <div className='w-full fixed top-0 left-0 ease-in duration-400 target_class h-16'>
      <div className='bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ... backdrop-filter backdrop-blur-lg bg-opacity-10 w-full h-20 flex justify-between items-center'>
        <div className='pl-20 flex w-144 justify-between h-20 items-center'>
          <h2 className='text-2xl'>ART.LIVE</h2>
          <p className='text-sm'>NEWS</p>
          <p className='text-sm'>PORTFOLIO</p>
          <p className='text-sm pr-12'>CONTACT</p>
        </div>
        <div>
        {/* { session 
        ? 
        <div className='pr-14'>
          
          <div className='opacity-70'>
          <Image
            src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651439880/Untitled-3_k0q8zv.svg"
            alt="icon"
            width={24}
            height={24}
            quality = {100}
            layout = 'fixed'
          />
          </div>
        </div>
        : 
        <div>
        <div><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "onClick={() => signIn()}>SIGN IN</button></div>
        </div> 
        
        } */}
        </div>
        
        </div>
   
    </div>
  )
}

export default Nav