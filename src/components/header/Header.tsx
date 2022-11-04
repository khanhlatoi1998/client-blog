import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { showModal } from "../../config/store/sliderPopup";

import { AiOutlineDown, AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

import Popup from "reactjs-popup";
// import Login from "../../pages/auth/login";
// import Register from "../../pages/auth/register";
import Navitems from "./NavItems";
import { Item } from "../../common/Type";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../../pages/form/auth/login";
import Register from "../../pages/form/auth/register";
import { BsPencilSquare } from "react-icons/bs";
import { PROVINCE_OPTION } from "../../common/Option";


const defaultIconSize = '0.8rem';

const items = [
    { link: '/', label: 'TRANG CHỦ', icon: <i></i>, active: true },
    { link: '/category?c=dia-diem&p=all', label: 'ĐỊA ĐIỂM',  icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { link: '/category?c=am-thuc&p=all', label: 'ẨM THỰC',  icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { link: '/category?c=cam-nang&p=all', label: 'CẨM NANG',  icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    { link: '/category?c=homestay&p=all', label: 'HOMESTAY',  icon: <AiOutlineDown size={defaultIconSize} />, active: true },
    {
        link: '/category?p=all&c=all',
        label: 'TỈNH THÀNH',
        dropdownData: PROVINCE_OPTION,
        icon: <AiOutlineDown size={defaultIconSize} />,
        active: true
    },
]


const Header = () => {
    const dispath = useDispatch();
    const navigation = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [redirect, setRedirect] = useState<string>('');
    const checkLogin = useSelector((state: any) => state.checkLogin);

    let modalPopup: string = useSelector((state: any) => state.showModal.status);

    const clickShowPoppup = (e?: string) => {
        if (checkLogin.auth === true) {
            navigation('/w/create');
        } else {
            dispath(showModal(e));
        }

    };

    const clickClosePopup = () => {
        dispath(showModal('closePopup'));
    }

    return (
        <header className="z-50 relative inset-x-0">
            <nav className="">
                <div className="lg:px-12 px-4 bg-color_01 shadow-header">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <NavLink className="mr-4 text-lg font-dancing font-bold" to="/">Travel Blog</NavLink>
                        </div>
                        <div className="lg:hidden py-4 px-4 hover:cursor-pointer" onClick={() => setOpen(o => !o)}>
                            <AiOutlineMenu style={{ fontSize: "25px" }} />
                        </div>
                        <div className={`flex-1 flex lg:flex-row flex-col lg:items-center lg:justify-between lg:static absolute right-0 bottom-0 lg:z-50 z-[-1] lg:bg-inherit bg-color_09 lg:text-inherit text-color_01 lg:w-auto sm:w-[475px] w-full transition-all duration-500 ease-in ${open ? 'translate-y-[100%]' : ''}`}>
                            <div className="flex-1 lg:order-1 order-2 lg:mt-0 mt-4">
                                <ul className="flex lg:flex-row flex-col flex-1">
                                    {
                                        items.map((item: Item, index) => {
                                            return (
                                                <Navitems item={item} key={index} />
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            {/* <div className=" lg:order-2 order-1 lg:py-0 py-4 lg:px-0 px-2 lg:bg-inherit bg-[#1f2231]">
                                <div className="text-sm flex flex-row">
                                    <button
                                        type="button"
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 border-r border-solid lg:border-color_05_border border-color_01 hover:text-color_04"
                                        onClick={() => clickShowPoppup('showLogin')}
                                    >
                                        Đăng nhập
                                    </button>
                                    <Popup open={modalPopup !== 'showLogin' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showLogin' ? () => clickClosePopup() : () => { }}>
                                        <Login />
                                    </Popup>

                                    <button
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 hover:text-color_04"
                                        onClick={() => clickShowPoppup('showRegister')}
                                    >
                                        Đăng ký
                                    </button>
                                    <Popup open={modalPopup !== 'showRegister' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showRegister' ? () => clickClosePopup() : () => { }}>
                                        <Register/>
                                    </Popup>
                                </div>
                            </div> */}
                            <div className="lg:order-2 order-1 lg:py-0 py-4 lg:px-0 px-2 lg:bg-inherit bg-[#1f2231]">
                                <div className="text-sm flex flex-row">
                                    <button
                                        type="button"
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 border-r border-solid lg:border-color_05_border border-color_01 hover:text-color_04"
                                        onClick={() => { clickShowPoppup('showLogin'); setRedirect('/w/create') }}
                                    >
                                        <BsPencilSquare className="mx-auto" />
                                    </button>
                                    <Popup open={modalPopup !== 'showLogin' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showLogin' ? () => clickClosePopup() : () => { }}>
                                        <Login redirect={redirect} />
                                    </Popup>

                                    <button
                                        className="lg:flex-auto flex-1 lg:font-normal font-medium px-4 py-1 hover:text-color_04"
                                        onClick={() => clickShowPoppup('showRegister')}
                                    >
                                        <AiOutlineUser className={`mx-auto check ${checkLogin.auth ? 'text-color_04' : ''}`} />
                                    </button>
                                    <Popup open={modalPopup !== 'showRegister' ? false : true} closeOnDocumentClick onClose={modalPopup === 'showRegister' ? () => clickClosePopup() : () => { }}>
                                        <Register redirect={redirect} />
                                    </Popup>
                                </div>
                            </div>

                            {/* <div className="lg:order-3 order-1 flex px-2 flex-row gap-4 py-4">
                                <BsPencilSquare />
                                <AiOutlineUser />
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;