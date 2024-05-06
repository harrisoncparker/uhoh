import SparkleIcon from '@/components/svgs/sparkle-icon';
import BasketIcon from '@/components/svgs/basket-icon'

export default function ButtonBasket({ href, filename = 'UhOh - Poster.jpg' }) {

    const wrapperClassName = `
        group/button
        px-8 pt-2 pb-3
        inline-block relative border-2 rounded-[100%] border-brand-dark cursor-pointer
        hover:bg-brand-dark group-hover/button:bg-brand-dark
        hover:text-brand-light group-hover/button:text-brand-light
        `

    return (
        <a href={href}
        className={wrapperClassName}
        target="_blank"
        download={filename}
        title="download poster"
        >
            <BasketIcon svgClass="inline-block group-hover/button:fill-brand-light"/>
            <span className="block absolute top-2 right-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-light size-8 group-hover/button:bg-transparent" />
            <SparkleIcon svgClass="absolute top-2 right-4 -translate-y-1/2 translate-x-1/2 size-10 stroke-0 stroke-brand-dark group-hover/button:fill-brand-light group-hover/button:stroke-1" />
        </a>
    );
}