import Logo from "@/components/logo"
import WrapperSection from "@//wrappers/wrapper-section"

export default function Home() {
    return (
        <>
            <section className="">
                <WrapperSection>
                    <div className="w-full pt-[75%] mb-20 bg-white rounded-[80px] bg-[url('/img/video-cover.jpg')] bg-cover bg-no-repeat bg-center border-2 border-brand-dark">
                        {/* play button */}
                    </div>
                    <div>
                        <Logo />
                        <p className="text-3xl font-body italic mt-8">
                            Welcome to the wonderful world of Bubble inc, where tomorrow's tech
                            is here today. Take a tour and find out what the future has in store
                            for you! Just mind you don't burst anything.
                        </p>
                        <p className="text-3xl font-body font-bold mt-8">
                            Award winning Director, Emily Freda Sharp, brings you an all new
                            comedy short about the highs and woes of unethical tech. Starring
                            'Extraordinary's' Luke Rollason, 'Barbie's' Ashley Young, and
                            breakout comedian Horatio Gould, Uh Oh invites you to slip into the
                            not so wonderful world of dystopian tech.
                        </p>
                    </div>
                </WrapperSection>
            </section>
        </>
    );
}
