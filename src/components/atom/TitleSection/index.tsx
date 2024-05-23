import { FC } from "react";

interface TitleSectionprops {
  word1: string;
  word2: string;
}

const TitleSection: FC<TitleSectionprops> = ({ word1, word2 }) => {
  return (
    <div className="flex flex-wrap justify-between items-center my-4">
      <div className="text-3xl text-white mx-5 mt-5 mb-5">{word1}</div>
      <div className="text-md mx-5 mt-5 mb-5 text-yellow-500">{word2}</div>
    </div>
  );
};

export default TitleSection;
