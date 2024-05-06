export default function WrapperFull({ children }) {
    return (
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
            {children}
        </div>
    );
}