import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
    return (
        <div className="w-full">
            <div className="bg-transparent">
                <form action="" className="sm:max-w-[50%] max-w-[70%] rounded mx-auto flex flex-row justify-between items-center md:mt-12 mt-8 bg-color_01  px-3 shadow-input">
                    <input
                        type="text"
                        name="search"
                        className="px-4 md:py-3 py-2 w-full text-sm md:text-lg"
                        placeholder="Tìm bài viết..."
                    />
                    <AiOutlineSearch className="cursor-pointer text-[20px]"/>
                </form>
            </div>
        </div>
    )
};

export default SearchForm;