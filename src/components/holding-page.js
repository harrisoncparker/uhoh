import WrapperSection from "@/wrappers/wrapper-section"
import Logo from "@/components/logo"

export default function HoldingPage() {
    return (
        <section>
            <WrapperSection>
                <div className="flex h-dvh items-center justify-center">
                    <div>
                        <Logo />
                        <p className="text-4xl text-center mt-12 text-bold">
                            Permiering 9th May 6pm BST
                        </p>
                    </div>
                </div>
            </WrapperSection>
        </section>
    );
}
