import { AiOutlineRight, AiOutlineShareAlt, AiTwotoneLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CATEGORY_OPTION } from "../../common/Option";
import { ValuePost } from "../../common/Type";

interface Props {
    post: ValuePost;
}

const PostCategory: React.FC<Props> = (props) => {
    const { post } = props;
    const { title, nickname, createDate, banner, category, like, content, id } = post;
    let newCategory = '';
    let maxLength = 220;

    const doc = new DOMParser().parseFromString(content, "text/html");
    const htmlSections: any = doc.querySelectorAll('body')[0];
    let contentIntro = htmlSections.querySelectorAll('p:not(p > img)')[0].textContent;

    let trimmedString = contentIntro.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...';

    for (let i of CATEGORY_OPTION) {
        if (i.value === category) {
            newCategory = i.label;
        }
    }

    return (
        <div className="bg-color_01 lg:shadow-around rounded">
            <NavLink to={`/detail/${id}`} className="block pt-[55%] relative cursor-pointer shadow-sm">
                <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
                    <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col items-start justify-end">
                        <p className="text-color_01 text-sm font-medium bg-color_13 px-1">{newCategory}</p>
                    </div>
                    <picture>
                        <img className="h-full w-full object-cover" src={banner} alt="" />
                    </picture>
                </div>
            </NavLink>
            <div>
                <div className="px-6 py-4 flex flex-col gap-6">
                    <NavLink to="url" className="lg:text-xl text-lg text-center font-medium hover:text-color_04">{title}</NavLink>
                    <div className="text-center">
                        <div className="px-4 py-1 inline border-y border-solid border-color_05_border">
                            {nickname} - {createDate}
                        </div>
                    </div>
                    <div className="">
                        <p className="text-color_16">{trimmedString}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 border-t border-solid border-color_05_border">
                    <div className="">
                        <NavLink to={`/detail/${id}`} className="flex items-center hover:text-color_04">Xem thêm  <AiOutlineRight className="text-sm" /></NavLink>
                    </div>
                    <div className="text-sm flex gap-1 text-color_01">
                        <div className="cursor-pointer bg-color_17 px-3 py-1 rounded flex items-center justify-between">
                            <span className=" pr-2"><AiTwotoneLike /></span>
                            <span className="mr-2">Thích</span>
                            <span>{like}</span>
                        </div>
                        <div className="cursor-pointer bg-color_fb px-3 rounded flex items-center justify-between">
                            <span className=" pr-2"><AiOutlineShareAlt /></span>
                            <span className="mr-2">Chia sẽ</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCategory;