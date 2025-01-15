'use client'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { HOME_CAROUSEL } from '@/constants'

const HomeCarousel = () => {
    return <div className='absolute w-full top-0 left-0 right-0 bottom-0 overflow-hidden'> 
        <video
            autoPlay
            src={'/storage/videos/final.mp4'}
            loop
            style={{objectFit:'cover'}}
            poster={'/storage/college1.png'}
            className=' [object-fit:cover] h-[110%] md:w-full w-auto z-[3] '
            muted
            controls
            preload="none" />
    </div>
}

export default HomeCarousel