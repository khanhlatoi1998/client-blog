import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ValuePost } from "../../common/Type";
import PostCategory from "./PostCategory";

interface Props {
    listPost: Array<ValuePost>;
}

const ListPostCategory: React.FC<Props> = (props) => {
    const { listPost } = props;

    const showItems = 4;
    const pageCount = Math.ceil(listPost.length / showItems);
    const [selectedPage, setSelectedPage] = useState<number>(0);

    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };

    return (
        <div className="w-full lg:w-2/3 ">
            <div className="flex flex-col gap-8">
                {
                    listPost?.slice(selectedPage, selectedPage + showItems).map((post: ValuePost) => {
                        return (
                            <PostCategory key={post.id} post={post}/>
                        )
                    })
                }

                <div className="py-4 px-4 bg-color_01 lg:shadow-around shadow-md rounded">
                    <div>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            className="flex lg:justify-start justify-center gap-1 text-sm"
                            pageLinkClassName="px-2 py-[2px] rounded-sm"
                            activeLinkClassName="bg-color_04"
                            previousLinkClassName="px-2 py-1"
                            nextLinkClassName="px-2 py-1"
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                        />
                    </div>
                    {/* <div className="text-sm">Trang 1 cua 7</div> */}
                </div>
            </div>

        </div>
    );
};

export default ListPostCategory;