import { BsFillEyeFill } from "react-icons/bs";
import { CATEGORY_CHECK, CATEGORY_OPTION, PROVINCE_OPTION } from "../../common/Option";
import Comment from "../comment";
import Social from "../social";
import Writer from "../writer/writer";

interface Props {
    post: {
        content: string;
        title: string;
        province: string;
        category: string;
        like: number;
        share: number;
        view: number;
        nickname: string;
        createDate: string;
    };
}

const Content: React.FC<Props> = (props) => {
    const { post } = props;
    const { nickname, createDate, view, like } = post;
    let newProvince = '';
    let newCategory = '';

    for (let i of CATEGORY_OPTION) {
        if (i.value === post.category) {
            newCategory = i.label;
        }
    }

    for (let i of PROVINCE_OPTION) {
        if (i.value === post.province) {
            newProvince = i.label;
        }
    }

    return (
        <div className="w-full lg:w-2/3 bg-color_01 shadow-around rounded py-6 lg:px-6 px-4">
            <div>
                <Social like={like} />
            </div>

            <div>
                <p className="mt-6 text-sm font-medium opacity-70 uppercase">DU LỊCH {newProvince}, {newCategory} {newProvince}</p>
                <h1 className="font-bold text-xl lg:text-3xl mt-1">{post.title}</h1>
                <div className="mt-4 text-sm cursor-pointer">
                    Bởi
                    <span className="ml-1">{nickname} </span>
                    -
                    <span> {createDate}</span>
                    <span className="ml-4"><BsFillEyeFill className="text-blue-300 inline-block mb-[2px]" /> <span>
                    </span>{view}</span>
                </div>
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
                </div>
                <div className="text-md">
                    <h2 className="font-bold lg:text-2xl text-lg mt-10">1. Hồ điều hòa</h2>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <div className="text-center">
                        <div className="mt-4 inline-block">
                            <figure>
                                <img className="" src="../Images/favorite/dat-lat.jpg" alt="đang cập nhật anh" />
                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                            </figure>
                        </div>
                    </div>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <h2 className="font-bold lg:text-2xl text-lg mt-10">1. Hồ điều hòa</h2>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <div className="text-center">
                        <div className="mt-4 inline-block">
                            <figure>
                                <img className="" src="../Images/favorite/dat-lat.jpg" alt="đang cập nhật anh" />
                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                            </figure>
                        </div>
                    </div>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <h2 className="font-bold lg:text-2xl text-lg mt-10">1. Hồ điều hòa</h2>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <div className="text-center">
                        <div className="mt-4 inline-block">
                            <figure>
                                <img className="" src="../Images/favorite/dat-lat.jpg" alt="đang cập nhật anh" />
                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                            </figure>
                        </div>
                    </div>
                    <h2 className="font-bold lg:text-2xl text-lg mt-10">1. Hồ điều hòa</h2>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <div className="text-center">
                        <div className="mt-4 inline-block">
                            <figure>
                                <img className="" src="../Images/favorite/dat-lat.jpg" alt="đang cập nhật anh" />
                                <figcaption className="text-md italic text-center px-2 bg-color_03">Descrition</figcaption>
                            </figure>
                        </div>
                    </div>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <h2 className="font-bold lg:text-2xl text-lg mt-10">1. Hồ điều hòa</h2>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                    <p className="mt-4">Đây là địa điểm đầu tiên bạn bắt gặp khi đặt chân đến chùa Tam Chúc. Bên trông nhà khách được bày trí rất trang nghiêm, xung quanh có rất nhiều bức tranh về đèn led giới thiệu về ngôi chùa.</p>
                </div> */}

                <div className="text-md mt-10 post__description" dangerouslySetInnerHTML={{ __html: post.content }} />

            </div>

            <div className="mt-8">
                <p className="font-bold">Đọc thêm</p>
                <ul className="mt-8 list-disc list-inside">
                    <li>
                        <a className="text-color_15 hover:underline" href="">Cẩm Nang Di Chuyển Từ Hà Nội Đi Hải Phòng Mới Nhất 2022</a>
                    </li>
                    <li>
                        <a className="text-color_15 hover:underline" href="">Cẩm Nang Di Chuyển Từ Hà Nội Đi Hải Phòng Mới Nhất 2022</a>
                    </li>
                    <li>
                        <a className="text-color_15 hover:underline" href="">Cẩm Nang Di Chuyển Từ Hà Nội Đi Hải Phòng Mới Nhất 2022</a>
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <p className="mb-4 text-gray-600">SHARE</p>

                <Social like={like} />
            </div>

            <Writer nickname={nickname} />
            <Comment />
        </div>
    );
}

export default Content;