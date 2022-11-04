import SearchForm from "../search/SearchForm";

const Banner = () => {
    return (
        <section className="">
            <div className="relative md:pt-[33.4%] pt-[67%]">
                <div className="absolute top-0 left-0 w-full h-full bg-banner bg-cover bg-no-repeat bg-center flex flex-row justify-center">
                    <SearchForm />
                </div>
            </div>
        </section>
    );
}

export default Banner;