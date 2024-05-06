import Image from 'next/image'
import Button from '@/components/button'

export default function ProductCard({ product }) {
    return (
        <a href={`/${product.slug}`} className="w-full group/button">
            <Image 
                src={product.image}
                placeholder="blur"
                alt={product.slug}
                className="rounded-[20px] border-2 border-brand-dark mb-8"
                />
            <div className='flex justify-center'>
                <Button href={`/${product.slug}`} isLink={false} inert={true} size="small">
                    Read more...
                </Button>
            </div>
        </a>
    )
}