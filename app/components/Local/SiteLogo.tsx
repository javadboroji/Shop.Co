import React from 'react'
import logo from "@/public/image/SHOP.CO.jpg"
import Image from 'next/image'
function SiteLogo(){
  return (
    <Image  src={logo} alt='logo' className='mx-2 w-24 lg:w-36'/>
  )
}

export default SiteLogo