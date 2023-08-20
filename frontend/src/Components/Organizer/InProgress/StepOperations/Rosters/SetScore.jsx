import { Button, ButtonGroup } from "@material-tailwind/react";
import React, { Fragment, useState } from "react";

export default function SetScore() {
    
  const [buttonStates, setButtonStates] = useState(Array(21).fill(false));

  const handleButtonClick = (index) => {
    const newButtonStates = Array(21).fill(false);
    newButtonStates[index] = true;
    setButtonStates(newButtonStates);
  };

  const [buttonStates2, setButtonStates2] = useState(Array(21).fill(false));

  const handleButtonClick2 = (index) => {
    const newButtonStates = Array(21).fill(false);
    newButtonStates[index] = true;
    setButtonStates2(newButtonStates);
  };
  return (
    <Fragment>
      <div className="flex flex-row  items-center gap-4  ">
        <div className="w-72">
          <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
            Player 1
          </p>
        </div>

        <Button color="orange">VS</Button>

        <div className="w-72">
          <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
            Player 2
          </p>
        </div>
      </div>
      <textarea
        className="flex-grow w-full h-full mt-5 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        placeholder="Time Place and Responsible details"
        rows={1}
        disabled="true"
      ></textarea>

      <div className="w-72 my-5">
        <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
          Player 1
        </p>
      </div>
      <div className="w-full">
        <ButtonGroup color="orange">
          {buttonStates.map((isActive, index) => (
            <Button
              className={isActive ? "bg-white text-black border" : ""}
              key={index}
              variant={isActive ? "contained" : "outlined"}
              onClick={() => handleButtonClick(index)}
            >
              {index + 1}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className="my-5 flex flex-row items-center justify-center mr-[17rem]">
        <Button color="orange">VS</Button>
      </div>

      <div className="w-72 my-5">
        <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
          Player 1
        </p>
      </div>
      <div className="w-full">
        <ButtonGroup color="orange">
          {buttonStates2.map((isActive, index) => (
            <Button
              className={isActive ? "bg-white text-black border" : ""}
              key={index}
              variant={isActive ? "contained" : "outlined"}
              onClick={() => handleButtonClick2(index)}
            >
              {index + 1}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </Fragment>
  );
}
