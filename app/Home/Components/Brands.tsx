import React from 'react'
import image from "@/public/image/Group.png"
import image1 from "@/public/image/Group (1).png"
import image2 from "@/public/image/zara-logo-1 1.png"
import image3 from "@/public/image/gucci-logo-1 1.png"
import image4 from "@/public/image/prada-logo-1 1.png"
import Image from 'next/image'
function Brands() {
  return (
    <div className='bg-ec-black flex flex-wrap justify-between px-3 py-8 mb-8'>
        <Image src={image} className='mb-4' alt='logo'/>
        <Image src={image1} className='mb-4' alt='logo'/>
        <Image src={image2} className='mb-4' alt='logo'/>
        <Image src={image3} className='mb-4' alt='logo'/>
        <Image src={image4} className='mb-4' alt='logo'/>
    </div>
  )
}

export default Brands