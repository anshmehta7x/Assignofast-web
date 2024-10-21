export default function Stats() {
    const statsData = [
        { value: "2.2k", label: "Followers" },
        { value: "120+", label: "Projects" },
        { value: "97+", label: "Awards" }
    ];

    return (
        <section className="bg-black text-white p-6 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        GET ACQUAINTED WITH <br className="hidden md:inline" /> OUR KEY FACTS
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end md:w-2/3">
                    {statsData.map((stat, index) => {
                        const mainValue = stat.value.slice(0, -1);
                        const lastChar = stat.value.slice(-1);

                        return (
                            <div key={index} className="p-4 m-2 text-center w-auto lg:mr-12 lg:ml-12">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                    {mainValue}
                                    <span className="text-[#89ef00]">{lastChar}</span>
                                </h1>
                                <p className="text-sm md:text-base">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}