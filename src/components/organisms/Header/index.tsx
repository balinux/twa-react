import { FC } from "react";
import { GoBell } from "react-icons/go";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-row justify-between items-center p-6 mb-6 text-white">
      <div className="h-10 w-10 bg-white rounded-full overflow-hidden">
        <img src="/men-1.jpg" alt="no image" className="w-fit object-cover " />
      </div>
      <GoBell className="text-white w-7 h-7" />
    </div>
  );
};

export default Header;
