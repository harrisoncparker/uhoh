import Image from 'next/image'
import Link from '@/components/link'
import Button from '@/components/button'
import WrapperSection from '@/wrappers/wrapper-section'

import { productsData } from '@/data/products'

export default function BurstYourBubble() {
    return (
        <>
            <section className="pt-32">
                <WrapperSection>
                    <div>
                        <h1 className="text-7xl	font-title stroke-2">
                            Director's Statement
                        </h1>
                        <div className="font-bold">
                            <p className="mt-8">
                                A few years ago a personal experience led me to realise that Virtual
                                Reality was being developed for able-bodied users with little to no
                                regard for people with disabilities. As someone with a limb difference,
                                I found that tasks I'm able to perform in the 'real world' were impossible
                                in the virtual one, an experience <Link href="https://google.com">shared across the disabled community</Link>.
                            </p>
                            <p className="mt-8">
                                This unsettling discovery then opened a can of worms regarding emerging 
                                tech and the way it holds a mirror up to society - which let's face it, 
                                isn't always pretty! From <Link href="https://google.com">skeuomorphic sexism</Link> and <Link href="https://google.com">subreddit culture wars</Link>, 
                                to <Link href="https://google.com">AI's inherent bias'</Link>; When it comes 
                                to cutting edge tech, ethics seem to have fallen to the bottom of the to-do 
                                list. After several attempts to do something about this I finally realised 
                                that as an experienced commercial Director, if there's one thing I know 
                                how to do - it's sell. So how do you sell a hard truth?
                            </p>
                            <p className="mt-8">
                                Well these days it seems like most of life comes with a dystopia warning 
                                and at times I tend to think that if I don't laugh, I'll cry. So if you ask 
                                me, I think it's high time all we took a long, hard look in the mirror and 
                                laughed. Shall we?
                            </p>
                            <p className="mt-8">
                                Go on, I dare you... <Link href="/burst-your-bubble">burst your bubble.</Link>
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
                    <div className="grid grid-cols-4 gap-7">
                        {productsData.map((product) => (
                            <a href={`/${product.slug}`} className="w-full group/button">
                                <Image 
                                    src={`/img/${product.image}`} 
                                    width={301} 
                                    height={377} 
                                    className="rounded-[40px] border-2 border-brand-dark mb-8"
                                    />
                                <div className='flex justify-center'>
                                    <Button href={`/${product.slug}`} isLink={false} inert={true}>
                                        Read more...
                                    </Button>
                                </div>
                            </a>
                        ))}
                    </div>
                </WrapperSection>
            </section>
        </>
    )
}
