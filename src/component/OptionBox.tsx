import React, { useState } from "react";
import Input from "./ui/Input";
import { Button } from "./ui/Button";
import { ImCross } from "react-icons/im";

const OptionBox = () => {
  const [QueIndex, setQueIndex] = useState(["A:", "B:", "C:", "D;"]);
  const [number, setNumber] = useState(["First", "Second", "third", "forth"]);
  const [value, setValue] = useState([1, 2]);
  const [disable, setDisable] = useState(false);

  function addElementHandle() {
    if (value[value.length - 1] == 2) {
      setValue((prevData) => [...prevData, 3]);
      console.log(value.length);
    } else if (value[value.length - 1] == 3) {
      setValue((prevData) => [...prevData, 4]);
      console.log(2);
    } else {
      console.log(3);
      setDisable(true);
    }
    console.log(value);
  }
  function handleDelte() {
    value.pop();
  }

  return (
    <div className="w-full flex items-center justify-start gap-10">
      <span className="font-medium">Choices</span>
      <div className="border-2 rounded-md flex flex-col items-center justify-center gap-6 pt-6 pb-6 w-full">
        {value.map((item, index) => (
          <div
            className="flex items-center justify-center gap-4 w-full pl-2 pr-2"
            key={index}
          >
            <span className="font-medium">{QueIndex[index]}</span>
            <div className="flex items-center justify-between pt-1.5 pb-1.5 pl-2 border-2 rounded-md w-[90%] pr-2">
              <Input
                placeholder={`Add your ${number[index]} choice`}
                className="outline-none w-[50%] font-medium text-gray-800"
              />
              {(index == 2 || index == 3) && (
                <ImCross
                  onClick={handleDelte}
                  className="text-rose-600 cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
        <Button
          disable={disable}
          className="text-[1rem]"
          onClick={addElementHandle}
        >
          Add a New Choice
        </Button>
      </div>
    </div>
  );
};

export default OptionBox;
