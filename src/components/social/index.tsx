import { AiOutlineComment, AiTwotoneLike } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

interface Props {
    like: number | string;
}

const Social: React.FC<Props> = (props) => {
    const { like } = props;

    return (
        <div className="flex flex-wrap text-sm gap-4 text-color_01">
            <div className="flex gap-4">
                <div className="cursor-pointer bg-color_fb py-3 px-3 rounded-sm flex items-center justify-between">
                    <span className="lg:pr-2 lg:border-r border-solid border-color_03 "><FaFacebookF /></span>
                    <span className="pl-2 hidden lg:inline">Chia sẽ Facebook</span>
                </div>
                <div className="cursor-pointer bg-rose-600 py-3 px-3 rounded-sm flex items-center justify-between">
                    <span className="lg:pr-2 lg:border-r border-solid border-color_03"><FaInstagram /></span>
                    <span className="pl-2 hidden lg:inline">Instagram</span>
                </div>
                <div className="cursor-pointer rounded-sm flex items-center justify-between">
                    <img className="lg:max-h-[44px] max-h-[38px] w-auto" src="../Images/social/zalo.png" alt="" />
                </div>
            </div>
            <div className="flex-1 flex gap-4">
                <div className="flex items-center">
                    <div className="cursor-pointer bg-color_17 py-1 px-2 rounded-md flex items-center justify-between">
                        <span className=" pr-2"><AiTwotoneLike /></span>
                        <span className="mr-2 text-xs">Thích</span>
                        <span>{like}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="cursor-pointer bg-color_17 py-1 px-2 rounded-md flex items-center justify-between">
                        <span className=" pr-2"><AiOutlineComment /></span>
                        <span className="mr-2 text-xs">Comment</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;