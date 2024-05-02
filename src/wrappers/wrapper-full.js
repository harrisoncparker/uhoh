export default function WrapperFull({ children }) {
    return (
        <div className="flex items-center justify-between wrapper w-full max-w-[1920px] mx-auto py-4 px-8">
            {children}
        </div>
    );
}