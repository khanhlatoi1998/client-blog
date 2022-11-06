import { NavLink } from "react-router-dom";
import { ValuePost } from "../../common/Type";



interface Props {
    key: number | string;
    post: ValuePost;
}



const Homestay: React.FC<Props> = (props) => {
    const { post } = props;
    const { banner, title, nickname, createDate, content, id } = post;

    const doc = new DOMParser().parseFromString(content, "text/html");
    const htmlSections: any = doc.querySelectorAll('body')[0];
    let contenIntro = htmlSections.querySelectorAll('p:not(p > img)')[0].textContent;

    return (
        <div className="">
            <div className="cursor-pointer">
                <NavLink to={`/detail/${id}`} className="block relative pt-[56%]">
                    <picture className="absolute top-0 left-0 w-full h-full">
                        <img className="h-full w-full object-cover" src={banner} alt="" />
                    </picture>
                </NavLink>
                <div className="">
                    <div className="">
                        <h3 className="content__ellipsis--title mt-2 font-medium sm:text-xl text-md pb-1 relative before:absolute before:content-[''] before:w-[40px] before:h-[2px] before:bg-color_05_border before:bottom-0 before:left-0">
                            <NavLink to={`/detail/${id}`}>
                                {title}
                            </NavLink>
                        </h3>
                        <p className="mt-2 content__ellipsis--3 sm:text-xl text-md">{contenIntro}</p>
                        <p className="mt-2 text-xs text-color_02 opacity-70">{nickname} - {createDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homestay;