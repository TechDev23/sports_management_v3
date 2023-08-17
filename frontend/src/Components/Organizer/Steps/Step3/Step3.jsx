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
      <div className="w-full flex justify-end">
      <Link to={'/o/new-tournament/added-games'} className="font-poppins text-gray-600 hover:text-orange-500">See previous added games</Link>
      </div>
      <div className="space-y-4">
        {Array.from({ length: gameCount }, (_, index) => (
          <AddGame key={index} gameIndex={index} />
        ))}
      </div>
      <div className="flex justify-end  mb-3">
      <Button color="red" onClick={handleRemoveGame} className=" bg-gray-400 shadow-none hover:bg-red-400 text-white px-4 py-2 mr-2">
        Remove Game
      </Button>
        <Button color="amber" onClick={handleAddGame} className="bg-orange-500 text-white px-4 py-2 ">
          Add Game
        </Button>
      </div>
      
    </div>
  )
}

export default Step3