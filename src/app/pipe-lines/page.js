import ProductSection from '@/sections/product-section';
import { getProduct } from '@/data/products'


export default function PipeLines() {
 
    const product = getProduct('pipe-lines')

    return (
        <ProductSection 
            product={product}
            subtitle="Feeling like you don't fit in? Why not find the right kind of people, with one of our tried and tested Pipe Lines."
            >
            In less than a decade our relationship to the digital world has gone from an active one 
            (where we search) to a passive one (where we consume). Platforms like YouTube and TikTok 
            now compete to engage Users for as long as possible, leading algorithms to develop so 
            called 'pipelines'. These pipelines effectively funnel users from one piece of content to the
            next, increasing the extremity of their sentiment as they go in order to retain the User's 
            attention. This 'algorithmification' of the internet preys on people's insecurities and has 
            led to the rise of neo-Nazi white supremacists, alt-right conspiracy theorists, and perhaps 
            most famously the misogynistic sub-culture known as 'Incels'. As a result, extremist politics 
            are now seeping into the mainstream with no end in sight.
        </ProductSection>
    )
}