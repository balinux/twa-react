import { CategoryMenuType } from "@/types";
import { FC } from "react";

interface CategoryMenuItemprops extends CategoryMenuType {}

const CategoryMenuItem: FC<CategoryMenuItemprops> = ({ icon, label }) => {
  return (
    <div className="flex flex-col">
      <div className="h-12 w-12 rounded-full bg-black border-2 border-gray-800 inline-flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

export default CategoryMenuItem;
