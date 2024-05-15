import Image from 'next/image'
import WrapperHome from '@/wrappers/wrapper-home'

import mainPosterImage from '@public/img/main-poster.jpg'
import { creditsData } from '@/data/credits'

const CreditSection = ({ creditSection }) => {
    return (
        <div className="mb-8 md:mb-12">
            <h2 className="font-bold">{creditSection.heading}</h2>
            <ul>
                {creditSection.items.map((creditItem, key) => (
                    <li className="mt-1 md:mt-2" key={key}>
                        {creditItem}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function CreditsPage() {
    return (
        <section className="pt-12">
            <WrapperHome>
                <div className="flex flex-col-reverse md:flex-row justify-center">
                    <div className="text-center md:text-right mt-16 md:mt-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] font-title stroke-2 mb-10 md:mb-20">
                            Credits
                        </h1>
                        {creditsData.map((creditSection, key) => <CreditSection creditSection={creditSection} key={key} />)}
                    </div>
                    <div className="flex-grow md:ml-16 max-w-[400px] md:max-w-none mx-auto md:mx-0">
                        <Image 
                            src={mainPosterImage}
                            placeholder="blur"
                            alt="uh oh - poster"
                            className="w-full sticky top-40 rounded-[40px] border-2 border-brand-dark mb-8"
                            />
                    </div>
                </div>
            </WrapperHome>
        </section>
    )
}