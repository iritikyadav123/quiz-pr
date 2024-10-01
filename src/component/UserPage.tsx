import React from "react";
import QuizCard from "./QuizCard";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <section className="flex items-center justify-center flex-col sm:pt-20 pt-8">
      <article className="test-start w-[95%] font-bold text-xl sm:text-2xl">
        My Quizzes
      </article>
      <article className="grid grid-cols-12 gap-6 mt-8 mb-12">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <Link to={'/quiz'} className="border-2 rounded-md flex flex-col items-center justify-center sm:h-72 sm:w-60 h-48 w-40 sm:gap-4 col-span-6 md:col-span-4 gap-4  xl:col-span-3 cursor-pointer hover:-translate-y-1 active:bg-indigo-700/70">
          <FaPlus className="text-gray-300 font-extrabold sm:text-[8rem] text-[5rem]" />
          <div className="text-gray-300 font-bold sm:text-xl text-md  ">
            Add A New Quiz
          </div>
        </Link>
      </article>
    </section>
  );
};

export default UserPage;
