import Logo from "@/components/logo"

export default function NotFound() {
    return (
        <>
            <section className="h-screen w-screen flex flex-col justify-center items-center text-3xl font-body">
                <Logo />
                <p className="mb-8 mt-8">
                    This page doesn't exists
                </p>
                <p className="italic font-bold text-6xl">
                    404
                </p>
            </section>
        </>
    );
}
