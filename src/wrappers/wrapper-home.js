export default function WrapperHome({ children }) {
    return (
        <div className="w-full max-w-[720px] 2xl:max-w-4xl mx-auto px-4 md:px-8">
            {children}
        </div>
    );
}
