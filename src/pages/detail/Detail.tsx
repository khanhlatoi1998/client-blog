import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Content from "../../components/content/content";
import Sidebar from "../../components/sidebar";
import postApi from "../../api/postApi";
import { RegisterType, ValuePost } from "../../common/Type";


const Detail = () => {
    const [searchParams] = useSearchParams();
    const [post, setPost] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        postApi.getId(id)
            .then((data) => {
                setPost(data);
            }).catch((err) => console.log(err))

        postApi.getAll()
            .then(async (data: any) => {
                const listPost: Array<ValuePost> = [];
                const listPostUser: Array<ValuePost> = [];

                await data.map((item: RegisterType, index: number) => {
                    if (item.permission === 'user') {
                        item.listPost.map((post: ValuePost) => {
                            listPost.push(post);
                        });
                    }
                    if (item.permission === 'user') {
                        item.listPost.map((post: ValuePost) => {
                            listPostUser.push(post);
                        });
                    }
                });


            }).catch((err) => { })

    }, [id]);

    return (
        <section className="lg:pt-8 lg:pb-12 bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="flex flex-row  flex-wrap">
                    <Content post={post} />

                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Detail;
