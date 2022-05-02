import React, {useEffect, useRef} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Nav = () => {
    // const { data: session } = useSession()  
  return (
    <div className="mx-4 mb-2 py-4 flex justify-center lg:justify-between lg:items-center overflow-hidden">
        <div className="w-2/3 md:w-1/2 flex justify-end lg:w-32">
            ART.LIVE
        </div>

    </div>
  )
}

export default Nav