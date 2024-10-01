import Logo from "./ui/Logo";
import { Button } from "./ui/Button";
import NumberBox from "./ui/NumberBox";
import { useRecoilState } from "recoil";
import { questionAtom } from "../atom/atom";
import QuizeBox from "./QuizeBox";
let i = 1;
const QuizBuilder = () => {
  const [data, setData] = useRecoilState(questionAtom);
  console.log(data);

  function addOtionHandler() {
    const option = data.length;
    const nextOpt = {
      key: option + 1,
      ques: i.toString(),
      opt: [],
      ans: 0,
    };
    i++;
    setData((prevData) => [...prevData, nextOpt]);
  }
  return (
    <section className="flex flex-col items-center justify-center size-full gap-10 mt-10">
      <article className="flex items-center justify-between  w-[95%] h-20">
        <Logo
          imgUrl="./abc-block.png"
          subTitle="Builder"
          className="w-36 sm:w-72 h-16"
        />
        <Button children="Save" />
      </article>
      <article className="w-[90%] border-2 rounded-xl border-indigo-700 p-2 flex items-center gap-2">
        <NumberBox index={1} />
        <div className="font-bold sm:text-xl">Quiz Name:</div>
        <input
          placeholder="Enter the Name of quize"
          className=" border-b-2 border-gray-400  outline-none sm:w-[50%] text-md font-semibold"
        />
      </article>
      <article className="w-[90%] border-2 rounded-xl border-indigo-700 p-2 flex flex-col items-center gap-8">
        <div className="flex item-center w-full gap-2">
          <NumberBox index={1} />
          <div className="font-bold sm:text-xl">Quiz Questions:</div>
        </div>

        {data.map((item, index) => (
          <QuizeBox
            quizKey={index + 1}
            ques={item.ques}
            opt={item.opt}
            ans={item.ans}
          />
        ))}

        <Button onClick={addOtionHandler} className={""}>
          {"Add New Option"}
        </Button>
      </article>
    </section>
  );
};

export default QuizBuilder;
