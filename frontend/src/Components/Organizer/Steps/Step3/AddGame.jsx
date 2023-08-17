/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input, Button, Textarea, Spinner } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { useAddGameToTnmtMutation } from "../../../../redux/api/organizer/orgApi";
import { useAppSelector } from "../../../../redux/store";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AddGame = ({ gameIndex }) => {
  const { id: tourId } = useAppSelector((state) => state.tournament.tour_details);
  const dispatch = useDispatch();
  const [addGameToTnmt, {isSuccess, isLoading: isAddingGame}] = useAddGameToTnmtMutation()

  // entire ui can be divided into 
  // game detail
  // participants details (ex: min age, min boys ,etc)
  // prize
  // schedule
  const initialValues = {
    name: "game1",
    tournament_id : "hUvFddYbS3iTN2uL",
    game_id: 1, // hardcoded from database 1 -> cricket
    info: "very long long description",
    prize_pool: 60000,
    participation_fees: 200,
    team_size: 1,
    max_teams: 8,
    total_rounds: 3,
    min_boys: 1,
    min_girls: 0,
    open_to: 1,
    min_age: 18,
    max_age: 23,
    // field to be added
    type: 1, // select field 
    num_groups: 0,
    teams_per_group: 0,
    avg_duration: 45,
    start_date: "2023-08-16T15:57:35.587Z",
    end_date: "2023-08-16T15:57:35.587Z"
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };



  const options = [
    {
      value: "Cricket",
      label: "Cricket",
    },
    {
      value: "Football",
      label: "Football",
    },
    {
      value: "Badminton",
      label: "Badminton",
    },
  ];

  const success = true;

  const addGameToDB = async()=>{
    console.log(values);

    try {
      const addedGame = await addGameToTnmt(values)
      console.log(addedGame);
    } catch (error) {
      console.log(`Error while adding game to tournament${error}`)
    }
  }
  return (
    <div className="w-full space-y-4 py-5 border-t-2 ">
      {isSuccess ? (
        <div className="flex items-center justify-start mx-auto text-xl font-poppins gap-3">
          <CheckCircleIcon className="text-green-500"/> <p>Game added Successfully</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-blue-gray-700 text-xl">
            Add new Game
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 gap-x-2">
              <Input
                value={values.name}
                onChange={handleInputChange}
                label="Enter the name of Tournament"
                className="min-w-1/3"
                color="orange"
                name="name"
              />
            </div>
            <div className="w-full lg:w-1/3 text-sm">
              <Select
                placeholder="Select game"
                onChange={handleInputChange}
                options={options}
                name="game"
              />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4">
            <Textarea
              value={values.info}
              onChange={handleInputChange}
              className="w-full "
              label="Tournament Description"
              color="orange"
              name="info"
            />
            <div className="w-full lg:w-1/3 flex flex-col gap-5">
              <Input
                value={values.prize_pool}
                onChange={handleInputChange}
                label="Prize pool Rs"
                color="orange"
                name="prize_pool"
              />
              <Input
                value={values.participation_fees}
                onChange={handleInputChange}
                label="Participation fees"
                color="orange"
                name="participation_fees"
              />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            <Input
              value={values.team_size}
              onChange={handleInputChange}
              label="Team Size"
              color="orange"
              name="team_size"
            />
            <Input
              value={values.max_teams}
              onChange={(e) => {
                const newMaxTeams = e.target.value;
                handleInputChange;
                setMa(newMaxTeams - 1);
              }}
              label="Maximum Team"
              color="orange"
              name="max_teams"
            />
            <Input
              value={values.total_rounds}
              onChange={(e) => setTotalMatches(e.target.value)}
              label="Total Matches to be played"
              color="orange"
              name="total_rounds"
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            <Input
              value={values.min_boys}
              onChange={handleInputChange}
              label="Minimum Boys"
              color="orange"
              name="min_boys"
            />
            <Input
              value={values.min_girls}
              onChange={handleInputChange}
              label="Minimum girls"
              color="orange"
              name="min_girls"
            />
            <Input
              label="open to"
              color="orange"
              name="open_to"
              value={values.open_to}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
            <Input
              value={values.min_age}
              onChange={handleInputChange}
              label="Minimum age"
              color="orange"
              name="min_age"
            />
            <Input
              value={values.max_age}
              onChange={handleInputChange}
              label="Maximum age"
              color="orange"
              name="max_age"
            />
            <Input
              // onChange={(e) => setTotalMatches(e.target.value)}
              label="qualification method"
              color="orange"
              name="qualification"
              value={values.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Button onClick={addGameToDB} className="flex justify-center items-center" color="orange">
              {isAddingGame ? <Spinner color="amber" /> : "Add game"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddGame;
