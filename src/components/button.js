import SparkleIcon from '@/components/svgs/sparkle-icon';

const sparkleJSX = (
    <>
        <span className="block absolute top-3 right-4 sm:top-3 sm:right-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-light size-8 sm:size-10 group-hover/button:bg-transparent" />
        <SparkleIcon svgClass={`
            absolute top-3 right-4 sm:top-3 sm:right-8 -translate-y-1/2 translate-x-1/2 size-8 sm:size-12 stroke-0 stroke-brand-purple-700 
            group-hover/button:fill-brand-light group-hover/button:stroke-1
            `} />
    </>
)

export default function Button({ children, href, sparkle = false, inert = false, size = 'md' }) {

    const external = href.charAt(0) !== '/';

    let sizeClass = ''
    switch(size) {
        case 'sm':
            sizeClass = 'text-lg sm:text-xl px-6 pt-1 pb-2 sm:px-8 sm:pt-2 sm:pb-3'
            break;
        case 'lg':
            sizeClass = 'text-2xl px-8 pt-2 pb-3 sm:px-12 sm:pt-3 sm:pb-5'
            break;
        default:
            sizeClass = 'text-lg sm:text-2xl px-6 pt-1 pb-2 sm:px-12 sm:pt-3 sm:pb-5'
    }

    const wrapperClassName = `
        group/button
        ${sizeClass}
        relative border-2 rounded-[100%] border-brand-dark cursor-pointer
        hover:bg-brand-purple-700 group-hover/button:bg-brand-purple-700 
        hover:border-brand-purple-700 group-hover/button:border-brand-purple-700 
        hover:text-brand-light group-hover/button:text-brand-light
        `

    if (inert) {
        return (
            <div className={wrapperClassName}>
                <span className="font-bold italic">
                    {children}
                </span>
                { sparkle && sparkleJSX }
            </div>
        )
    }

    return (
        <a href={href}
        className={wrapperClassName}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener" : ""}
        >
            <span className="font-bold italic">
                {children}
            </span>
            { sparkle && sparkleJSX }
        </a>
    );
}