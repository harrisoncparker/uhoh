import ProductSection from '@/sections/product-section';
import { getProduct } from '@/data/products'


export default function SecondSkin() {
 
    const product = getProduct('second-skin')

    return (
        <ProductSection product={product}>
            <p className="italic mt-4">
                Tired of the real world? Simply slip on our Second Skin and step into a whole new one!
            </p>
            <p className="font-bold mt-8">
                Virtual Reality has set itself the challenge of emulating our physical experiences in an 
                immersive, digital environment. To achieve this, VR software is required to 'read' and 
                interpret the human form in order to replicate our movements. To 'read' the human form, 
                the software needs to be told what to 'look' for - in other words, software developers 
                have to define what the human form is. This has led to the development of products that 
                simply do not work for many Users, particularly those with disabilities. In turn, this 
                is contributing to a dangerous re-emerging narrative surrounding eugenics in the world 
                of cutting edge technology.
            </p>
        </ProductSection>
    )
}