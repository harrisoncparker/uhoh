export default function WrapperSection({ children }) {
    return (
        <div className="w-full max-w-[900px] 2xl:max-w-[1200px] mx-auto px-4 md:px-8">
            {children}
        </div>
    );
}
