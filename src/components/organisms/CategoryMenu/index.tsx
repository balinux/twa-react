import { FC } from "react";
import { AiOutlineScissor } from "react-icons/ai";
import { FaHighlighter } from "react-icons/fa6";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { PiHairDryerFill } from "react-icons/pi";
import CategoryMenuItem from "./CategoryMenuItem";
import { CategoryMenuType } from "@/types";

interface CategoryMenuProps {}

// dummy data
const dummyData: CategoryMenuType[] = [
  {
    icon: <AiOutlineScissor className="text-gray-400 h-6 w-6" />,
    label: "Hair Cut",
  },
  {
    icon: <HiMiniPaintBrush className="text-gray-400 h-6 w-6" />,
    label: "Hair Color",
  },
  {
    icon: <PiHairDryerFill className="text-gray-400 h-6 w-6" />,
    label: "Hair Cut",
  },
  {
    icon: <FaHighlighter className="text-gray-400 h-6 w-6" />,
    label: "Trimming",
  },
];

const CategoryMenu: FC<CategoryMenuProps> = ({}) => {
  return (
    <div className="flex flex-row gap-5 mx-5 mb-5 justify-evenly">
      {dummyData.map((item: CategoryMenuType, i: number) => (
        <CategoryMenuItem key={i} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default CategoryMenu;
