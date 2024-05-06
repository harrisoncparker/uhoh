'use client'

import Image from 'next/image'
import Vimeo from '@u-wave/react-vimeo';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import PlayIcon from '@/components/svgs/play-icon.js'

import videoCoverImage from '@public/img/video-cover.jpg'
import spinnerSVG from '@public/img/spinner.svg'


export default function TheFilm() {
    let [isOpen, setIsOpen] = useState(false)
  
    return (
        <div>
            <button 
                onClick={() => setIsOpen(true)}
                className="relative overflow-hidden w-full pt-[75%] bg-white rounded-[40px] md:rounded-[80px] bg-brand-purple-700 bg-cover bg-no-repeat bg-center border-2 border-brand-dark">
                <Image
                    src={videoCoverImage}
                    alt="film cover image"
                    className="absolute top-0 left-0 w-full h-full"
                    placeholder="blur"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    />
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <PlayIcon svgClass="hover:fill-brand-dark" />
                </div>
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 w-screen h-screen z-50 bg-brand-light">
                    <Dialog.Panel className="w-full h-full">
                        <div className="absolute w-full top-1/2 -translate-y-1/2 left-0 flex justify-center">
                            <Image src={spinnerSVG} width="128" height="128" className="animate-spin size-20" alt="" />
                        </div>
                        <div className="h-full flex items-center">
                            <div className="ar-4-3 m-auto bg-brand-purple">
                                <Vimeo
                                    video="942938107"
                                    responsive="true"
                                    autoplay="true"
                                    paused={!isOpen}
                                    />
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-2 left-4 hover:underline hover:text-brand-purple-700">
                            close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    )
}