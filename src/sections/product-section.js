import Image from 'next/image'

import WrapperSection from '@/wrappers/wrapper-section'
import ProductCard from '@/components/product-card'
import ButtonBasket from '@/components/button-basket'
import Link from '@/components/link'

import { additionalResources, getOtherProducts } from '@/data/products'

export default function ProductSection({ children, subtitle, product }) {

    const otherProducts = getOtherProducts(product.slug)
    const resources = product.resources.concat(additionalResources)

    return (
        <section className="pt-12">
            <WrapperSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="mx-auto max-w-[500px] md:max-w-none">
                        <Image src={product.image}
                            placeholder="blur"
                            alt={product.slug}
                            className="rounded-[20px] sm:rounded-[40px] border-2 border-brand-dark mb-8 md:mb-4 hidden md:block"
                            />
                        <div className="w-full h-[2px] bg-brand-dark mb-16 md:hidden" />
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
                            {otherProducts.map((otherProduct, key) => (
                                <ProductCard product={otherProduct} key={key} size="sm" />
                            ))}
                        </div>
                    </div>
                
                    <div className="order-first md:order-none">
                        <Image src={product.image}
                            placeholder="blur"
                            alt={product.slug}
                            className="rounded-[20px] sm:rounded-[40px] border-2 border-brand-dark mb-8 md:mb-4 md:hidden"
                            />
                        <div className="flex">
                            <div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] font-title stroke-2">
                                    {product.title}
                                </h1>
                                {children}
                                <div className="md:w-3/4 h-[2px] bg-brand-dark mt-8" />
                                <div className="flex items-center mt-8">
                                    <ButtonBasket href={product.download} filename={`UhOh - ${product.title} - Poster.jpg`} />
                                    <h2 className="text-3xl uppercase font-bold italic ml-8">
                                        Resources
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {resources.map((resource, key) => (
                            <div className="mt-8" key={key}>
                                <p>
                                    <span className="font-bold italic">
                                        <Link href={resource.link}>
                                            {resource.title}
                                        </Link>
                                    </span>
                                    <span class="ml-2">
                                        | {resource.source}
                                    </span>
                                </p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperSection>
        </section>
    )
}