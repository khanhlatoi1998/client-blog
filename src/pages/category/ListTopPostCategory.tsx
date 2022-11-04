import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ValuePost } from "../../common/Type";
import TopPostCategory from "./TopPostCategory";

interface Props {
    listPost: Array<ValuePost>;
}

const ListTopPostCategory: React.FC<Props> = (props) => {
    const { listPost } = props;

    const sortListPost = listPost.sort((a: ValuePost, b: ValuePost) => {
        return b.view - a.view;
    });

    return (
        <section>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-1 mt-8">
                {
                    sortListPost?.slice(0, 3).map((post: ValuePost) => {
                        return (
                            <TopPostCategory key={post.id} post={post}/>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default ListTopPostCategory;