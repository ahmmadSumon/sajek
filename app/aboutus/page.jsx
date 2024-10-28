import React from 'react'
import { StickyScrollRevealDemo } from '../components/StickyScrollRevealDemo'

const AboutUs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center mt-10 px-4 py-10 md:py-20'>
      <div className='flex flex-col gap-4 md:gap-8 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold'>ট্রিপ সেভেন্টিন</h1>
        <p className='text-lg md:text-xl'>আনন্দময় ভ্রমণের নির্ভরযোগ্য সঙ্গী</p>
      </div>
      <div className='w-full md:w-2/3 mt-8 md:mt-16'>
        <StickyScrollRevealDemo />
      </div>
    </div>
  )
}

export default AboutUs
