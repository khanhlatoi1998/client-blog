import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import postApi from '../../api/postApi';
import { CATEGORY_CHECK } from '../../common/Option';
import { RegisterType, ValuePost } from '../../common/Type';
import { getAllDataListPost, getListBlogShare, getListConsious, getListEat, getListEntertainment, getListHandBook, getListHomestay, getListTopView } from '../../config/store/sliderDataListPost';

const Footer = () => {
    // const dispatch = useDispatch();
    // const dataListPost = useSelector((state: any) => state.dataListPost);
    // const listHandBook = useSelector((state: any) => state.listHandBook);
    // const listEntertainment = useSelector((state: any) => state.listEntertainment);
    // const listEat = useSelector((state: any) => state.listEat);
    // const listHomestay = useSelector((state: any) => state.listHomestay);
    // const listExperience = useSelector((state: any) => state.listEntertainment);

    const dispatch = useDispatch();
    const stateListHandBook = useSelector((state: any) => state.listHandBook);
    const stateListConsious = useSelector((state: any) => state.listConsious);
    const stateListEntertainment = useSelector((state: any) => state.listEntertainment);
    const stateListTopView = useSelector((state: any) => state.listTopView);
    const stateListEat = useSelector((state: any) => state.listEat);
    const stateListHomestay = useSelector((state: any) => state.listHomestay);
    const stateListBlogShare = useSelector((state: any) => state.listBlogShare);
    const dataListPost = useSelector((state: any) => state.dataListPost);

    const clickScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleListConsious = (listPost: Array<ValuePost>) => {
        const listConsious: Array<ValuePost> = [];
        const maxItemConsious = 6;

        const groupByConsious = Object.values(listPost.reduce((group: any, post: ValuePost) => {
            const { province } = post;
            group[province] = group[province] ?? [];
            group[province].push(post);
            return group;
        }, {}));

        groupByConsious.forEach((group: any) => {
            let maxLike = Math.min(...group.map((o: ValuePost) => o.like));
            let consioutHaveMaxLike = group.find((el: ValuePost) => el.like === maxLike);
            listConsious.push(consioutHaveMaxLike);
        })

        const sortListConsious = listConsious.sort((a: ValuePost, b: ValuePost) => {
            return b.like - a.like;
        }).slice(0, maxItemConsious);

        dispatch(getListConsious(sortListConsious));
    };

    const handleTopView = (listPost: Array<ValuePost>) => {
        const sortListPost = listPost.sort((a: ValuePost, b: ValuePost) => {
            return b.view - a.view;
        });
        dispatch(getListTopView(sortListPost));
    };
    const handleHandBook = (listPost: Array<ValuePost>) => {
        const listHandBook = listPost.filter(o => o.category === CATEGORY_CHECK.handbook);
        dispatch(getListHandBook(listHandBook));
    };
    const handleEntertainment = (listPost: Array<ValuePost>) => {
        const listEntertainment = listPost.filter(o => o.category === CATEGORY_CHECK.entertainment);
        dispatch(getListEntertainment(listEntertainment));
    };
    const handleEat = (listPost: Array<ValuePost>) => {
        const listEat = listPost.filter(o => o.category === CATEGORY_CHECK.eat);
        dispatch(getListEat(listEat))
    };
    const handleHomestay = (listPost: Array<ValuePost>) => {
        const listHomestay = listPost.filter(o => o.category === CATEGORY_CHECK.homestay);
        dispatch(getListHomestay(listHomestay));
    };
    const handleBlogShare = (listPost: Array<ValuePost>) => {
        const listBlogShare = listPost.reverse();
        dispatch(getListBlogShare(listBlogShare));
    };

    useEffect(() => {
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

                handleListConsious(listPost);
                handleTopView(listPost);
                handleHandBook(listPost);
                handleEntertainment(listPost);
                handleEat(listPost);
                handleHomestay(listPost);
                handleBlogShare(listPostUser);

                dispatch(getAllDataListPost(listPost));
            }).catch((err) => { })
    }, []);

    return (
        <footer className="bg-color_09 mt--8">
            <div className="container__responsive lg:px-12 px-4">
                <div className="py-12 lg:block hidden">
                    <div className="grid grid-cols-3">
                        <div className="px-2">
                            {
                                dataListPost.slice(0, 3).map((post: ValuePost) => {
                                    return (
                                        <div key={post.id} className="flex py-4 cursor-pointer">
                                            <NavLink onClick={clickScrollTop} to={`/detail/${post.id}`} className="w-[100px] h-[67px] relative">
                                                <picture>
                                                    <img className="h-full w-full object-cover" src={post.banner} alt="" />
                                                </picture>
                                            </NavLink>
                                            <div className="flex-1 ">
                                                <div className="pl-4 flex flex-col justify-between h-full">
                                                    <NavLink onClick={clickScrollTop} to={`/detail/${post.id}`} className="content__ellipsis--title min-h-[52px] font-medium text-[16px] pb-1 relative text-color_11 hover:text-color_04">
                                                        {post.title}
                                                    </NavLink>
                                                    <p className=" text-[14px] text-color_11"><span className="px-2 bg-color_13 text-color_01 mr-2">{post.nickname}</span> {post.createDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="px-2 border-x border-solid border-color_10">
                            {
                                dataListPost.slice(3, 6).map((post: ValuePost) => {
                                    return (
                                        <div key={post.id} className="flex py-4 cursor-pointer">
                                            <NavLink onClick={clickScrollTop} to={`/detail/${post.id}`} className="w-[100px] h-[67px] relative">
                                                <picture>
                                                    <img className="h-full w-full object-cover" src={post.banner} alt="" />
                                                </picture>
                                            </NavLink>
                                            <div className="flex-1 ">
                                                <div className="pl-4 flex flex-col justify-between h-full">
                                                    <NavLink onClick={clickScrollTop} to={`/detail/${post.id}`} className="content__ellipsis--title min-h-[52px] font-medium text-[16px] pb-1 relative text-color_11 hover:text-color_04">
                                                        {post.title}
                                                    </NavLink>
                                                    <p className=" text-[14px] text-color_11"><span className="px-2 bg-color_13 text-color_01 mr-2">{post.nickname}</span> {post.createDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="px-2 py-3 text-[16px] font-medium">
                            <ul className=" text-color_11 flex flex-col gap-y-2">
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Địa Điểm Vui Chơi</a>
                                    <p>{stateListEntertainment.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Ăn Uống</a>
                                    <p>{stateListEat.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Homestay</a>
                                    <p>{stateListHomestay.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Cẩm Nang</a>
                                    <p>{stateListHandBook.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Trải Nghiệm</a>
                                    <p>{stateListBlogShare.length}</p>
                                </li>
                                <li className="flex justify-between hover:text-color_04 ">
                                    <a href="#">Xem Nhiều Nhất</a>
                                    <p>10</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-t border-solid border-color_10 text  text-color_11">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
                        <div className="pr-8 flex flex-col justify-between">
                            <p className="text-color_01 sm:text-2xl text-lg font-bold">VỀ CHÚNG TÔI</p>
                            <p className="mt-4"><span className="text-color_01 font-medium">Travelblog.vn</span> - Nơi chia sẻ kinh nghiệm du lịch, phượt và trải nghiệm thú vị trên những cung đường phiêu du.</p>
                            <p className="mt-4">Liên hệ chúng tôi:<span className="text-color_04"> travelblog@gmail.com</span>  </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-color_01 sm:text-2xl text-lg font-bold">THEO DÕI CHÚNG TÔI</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row flex-wrap gap-8 mt-6">
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                    <div className="cursor-pointer rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff08] border border-solid border-color_10 hover:text-color_12">
                                        <a href="">
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-6">© Copyright © 2022 Travelblog.vn. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;