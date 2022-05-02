import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    // const { data: session } = useSession()  
  return (
    <div className='h-24 bg-gray-800 flex justify-between items-center px-16'>
        <div className='bg-gray-800'>ART.LIVE</div>
        <div className='bg-gray-800'>Login</div>
    </div>
  )
}

export default Nav