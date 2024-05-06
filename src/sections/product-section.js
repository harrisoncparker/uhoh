import Image from 'next/image'

import WrapperSection from '@/wrappers/wrapper-section'
import ProductCard from '@/components/product-card'
import ButtonBasket from '@/components/button-basket'
import Link from '@/components/link'


import { products } from '@/data/products'
import { additionalResources } from '@/data/products'

export default function ProductSection({ children, subtitle, product }) {

    const otherProducts = products.filter((products) => {
        return products.slug !== product.slug
    })

    const resources = product.resources.concat(additionalResources)

    return (
        <section className="pt-12">
            <WrapperSection>
                <div className="grid grid-cols-2 gap-12">
                    <div classNames="sticky top-10 self-start">
                        <Image src={product.image}
                            placeholder="blur"
                            alt={product.slug}
                            className="rounded-[40px] border-2 border-brand-dark mb-4"
                            />
                        <div className="grid grid-cols-3 gap-4">
                            {otherProducts.map((otherProduct, key) => (
                                <ProductCard product={otherProduct} key={key} />
                            ))}
                        </div>
                    </div>
                
                    <div className="">
                        <h1 className="text-7xl	font-title stroke-2">
                            {product.title}
                        </h1>
                        <p className="italic mt-8">
                            {subtitle}
                        </p>
                        <p className="font-bold mt-8">
                            {children}
                        </p>
                        <div className="w-3/4 h-[2px] bg-brand-dark mt-8" />
                        <div className="flex items-center mt-8">
                            <ButtonBasket href={product.download} filename={`UhOh - ${product.title} - Poster.jpg`} />
                            <h2 className="text-3xl uppercase font-bold italic ml-8">
                                Resources
                            </h2>
                        </div>
                        {resources.map((resource, key) => (
                            <div className="mt-8" key={key}>
                                <p className="font-bold italic">
                                    <Link href={resource.link}>
                                        {resource.title}
                                    </Link>
                                </p>
                                <p className="mt-1">
                                    {resource.source}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperSection>
        </section>
    )
}