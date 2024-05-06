export default function Link({ children, href }) {

    const external = href.charAt(0) !== '/';

    return (
        <a href={href} 
            className="x:border-b-2 x:border-brand-dark underline inline-block h-10" 
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener" : ""}
            >
            {children}
        </a>
    );
}