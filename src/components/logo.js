export default function Home({ size = 'md'}) {

    let sizeClass = ""
    switch (size) {
        case 'sm': 
            sizeClass = "text-4xl md:text-[44px] 2xl:text-5xl"
            break;
        default: 
            sizeClass = "text-6xl md:text-7xl"
    }

    return (
        <h1 className={`${sizeClass} font-title stroke-2`}>
            Uh<span className="font-wide font-black">OH</span>
        </h1>
    );
}
