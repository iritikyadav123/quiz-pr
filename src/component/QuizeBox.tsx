import React from "react";
import Input from "./ui/Input";
import { ImCross } from "react-icons/im";
import { useRecoilState, useRecoilValue } from "recoil";
import { questionAtom } from "../atom/atom";
import OptionBox from "./OptionBox";

interface quizBoxProp {
  quizKey: number;
  ques: string;
  opt: string[];
  ans: number;
}

const QuizeBox = ({ quizKey, ques, opt, ans }: quizBoxProp) => {
  const [data, setData] = useRecoilState(questionAtom);
  function handleDelte() {
    const newData = data.filter((item) => item.ques != ques);
    setData(newData);
  }
  return (
    <div
      key={quizKey}
      className="border-2 rounded-md border-indigo-700/40 w-[98%] pl-2 pt-6 pr-2 flex flex-col items-center justify-start gap-6 pb-6"
    >
      <div className="w-[98%] mb-2 flex items-center justify-end ">
        <ImCross onClick={handleDelte} className="text-rose-600" />
      </div>
      <div className="flex items-center justify-start gap-4 w-full">
        <div className="font-medium flex text-sm gap-1 justify-start">
          Question <span>{quizKey}</span>
        </div>
        <Input
          placeholder="Your Question Here...."
          className="border-2 pt-2.5 pb-2.5 pl-2 outline-none font-medium text-md w-full rounded-md"
        />
      </div>
      <OptionBox />
      <div></div>
    </div>
  );
};

export default QuizeBox;
