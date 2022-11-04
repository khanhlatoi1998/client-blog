import { connectStorageEmulator } from "firebase/storage";
import { useEffect, useState } from "react";

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import postApi from "../../api/postApi";
import { CATEGORY_CHECK, CATEGORY_OPTION, PROVINCE_OPTION } from "../../common/Option";
import { ValuePost } from "../../common/Type";

import Sidebar from "../../components/sidebar";
import ListPostCategory from "./ListPostCategory";
import ListTopPostCategory from "./ListTopPostCategory";

const Category = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [listPost, setListPost] = useState<Array<ValuePost>>([]);
    const dataListPost = useSelector((state: any) => state.dataListPost);

    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    let newProvince: any = '';
    let newCategory: any = '';

    for (let i of PROVINCE_OPTION) {
        if (i.value === searchParams.get('p')) {
            newProvince = i.label + ' ';
        }
    }

    for (let i of CATEGORY_OPTION) {
        if (i.value === searchParams.get('c')) {
            newCategory = i.label + ' ';
        }
    }

    const removeVietnameseTones = (str: string) => {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        str = str.toLocaleLowerCase();
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        str = str.replace(' ', '-');
        return str;
    }
    
    useEffect(() => {
        const params = Object.fromEntries(new URLSearchParams(location.search));
        postApi.getCategory(params).then((data: any) => {
            setListPost(data);
        }).catch(() => { })
    }, [window.location.href]);

    return (
        <section className="pt-8 lg:pb-12 lg:bg-color_14">
            <div className="container__responsive lg:px-12">
                <div className="pb-8 lg:text-left text-center text-sm">
                    <div >
                        <NavLink to="/" className="text-color_13">Trang chủ </NavLink>
                        {
                            searchParams.get('p')
                                ? <span className="opacity-50">
                                    {
                                        searchParams.get('p') === 'all'
                                            ? <span> <AiOutlineRight className="inline mr-1 " />Tỉnh thành </span>
                                            : <NavLink to={`?c=all&p=${searchParams.get('p')}`} className="inliline"><AiOutlineRight className="inline mr-1" /> {newProvince}</NavLink>
                                    }
                                </span>
                                : <span className="opacity-50"><AiOutlineRight className="inline mr-1" />Tỉnh thành </span>
                        }
                        {
                            searchParams.get('c')
                                ? <span className="opacity-50">
                                    {
                                        searchParams.get('c') === 'all'
                                            ? <></>
                                            : <NavLink to={`?p=all&c=${searchParams.get('c')}`}><AiOutlineRight className="inline mr-1" />{newCategory}</NavLink>
                                    }
                                </span>
                                : <span className="opacity-50"></span>
                        }
                    </div>
                    <h1 className="font-bold lg:text-3xl text-lg mt-1 mr-1">
                        <NavLink to="?p=all" >
                            {
                                searchParams.get('p') === 'all'
                                    ? <span>TỈNH THÀNH</span>
                                    : <span>
                                        {
                                            searchParams.get('p')
                                                ? <>{newProvince}</>
                                                : <>{newCategory}</>
                                        }
                                    </span>

                            }
                        </NavLink>
                    </h1>
                </div>
                <div>
                    <p className="text-color_16 italic lg:px-0 px-4">Tổng hợp những {newCategory} đẹp giá rẻ ở Việt Nam, tìm kiếm review đánh giá về {newCategory} khách quan và đầy đủ nhất. Book phòng homestay online đơn giản dễ dàng nhất, được tư vấn miễn phí khi đặt phòng homestay trên travelblog.com</p>
                </div>

                <div className="text-sm mt-8 relative lg:px-0 px-4">
                    <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className="open cursor-pointer inline-block px-3 py-2 border border-solid border-color_05_border">
                        <div className="flex items-center">
                            <span>Lọc</span>
                            <AiOutlineDown className="ml-4" />
                        </div>
                    </div>
                    <ul onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} flex flex-col gap-1 absolute top-[100%] lg:left-0 left-[20px] max-h-[500px] overflow-y-auto w-auto z-50 py-1 px-2 border border-solid border-color_02 bg-color_01`}>
                        {
                            searchParams.get('p') !== 'all' && searchParams.get('p')
                                ? CATEGORY_OPTION.map((c, index) => {
                                    return (
                                        <li key={index} className="hover:text-color_04">
                                            <NavLink to={`?p=${searchParams.get('p')}&c=${c.value}`}>{c.label}</NavLink>
                                        </li>
                                    )
                                })
                                : PROVINCE_OPTION.map((p, index) => {
                                    return (
                                        <li key={index} className="hover:text-color_04">
                                            <NavLink to={`?c=${searchParams.get('c') ?? 'all'}&p=${p.value}`}>{p.label}</NavLink>
                                        </li>
                                    )
                                })
                        }
                    </ul>
                </div>
                <div className="lg:block hidden">
                    <ListTopPostCategory listPost={listPost}/>
                </div>
                <div className="mt-8 flex flex-row flex-wrap">
                    <ListPostCategory listPost={listPost}/>

                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Category;