export default function Button({ children, href, external }) {
    return (
        <a href={href} className="sticky top-0 left-0 right-0">
            {children}
        </a>
    );
}