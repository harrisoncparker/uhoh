import SparkleIcon from '@/components/svgs/sparkle-icon';

const sparkleJSX = (
    <>
        <span className="block absolute top-3 right-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-light size-10 group-hover/button:bg-transparent" />
        <SparkleIcon svgClass="absolute top-3 right-8 -translate-y-1/2 translate-x-1/2 size-12 stroke-0 stroke-brand-dark group-hover/button:fill-brand-light group-hover/button:stroke-1" />
    </>
)

export default function Button({ children, href, sparkle = false, inert = false, size = 'regular' }) {

    const external = href.charAt(0) !== '/';

    let sizeClass = ''
    switch(size) {
        case 'small':
            sizeClass = 'text-xl px-8 pt-2 pb-3'
            break;
        default:
            sizeClass = 'px-12 pt-3 pb-5'
    }

    const wrapperClassName = `
        group/button
        ${sizeClass}
        relative border-2 rounded-[100%] border-brand-dark cursor-pointer
        hover:bg-brand-dark group-hover/button:bg-brand-dark
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