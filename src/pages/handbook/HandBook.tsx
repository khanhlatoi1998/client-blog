import { NavLink } from "react-router-dom";
import { ValuePost } from "../../common/Type";

interface Props {
    key: number | string;
    post: ValuePost;
}

const HandBook: React.FC<Props> = (props) => {
    const { post } = props;
    const { banner, title, nickname, createDate, content, id } = post;

    const doc = new DOMParser().parseFromString(content, "text/html");
    const htmlSections: any = doc.querySelectorAll('body')[0];
    let contenIntro = htmlSections.querySelectorAll('p:not(p > img)')[0].textContent;

    return (
        <div className="flex py-4">
            <NavLink to={`/detail/${id}`} className="sm:w-[250px] sm:h-[145px] h-[80px] w-[130px] relative cursor-pointer">
                <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                    <p className="text-color_01 text-2xl font-bold"></p>
                </div>
                <picture>
                    <img className="h-full w-full object-cover rounded" src={banner} alt="" />
                </picture>
            </NavLink>
            <div className="flex-1 flex flex-col justify-center">
                <div className="pl-4">
                    <h3 className="content__ellipsis--title font-medium sm:text-xl text-md pb-1 relative before:absolute before:content-[''] before:w-[40px] before:h-[2px] before:bg-color_05_border before:bottom-0 before:left-0">
                        <NavLink to={`/detail/${id}`}>
                            {title}
                        </NavLink>
                    </h3>
                    <p className="mt-2 content__ellipsis">{contenIntro}</p>
                    <p className="mt-2 text-xs text-color_02 opacity-70">{nickname} - {createDate}</p>
                </div>
            </div>
        </div>
    );
};

export default HandBook;