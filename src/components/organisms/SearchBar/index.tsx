import { Input } from "@/components/ui/input";
import { FC } from "react";

interface SearchBarprops {}

const SearchBar: FC<SearchBarprops> = ({}) => {
  return (
    <div className="flex flex-row mb-6">
      <Input
        type="text"
        placeholder="Search service"
        className="rounded-full bg-black mx-5 border-2 border-gray-600 text-white"
      />
    </div>
  );
};

export default SearchBar;
