import Link from "@/components/link"
import Button from "@/components/button"
import WrapperHome from "@/wrappers/wrapper-home"
import TheFilm from "@/components/the-film"

export default function Home() {
    return (
        <>
            <section className="pt-8">
                <WrapperHome>
                    <TheFilm />
                    <div>
                        <p className="italic mt-12">
                            Welcome to the wonderful world of Bubble inc, where tomorrow's tech
                            is here today. Take a tour and find out what the future has in store
                            for you! Just mind you don't burst anything.
                        </p>
                        <p className="font-bold mt-8">
                            Award winning Director, <Link href="https://emilyfredasharp.com">Emily Freda Sharp</Link>, 
                            brings you an all new comedy short about the highs and woes of unethical tech. Starring
                            'Extraordinary's' Luke Rollason, 'Barbie's' Ashley Young, and
                            breakout comedian Horatio Gould, Uh Oh invites you to slip into the
                            not so wonderful world of dystopian tech.
                        </p>
                        <div className="mt-16">
                            <Button href="/burst-your-bubble" sparkle={true} size="lg">
                                Burst your bubble
                            </Button>
                        </div>
                    </div>
                </WrapperHome>
            </section>
        </>
    );
}
