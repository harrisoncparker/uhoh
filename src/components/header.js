'use client'

import Logo from "@/components/logo"
import WrapperFull from "@/wrappers/wrapper-full"
import useSticky from "@/utils/use-sticky";
import { useEffect, useState } from "react"

const NavItems = () => (
    <>
        <a href="/burst-your-bubble" className="text-3xl font-title border-brand-dark md:hover:border-b-[2px] text-center md:text-right inline-block">
            Burst Your Bubble
        </a>
        <a href="/credits" className="text-3xl font-title border-brand-dark md:hover:border-b-[2px] mt-8 md:mt-0 md:ml-16 text-center md:text-right inline-block">
            Credits
        </a>
    </>
)

export default function Header() {

    const {ref, isSticky} = useSticky()
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setNavOpen(false)
            }
        }, true);
    })

    return (
        <header ref={ref} className="sticky top-0 left-0 right-0 z-20 bg-brand-light">
            <WrapperFull>
                <div className="flex items-center justify-between py-4 md:py-6">
                    <a href="/">
                        <Logo size="sm" />
                    </a>
                    <nav className="hidden md:block">
                        <NavItems />
                    </nav>
                    <button className="relative w-[29px] h-[24px] md:hidden" aria-label="Menu Button" onClick={toggleNav}>
                        <span className={
                            'w-full h-[2px] rounded-full bg-brand-dark absolute left-0 transition-all ease-out ' +
                            (navOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-0')
                            }>
                        </span>
                        <span className={ 
                            'w-full h-[2px] rounded-full bg-brand-dark absolute left-0 top-1/2 -translate-y-1/2 transition-all ease-out ' +
                            (navOpen && 'opacity-0')
                            }>
                        </span>
                        <span className={ 
                            'w-full h-[2px] rounded-full bg-brand-dark absolute left-0 transition-all ease-out ' +
                            (navOpen ? 'bottom-1/2 translate-y-1/2 rotate-45' : 'bottom-0')
                            }>
                        </span>
                    </button>
                </div>
                <div className={`border-brand-dark h-1 ${isSticky ? 'border-b-2' : ''}`}/>
            </WrapperFull>
            <div className={`fixed inset-0 w-screen h-screen -z-10 bg-brand-light ${navOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col justify-center align-center w-full h-full">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}