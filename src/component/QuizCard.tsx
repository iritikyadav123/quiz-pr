import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import EditBoc from "./ui/EditBoc";

const QuizCard = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-2 rounded-md flex flex-col items-center justify-center sm:h-72 sm:w-60 h-48 w-40 sm:gap-4 col-span-6 md:col-span-4  xl:col-span-3 hover:-translate-y-1 ">
      <div className="bg-indigo-700 rounded-md flex items-center justify-center flex-col h-[50%] w-[90%]">
        <div className="h-[10%] w-[95%] flex items-center justify-end pt-2 relative">
          <HiDotsHorizontal
            className="text-white text-xl cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          />
          {show == true && <EditBoc />}
        </div>
        <div className="h-[90%] flex items-center justify-center text-2xl font-bold">
          <TfiWorld className="text-white" />
        </div>
      </div>
      <div className="w-[90%] text-start font-bold text-md">React Quize</div>
      <div className="w-[90%] text-start font-medium text-sm text-gray-600">
        5 Question(s)
      </div>
      <div className="flex w-[90%] items-center justify-evenly gap-2">
        <TbTargetArrow className="text-indigo-700 text-2xl" />
        <div className="font-medium  sm:text-sm text-gray-600 w-[80%] line-clamp-1 text-[10px]">
          Success rate nan%
        </div>
        <FaPlayCircle className="text-indigo-700 text-2xl" />
      </div>
    </div>
  );
};

export default QuizCard;
