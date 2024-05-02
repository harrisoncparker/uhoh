export default function WrapperSection({ children }) {
    return (
        <div className="wrapper w-full max-w-5xl mx-auto py-8">
            {children}
        </div>
    );
}
