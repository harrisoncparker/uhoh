import Link from '@/components/link'
import WrapperSection from '@/wrappers/wrapper-section'
import ProductCard from '@/components/product-card'
import Title from '@/components/title'

import { products } from '@/data/products'

export default function BurstYourBubble() {
    return (
        <>
            <section className="pt-12">
                <WrapperSection>
                    <div>
                        <Title>
                            Director's Statement
                        </Title>
                        <div className="font-bold">
                            <p className="mt-8">
                                A few years ago a personal experience led me to realise that Virtual
                                Reality was being developed for able-bodied users with little to no
                                regard for people with disabilities. As someone with a limb difference,
                                I found that tasks I'm able to perform in the 'real world' were impossible
                                in the virtual one, an experience <Link href="https://www.wired.com/story/virtual-reality-accessibility-disabilities/">shared across the disabled community</Link>.
                            </p>
                            <p className="mt-8">
                                This unsettling discovery then opened a can of worms regarding emerging 
                                tech and the way it holds a mirror up to society - which let's face it, 
                                isn't always pretty! From <Link href="https://thenextweb.com/news/ai-could-hardwire-sexism-into-the-future">skeuomorphic sexism</Link> and <Link href="https://gnet-research.org/2022/05/23/examining-incel-subculture-on-reddit/">subreddit culture wars</Link>, 
                                to <Link href="https://hbr.org/2019/10/what-do-we-do-about-the-biases-in-ai">AI's inherent bias'</Link>; When it comes 
                                to cutting edge tech, ethics seem to have fallen to the bottom of the to-do 
                                list. After several attempts to do something about this I finally realised 
                                that as an experienced commercial Director, if there's one thing I know 
                                how to do - it's sell. So how do you sell a hard truth?
                            </p>
                            <p className="mt-8">
                                Well these days it seems like most of life comes with a dystopia warning 
                                and at times I tend to think that if I don't laugh, I'll cry. So if you ask 
                                me, I think it's high time we all took a long, hard look in the mirror and 
                                laughed. Shall we?
                            </p>
                            <p className="mt-8">
                                Go on, I dare you... burst your bubble.
                            </p>
                            <p className="font-normal italic mt-8">
                                <Link href="https://emilyfredasharp.com">
                                    Emily Freda Sharp
                                </Link>
                            </p>
                        </div>
                    </div>
                </WrapperSection>
            </section>
            <section>
                <WrapperSection>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-16 mt-10 mx-auto max-w-[600px] lg:max-w-none">
                        {products.map((product, key) => (
                            <ProductCard product={product} key={key} />
                        ))}
                    </div>
                </WrapperSection>
            </section>
        </>
    )
}
