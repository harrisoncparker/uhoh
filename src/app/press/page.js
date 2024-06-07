import Image from 'next/image'

import WrapperSection from '@/wrappers/wrapper-section'
import Button from '@/components/button'


import pressPackStill from '@public/img/press-pack-still.jpg'

export default function PipeLines() {
    return (
        <section className="pt-12">
            <WrapperSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="mx-auto max-w-[500px] md:max-w-none">
                        <Image src={pressPackStill}
                            placeholder="blur"
                            alt=""
                            className="rounded-[20px] sm:rounded-[40px] border-2 border-brand-dark mb-8 md:mb-4 mt-4 md:mt-0"
                            />
                    </div>
                    <div className="order-first md:order-none">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] font-title stroke-2">
                            Press
                        </h1>
                        <p className='mt-8'>
                            The truth about the lack of ethics in emerging tech is an understudied and let's be honest, 
                            sometimes fairly unglamorous subject. So to raise awareness, 'Uh Oh' sits at the 
                            heart of a full circle campaign to burst people's bubbles. 
                        </p>
                        <p className='mt-8'>
                            For feature enquiries please contact Sophia Melvin - sophia.melvin@kodemedia.com
                        </p>
                        <div className='mt-16'>
                            <Button href="/pdf/press-pack.pdf" download='Uh Oh Press Pack' sparkle={true} size="lg">
                                Press Pack
                            </Button>
                        </div>
                    </div>
                </div>
            </WrapperSection>
        </section>
    )
}