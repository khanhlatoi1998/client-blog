import { NavLink } from "react-router-dom";
import { ValuePost } from "../../common/Type";

interface Props {
    stateListTopView: Array<ValuePost>;
}



const TopView: React.FC<Props> = (props) => {
    const { stateListTopView } = props;

    return (
        <section className="py-10 sm:mt-4">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">TOP 5 BÀI VIẾT XEM NHIỀU NHẤT</h1>
                </div>
                <div className="pt-12">
                    <div className="grid sm:grid-cols-3 gap-6">
                        {
                            stateListTopView.slice(0, 3).map(item => {
                                return (
                                    <NavLink to={`/detail/${item.id}`} key={item.id} className="relative sm:pt-[90%] pt-[35%]">
                                        <div className="absolute w-full h-full top-0 left-0 cursor-pointer">
                                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                                <p className="text-color_01 text-2xl font-bold px-4">{item.title}</p>
                                            </div>
                                            <picture>
                                                <img className="h-full w-full object-cover" src={item.banner} alt="" />
                                            </picture>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        {
                            stateListTopView.slice(3, 5).map(item => {
                                return (
                                    <NavLink to={`/detail/${item.id}`} key={item.id} className="relative pt-[40%]">
                                        <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                                            <div className="bg-color_08 absolute left-0 top-0 right-0 bottom-0 flex flex-column items-center justify-center">
                                                <p className="text-color_01 text-2xl font-bold">{item.title}</p>
                                            </div>
                                            <picture>
                                                <img className="h-full w-full object-cover" src={item.banner} alt="" />
                                            </picture>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopView;