import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    // const { data: session } = useSession()  
  return (
    <div className='w-full h-20 bg-slate-800'>
        <h1 className='text-black'>hello</h1>
    </div>
  )
}

export default Nav