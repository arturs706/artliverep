import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    // const { data: session } = useSession()  
  return (
    <div className='h-24 flex bg-gray-800 justify-between items-center px-16'>
        <div>ART.LIVE</div>
        <div>Login</div>
    </div>
  )
}

export default Nav