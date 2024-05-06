export default function WrapperFull({ children }) {
    return (
        <div className="w-full max-w-[1920px] mx-auto px-8">
            {children}
        </div>
    );
}