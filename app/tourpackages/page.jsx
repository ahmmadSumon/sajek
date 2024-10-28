import React from 'react'
import { CardHoverEffectDemo } from '../components/ui/card-hover-effect'

const Packages = () => {
  return (
    <div className=' flex flex-col gap-10 justify-center items-center mt-20'>
      <h1 className="text-5xl py-10 font-bold text-center mb-4">সাজেক ট্যুর প্যাকেজ</h1>
      <p className="text-xl text-center mb-8">আপনার পছন্দের প্যাকেজটি বুকিং দিন</p>
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Packages