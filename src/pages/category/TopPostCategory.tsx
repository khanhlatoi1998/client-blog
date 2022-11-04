import { NavLink } from "react-router-dom";
import { ValuePost } from "../../common/Type";

interface Props {
    post: ValuePost;
}


const TopPostCategory: React.FC<Props> = (props) => {
    const { post } = props;
    const { title, nickname, createDate, banner, id } = post;

    return (
        <NavLink to={`/detail/${id}`} className="pt-[58%] relative cursor-pointer shadow-sm">
            <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
                <div className="bg-text text-color_01 absolute left-0 top-0 right-0 bottom-0 flex flex-col p-4 text-sm gap-2 justify-end">
                    <div className="">
                        <p className="bg-color_18 px-1 inline-block"></p>
                    </div>
                    <div className="font-bold capitalize lg:text-lg ">{title}</div>
                    <div className="opacity-80"><span>{nickname}</span> - <span>{createDate}</span></div>
                </div>
                <picture>
                    <img className="h-full w-full object-cover" src={banner} alt="" />
                </picture>
            </div>
        </NavLink>
    );
};

export default TopPostCategory;