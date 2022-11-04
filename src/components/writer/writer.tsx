import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

interface Props {
    nickname: string
}


const Writer: React.FC<Props> = (props) => {
    const { nickname } = props;

    return (
        <div className="flex flex-wrap gap-6 px-8 py-8 mt-8 border border-solid border-gray-300">
            <div className="text-center w-full lg:w-auto">
                <figure>
                    <img className="max-w-[120px] mx-auto" src="../Images/banner.jpg" alt="" />
                </figure>
            </div>
            <div className="flex flex-1 lg:items-start items-center  flex-col gap-3">
                <p className="font-bold">{nickname}</p>
                <p className="lg:text-start text-center text-sm">Thích màu tím ghét sự giả dối</p>
                <div className="flex gap-4 text-sm">
                    <a className="px-1 py-1 hover:text-blue-400" href=""><FaFacebookF /></a>
                    <a className="px-1 py-1 hover:text-blue-400" href=""><FaInstagram /></a>
                    <a className="px-1 py-1 hover:text-blue-400" href=""><IoLogoTiktok /></a>
                </div>
            </div>
        </div>
    );
};

export default Writer;