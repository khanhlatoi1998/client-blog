import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ValuePost } from "../../common/Type";
import BlogShare from "./BlogShare";

interface Props {
    stateListBlogShare: Array<ValuePost>;
}

const ListBlogShare: React.FC<Props> = (props) => {
    const { stateListBlogShare } = props;
    const showItems = 4;
    const pageCount = Math.ceil(stateListBlogShare.length / showItems);
    const [selectedPage, setSelectedPage] = useState<number>(0);


    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };

    return (
        <section className="pt-12 sm:pb-6">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">BLOG CHIA SẼ</h1>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-2/3 w-full py-8">
                        <div>
                            {
                                stateListBlogShare.slice(selectedPage, selectedPage + showItems).map((post: ValuePost) => {
                                    return (
                                        <BlogShare post={post} key={post.id}/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                className="flex lg:justify-center justify-end  gap-1 mx-auto text-sm mt-2"
                                pageLinkClassName="px-2 py-[2px] rounded-sm"
                                activeLinkClassName="bg-color_04 text-color_01"
                                previousLinkClassName="px-2 py-1"
                                nextLinkClassName="px-2 py-1"
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListBlogShare;