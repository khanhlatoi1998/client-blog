import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { number } from 'yup';
import { ValuePost } from '../../common/Type';

import HandBook from "./HandBook";

interface Props {
    stateListHandBook: Array<ValuePost>;
}


const ListHandBook: React.FC<Props> = (props) => {
    const { stateListHandBook } = props;
    const showItems = 4;
    const pageCount = Math.ceil(stateListHandBook.length / showItems);
    const [selectedPage, setSelectedPage] = useState<number>(0);


    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };


    return (
        <section className="sm:py-6">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">CẨM NANG DU LỊCH</h1>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-2/3 w-full py-8">
                        <div>
                            {
                                stateListHandBook.slice(selectedPage, selectedPage + showItems).map((post: ValuePost) => {
                                    return (
                                        <HandBook key={post.id} post={post}/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                className="flex lg:justify-center justify-end gap-1 mx-auto text-sm mt-2"
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
                </div>
            </div>
        </section>
    );
};

export default ListHandBook;