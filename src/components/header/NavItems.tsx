import { useState } from "react";
import { NavLink } from "react-router-dom";
import { boolean } from "yup";
import { Item } from "../../common/Type/index";

interface Props {
    item: Item;
}


const Navitems: React.FC<Props> = (props) => {
    const { item } = props;
    const { label, icon, active, link, dropdownData } = item;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <li className="relative" >
            <NavLink onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} to={link} className="block lg:px-4 px-6 py-4 hover:text-color_04 text-sm cursor-pointer">
                <div className="flex justify-between items-center">
                    <span className="">{label}</span>
                    <span className="ml-3 mb-[2px] flex items-center">{icon}</span>
                </div>
            </NavLink>
            {
                dropdownData && <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} lg:absolute lg:bg-color_01 lg:px-2 py-2 px-6 top-[100%] left-0 max-h-[400px] overflow-y-auto shadow-input min-w-[180px]`}>
                    {
                        dropdownData.map((item: any, index: number) => {
                            return (
                                <NavLink to={`/category?p=${item.value}&c=all`} className="block hover:text-color_04" key={index}>{item.label}</NavLink>
                            )
                        })
                    }
                </div>
            }
        </li>
    );
}

export default Navitems;