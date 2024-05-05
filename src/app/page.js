import Logo from "@/components/logo"
import Button from "@/components/button"
import WrapperSection from "@/wrappers/wrapper-section"

export default function Home() {
    return (
        <>
            <section className="pt-24">
                <WrapperSection>
                    <div>
                        <div className="w-full pt-[75%] mb-16 bg-white rounded-[80px] bg-[url('/img/video-cover.jpg')] bg-cover bg-no-repeat bg-center border-2 border-brand-dark">
                            {/* play button */}
                        </div>
                    </div>
                    
                    <div>
                        <Logo />
                        <p className="italic mt-8">
                            Welcome to the wonderful world of Bubble inc, where tomorrow's tech
                            is here today. Take a tour and find out what the future has in store
                            for you! Just mind you don't burst anything.
                        </p>
                        <p className="font-bold mt-8">
                            Award winning Director, Emily Freda Sharp, brings you an all new
                            comedy short about the highs and woes of unethical tech. Starring
                            'Extraordinary's' Luke Rollason, 'Barbie's' Ashley Young, and
                            breakout comedian Horatio Gould, Uh Oh invites you to slip into the
                            not so wonderful world of dystopian tech.
                        </p>
                        <div className="mt-16">
                            <Button href="/burst-your-bubble" sparkle={true}>
                                Burst your bubble
                            </Button>
                        </div>
                    </div>
                </WrapperSection>
            </section>
        </>
    );
}
