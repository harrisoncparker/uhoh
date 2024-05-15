export default function Title({ children}) {
    return (
        <h1 className="text-5xl 2xl:text-6xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] font-title stroke-2">
            { children }
        </h1>
    )
}