import ProductSection from '@/sections/product-section';
import { getProduct } from '@/data/products'


export default function AlwaysOnStayAtHomeAssistant() {
 
    const product = getProduct('always-on-stay-at-home-assistant')

    return (
        <ProductSection 
            product={product}
            subtitle="Need a helping hand around the house? Our Always-On-Stay-At-Home-Assistants have got you covered."
            >
            When creating digital products, designers often replicate analogue features to create familiarity 
            for the User. For example, the 'folders' on our 'desktops' look like filing cabinet inserts from 
            the 80's. This principle is known as skeuomorphism. Fast forward 40 years and voice assistant 
            technology is dominated by the feminine tones of Alexa and Siri. Companies argue that studies 
            show people prefer “helpful, supportive... female voices”, however IBM's chess-winning, cancer-curing 
            supercomputer, Watson, is distinctly male. As a result, this normalisation of female voices in 
            service based, domestic settings is now hardwiring sexist tropes into the digital world.
        </ProductSection>
    )
}