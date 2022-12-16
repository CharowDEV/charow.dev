export const HeroBanner = () => {
    return (
        <section className="h-[22rem] w-full mb-12 bg-gradient-radial from-[#1b2735] to-[#090a0f] text-white">
            <div className="container flex h-full w-full flex-col items-center justify-center text-center">
                <h2 className=" h5 mb-1 font-light" style={{ letterSpacing: '10px', wordSpacing: '10px' }}>
                    <span className="bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent">Web2 • Web3</span>
                </h2>
                <h1 className="h3">
                    <span className="bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent">
                        Sharing my code-related learnings
                    </span>
                </h1>
            </div>
        </section>
    );
};
