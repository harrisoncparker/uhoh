import Image from 'next/image'
import WrapperSection from '@/wrappers/wrapper-section'

import mainPosterImage from '@public/img/main-poster.jpg'
import { creditsData } from '@/data/credits'

const CreditSection = ({ creditSection }) => {
    return (
        <div className="mb-12">
            <h2 className="font-bold">{creditSection.heading}</h2>
            <ul>
                {creditSection.items.map((creditItem, key) => (
                    <li className="mt-2" key={key}>
                        {creditItem}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function CreditsPage() {
    return (
        <section className="pt-32">
            <WrapperSection>
                <div className="flex">
                    <div className="text-right">
                        <h1 className="text-7xl	font-title stroke-2 mb-20">
                            Credits
                        </h1>
                        {creditsData.map((creditSection, key) => <CreditSection creditSection={creditSection} key={key} />)}
                    </div>
                    <div className="flex-grow ml-48">
                        <Image 
                            src={mainPosterImage}
                            placeholder="blur"
                            alt="uh oh - poster"
                            className="w-full sticky top-28 rounded-[40px] border-2 border-brand-dark mb-8"
                            />
                    </div>
                </div>
            </WrapperSection>
        </section>
    )
}