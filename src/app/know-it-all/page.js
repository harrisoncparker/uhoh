import ProductSection from '@/sections/product-section';
import { getProduct } from '@/data/products'


export default function KnowItAll() {
 
    const product = getProduct('know-it-all');

    return (
        <ProductSection 
            product={product}
            subtitle="Wish you had someone to talk to? Try the all new Know-It-All, clinically proven to be just like you... but improved!"
            >
            The invention of AI has been heralded as “the single biggest event in human history” but in the 
            race to the finish line many companies have placed ethics at the bottom of their to-do lists. 
            Due to systemic prejudices in society, the data that AI 'learns' from is inherently biased. 
            For example, academic research into autism has historically under-represented women and minority 
            ethnicities in their studies. As a result, when AI is asked to create an image of an autistic 
            person, 98% of the results present as young, white, males. Amongst engineers this process is 
            known as 'Garbage-In-Garbage-Out', a concept that describes poor quality data input leading to 
            poor quality output. The repercussions of this are wide-reaching but at its core it begs the 
            question, whose world does AI reflect?
        </ProductSection>
    )
}