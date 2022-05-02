import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    // const { data: session } = useSession()  
  return (
    <div className='h-24 bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ... flex justify-between items-center px-16'>
        <div className='font-roboto text-xl'>ART.LIVE</div>
        <div className='font-roboto'>LOGIN</div>
    </div>
  )
}

export default Nav