import { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";

import FadeLoader from "react-spinners/FadeLoader";
import { date } from "yup";


import postApi from "../../../api/postApi";
import Content from "../../../components/content/content";
import Sidebar from "../../../components/sidebar";


const GetPost = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const auth = useSelector((state: any) => state.auth);
    const [searchParams] = useSearchParams();
    const [post, setPost] = useState<any>({});
    const { id } = useParams();

    const deletePost = () => {
        postApi.deletePost({ username: auth.username, id: id }).then((data) => {
        }).then((data) => {
            navigate('/');
        }).catch((err) => { })
    };

    useEffect(() => {
        postApi.getId(id)
            .then((data) => {
                setLoading(false);
                setPost(data);
            }).catch((err) => console.log(err))
    }, []);

    return (
        <section className="lg:pt-8 lg:pb-12 bg-color_14">
            {
                loading
                    ? <div className="h-[500px] flex items-center justify-center">
                        <FadeLoader color="#36d7b7" />
                    </div>

                    : <div className="container__responsive lg:px-12">
                        <div className="flex flex-row  flex-wrap pb-12">
                            <div className="w-full lg:w-2/3 ">
                                <div className="bg-color_01 shadow-around rounded py-6 lg:px-6 px-4">
                                    <h1 className="font-bold text-xl lg:text-3xl mt-1">{post.title}</h1>
                                    {/* <div>
                                <p className="pt-8 text-md">Hè đến rồi, mau mau” set up “ một buổi hẹn hò tụ tập bạn bè sau những ngày dài lê thê trên trường, công ty thôi. Nếu bạn không có bồ thì bạn đã có bè. Người yêu có thể không có nhưng nhất định phải có nhóm bạn để cùng nhau du hí mọi nơi. Cuối tuần, lại phải đau đầu chọn địa điểm gặp nhau, thật khó để quyết định. Giờ đây, bạn không phải lo nữa vì đã có Wecheckin gánh rồi, dưới đây sẽ là list các địa điểm lí tưởng tụ tập dành cho bạn.</p>
                            </div> */}
                                    {/* <div className="mt-8">
                                        <div className="px-4 py-4 rounded-sm border border-solid border-color_05_border inline-block">
                                            <div>
                                                <h3 className="font-bold text-lg">Nội dung chính của bài</h3>
                                            </div>
                                            <div>
                                                <ul className="flex flex-col gap-1 mt-1 text-color_15 italic text-sm">
                                                    <li>
                                                        <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="hover:underline">1. Hồ điều hòa</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="hover:underline">Lời kết:</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

                                </div>
                                <div className="mt-8 flex justify-start items-center gap-4 ml-4">
                                    <div>
                                        <NavLink to={`/w/edit/${id}`} className="inline-block overflow-hidden bg-color_fb text-white rounded-md shadow-around ">
                                            <button type="button" className="font-medium py-2 px-4">
                                                Sửa
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <div onClick={deletePost} className="bg-color_fb text-white rounded-md inline-block overflow-hidden shadow-around ">
                                            <button type="button" className="font-medium py-2 px-4 ">Xoá</button>
                                        </div>
                                    </div>
                                    <div>
                                        <NavLink to={`/w/create`} className="inline-block overflow-hidden bg-color_fb text-white rounded-md shadow-around ">
                                            <button type="button" className="font-medium py-2 px-4">
                                                Thêm bài viết
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default GetPost;
