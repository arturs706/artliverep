import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    const { data: session } = useSession()  
  return (
    <div className='h-24 bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ... flex justify-between items-center px-16'>
        <div className='flex w-72 justify-between'>
        <div className='font-roboto text-xs pl-3'>HOME</div>
        <div className='font-roboto text-xs'>PORTFOLIO</div>
        <div className='font-roboto text-xs'>ABOUT</div>
        <div className='font-roboto text-xs'>CONTACT</div>
        </div>
       {
        session ? (
          <div className='flex w-72 justify-between items-center'>
            <div className='font-roboto text-xs pl-3'>{session.user.email}</div>
            <div>
              <button onClick={() => signOut()} className="relative mt-2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
                from-purple-500 
                to-pink-500 
                group-hover:from-purple-500 
                group-hover:to-pink-500 
                hover:text-white 
                dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
                shadow-lg shadow-purple-500/50
                ">
                <span className ="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-bg_custom_2 rounded-md group-hover:bg-opacity-0">
                  SIGN OUT
                </span>
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => signIn()} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
          from-purple-500 
          to-pink-500 
          group-hover:from-purple-500 
          group-hover:to-pink-500 
          hover:text-white 
          dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
          shadow-lg shadow-purple-500/50
          ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-bg_custom_2 rounded-md group-hover:bg-opacity-0">
              SIGN IN
            </span>
        </button>
        )

       }
       
    </div>
  )
}

export default Nav