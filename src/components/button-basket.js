'use client'

import SparkleIcon from '@/components/svgs/sparkle-icon'
import BasketIcon from '@/components/svgs/basket-icon'
import WrapperHome from '@/wrappers/wrapper-home'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'

export default function ButtonBasket({ href, filename = 'UhOh - Poster.jpg' }) {

    const [downloadMsgOpen, setDownloadMsgOpen] = useState(false)

    const wrapperClassName = `
        group/button
        px-6 pt-1 pb-2
        inline-block relative border-2 rounded-[100%] border-brand-dark cursor-pointer
        hover:bg-brand-purple-700 group-hover/button:bg-brand-purple-700
        hover:text-brand-light group-hover/button:text-brand-light
        hover:border-brand-purple-700 group-hover/button:border-brand-purple-700
        `

    return (
        <>
            <a href={href}
                className={wrapperClassName}
                download={filename}
                title="download poster"
                onClick={() => setDownloadMsgOpen(true)} 
                >
                <BasketIcon svgClass="scale-90 inline-block group-hover/button:fill-brand-light"/>
                <span className="block absolute top-2 right-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-light size-6 group-hover/button:bg-transparent" />
                <SparkleIcon svgClass="absolute top-2 right-3 -translate-y-1/2 translate-x-1/2 size-8 stroke-0 stroke-brand-purple-700 group-hover/button:fill-brand-light group-hover/button:stroke-1" />
            </a>
            <Dialog open={downloadMsgOpen} onClose={() => setDownloadMsgOpen(false)}>
                <div className="fixed inset-0 w-screen h-dvh z-50">
                    <Dialog.Panel className="w-full h-svh flex items-center text-brand-purple-700 bg-brand-light-tranparent">
                        <WrapperHome>
                            <div className="relative mx-auto w-full max-w-[400px] bg-brand-purple border-2 border-brand-purple-700 p-8 rounded-[40px]">
                                <h2 className="text-3xl uppercase font-bold italic">
                                    Poster Downloaded
                                </h2>
                                <p className="italic mt-4">
                                    Spread the word and burst more bubbles!
                                </p>
                                <button 
                                    onClick={() => setDownloadMsgOpen(false)} 
                                    className="underline hover:text-brand-purple-700 mt-4">
                                    close
                                </button>
                                <SparkleIcon svgClass="absolute -top-32 left-20 md:-top-12 md:-left-20 fill-brand-purple-700 size-20" />
                                <SparkleIcon svgClass="absolute -top-16 left-4 md:-top-20 md:left-3 fill-brand-purple-700 size-12" />
                                <SparkleIcon svgClass="absolute -bottom-24 right-4 md:-bottom-12 md:-right-16 fill-brand-purple-700 size-16" />
                                <SparkleIcon svgClass="absolute -bottom-16 left-32 md:-bottom-20 md:left-36 fill-brand-purple-700 size-12" />
                            </div>
                        </WrapperHome>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
       
    );
}