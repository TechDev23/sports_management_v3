import { useEffect, useState } from "react";
import AddGame from './AddGame';
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Step3 = () => {

  const dispatch = useDispatch();

  const [gameCount, setGameCount] = useState(1); // State to track the number of games

  const handleAddGame = () => {
    setGameCount(prevCount => prevCount + 1);
  };

  const handleRemoveGame = () => {
    if (gameCount > 1) {
      setGameCount(prevCount => prevCount - 1);
    }
  };

  return (

    <div className='w-full'>
      <div className="w-full flex justify-center border-2 border-red-400">
      <Link to={'/o/added-games'} className="font-poppins text-gray-600 underline">See previous added games</Link>
      </div>
      <div className="space-y-4">
        {Array.from({ length: gameCount }, (_, index) => (
          <AddGame key={index} gameIndex={index} />
        ))}
      </div>
      <div className="flex justify-end">
      <Button color="orange" onClick={handleRemoveGame} className=" text-white px-4 py-2 mr-2">
        Remove Game
      </Button>
        <Button  onClick={handleAddGame} className="bg-blue-500 text-white px-4 py-2 ">
          Add Game
        </Button>
      </div>
      
    </div>
  )
}

export default Step3