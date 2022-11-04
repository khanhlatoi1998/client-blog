import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ValuePost } from "../../common/Type";
import Homestay from "./Homestay";

interface Props {
    stateListHomestay: Array<ValuePost>;
}

const ListAccommodation: React.FC<Props> = (props) => {
    const { stateListHomestay } = props;
    const showItems = 6;
    const pageCount = Math.ceil(stateListHomestay.length / showItems);
    const [selectedPage, setSelectedPage] = useState<number>(0);


    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };

    return (
        <section className="pt-12">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">ĐỊA ĐIỂM LƯU TRÚ</h1>
                </div>
                <div className="py-12 grid sm:grid-cols-3 grid-cols-2 gap-x-8 lg:gap-y-14 gap-y-8">
                    {
                        stateListHomestay.slice(selectedPage, selectedPage + showItems).map((post: ValuePost) => {
                            return (
                                <Homestay key={post.id} post={post} />
                            )
                        })
                    }
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        className="flex justify-end gap-1 text-sm"
                        pageLinkClassName="px-2 py-[2px] rounded-sm"
                        activeLinkClassName="bg-color_04 text-white"
                        previousLinkClassName="px-2 py-1"
                        nextLinkClassName="px-2 py-1"
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                    />
                </div>
            </div>
        </section>
    );
};

export default ListAccommodation;