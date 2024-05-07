import ProductSection from '@/sections/product-section';
import Link from '@/components/link';
import { getProduct } from '@/data/products'


export default function AlwaysOnStayAtHomeAssistant() {
 
    const product = getProduct('always-on-stay-at-home-assistant')

    return (
        <ProductSection product={product}>
            <p className="italic mt-4">
                Need a helping hand around the house? Our Always-On-Stay-At-Home-Assistants have got you covered.
            </p>
            <p className="font-bold mt-8">
                When creating digital products, designers often replicate analogue features to create familiarity 
                for the User. For example, the 'folders' on our 'desktops' look like filing cabinet inserts from 
                the 80's. This principle is known as skeuomorphism. Fast forward 40 years and voice assistant 
                technology is dominated by the feminine tones of Alexa and Siri. Companies argue that studies 
                show people prefer “<Link href="https://medium.com/pcmag-access/the-real-reason-voice-assistants-are-female-and-why-it-matters-e99c67b93bde#:~:text=%E2%80%9CHowever%2C%20for%20our%20objectives%20%E2%80%94,choice%2C%E2%80%9D%20according%20to%20Redmond.">helpful, supportive... female voices</Link>”, however IBM's chess-winning, cancer-curing 
                supercomputer, Watson, is distinctly male. As a result, this normalisation of female voices in 
                service based, domestic settings is now hardwiring sexist tropes into the digital world.
            </p>
        </ProductSection>
    )
}