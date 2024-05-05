export default function Link({ children, href }) {

    const external = href.charAt(0) !== '/';

    return (
        <a href={href} 
            className="border-b-2 border-brand-dark inline-block h-10" 
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener" : ""}
            >
            {children}
        </a>
    );
}