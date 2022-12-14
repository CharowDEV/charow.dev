export const HeroBanner = () => {
    return (
        <section className="w-full h-80 text-white bg-gradient-radial from-[#1b2735] to-[#090a0f]">
            <div className="container w-full h-full flex flex-col justify-center items-center text-center">
                <h2 className=" h5 mb-1 font-light" style={{ letterSpacing: "10px", wordSpacing: "10px" }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#38495a]">Web2 • Web3</span>
                </h2>
                <h1 className="h3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#38495a]">Sharing my code-related learnings</span>
                </h1>
            </div>
        </section>
    );
};
