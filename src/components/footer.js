import WrapperFull from "@/wrappers/wrapper-full"

export default function Footer() {
    return (
        <footer className="mt-12">
            <WrapperFull>
                <div className="flex justify-between w-full border-t-2 border-brand-dark text-3xl font-body pt-12 pb-10">
                    <ul>
                        <li className="mb-2">
                            <a href="/burst-your-bubble" className="border-brand-dark hover:border-b-[1px]">
                                Burst Your Bubble
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/pipe-lines" className="border-brand-dark hover:border-b-[1px]">
                                Pipe Lines
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/second-skin" className="border-brand-dark hover:border-b-[1px]">
                                Second Skin
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/always-on-stay-at-home-assistant" className="border-brand-dark hover:border-b-[1px]">
                                Always-On-Stay-At-Home Assistant
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/know-it-all" className="border-brand-dark hover:border-b-[1px]">
                                Know-It-All
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/credits" className="border-brand-dark hover:border-b-[1px]">
                                Credits
                            </a>
                        </li>
                    </ul>
                    <ul className="text-right">
                        <li className="mb-2">
                            <a href="https://emilyfredasharp.com" target="_blank" rel="noopener" className="border-brand-dark hover:border-b-[1px]">
                                emilyfredasharp.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.instagram.com/emilyfredasharp" target="_blank" rel="noopener" className="border-brand-dark hover:border-b-[1px]">
                                Instagram
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.linkedin.com/in/emily-freda-sharp" target="_blank" rel="noopener" className="border-brand-dark hover:border-b-[1px]">
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://kodemedia.com" target="_blank" rel="noopener" className="border-brand-dark hover:border-b-[1px]">
                                kodemedia.com
                            </a>
                        </li>
                    </ul>
                </div>
            </WrapperFull>
        </footer>
    );
}