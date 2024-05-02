import Logo from "@/components/logo"
import WrapperFull from "@//wrappers/wrapper-full"

export default function Header() {
    return (
        <header className="sticky top-0 left-0 right-0">
            <WrapperFull>
                <a href="/">
                    <Logo />
                </a>
                <nav>
                    <a href="/burst-your-bubble" className="text-3xl font-title border-brand-dark hover:border-b-[1px]">
                        Burst Your Bubble
                    </a>
                    <a href="/credits" className="text-3xl font-title ml-16 border-brand-dark hover:border-b-[1px]">
                        Credits
                    </a>
                </nav>
            </WrapperFull>
        </header>
    );
}