/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Input,
  Button,
  Textarea,
  Spinner,
  Select as MSelect,
  Option,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { useAddGameToTnmtMutation } from "../../../../redux/api/organizer/orgApi";
import { useAppSelector } from "../../../../redux/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DatePicker from "react-datepicker";
import { useGetGamesQuery } from "../../../../redux/api/General/generalApi";
import { toast } from "react-toastify";

// icons

const AddGame = () => {
  const { id: tourId } = useAppSelector(
    (state) => state.tournament.tour_details
  );
  const dispatch = useDispatch();
  const [
    addGameToTnmt,
    { isSuccess, isLoading: isAddingGame, isError: errorWhileAddingGame },
  ] = useAddGameToTnmtMutation();

  // entire ui can be divided into
  // game detail
  // participants details (ex: min age, min boys ,etc)
  // prize
  // schedule
  const initialValues = {
    name: "game1",
    tournament_id: tourId,
    game_id: 1, // hardcoded from database 1 -> cricket
    info: "very long long description",
    prize_pool: 60000,
    participation_fees: 200,
    team_size: 1,
    max_teams: 8,
    total_rounds: 3,
    min_boys: null,
    min_girls: null,
    open_to: 2,
    min_age: 18,
    max_age: 23,

    // field to be added

    type: 1, // select field
    num_groups: 0,
    teams_per_group: 0,
    avg_duration: 45,

    start_date: "2023-08-16T15:57:35.587Z",
    end_date: "2023-08-16T15:57:35.587Z",
    // start_date: null,
    // end_date: null
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [qualification, setQualification] = useState("Single Elimination");
  const [game, setGame] = useState(null);
  const [whoCanParticipate, setWhoCanParticipate] = useState(2)

  const {
    data: fetchedGames,
    isLoading,
    isFetching,
    isSuccess: successGames,
    isError: errorWhileGamesFetch,
  } = useGetGamesQuery({ skip: true });
  if (errorWhileGamesFetch) {
    toast.error("Error while fetching games from our side");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const qualificationOptions = [
    {
      value: 1,
      label: "Single Elimination",
    },
    {
      value: 2,
      label: "League",
    },
  ];

  const handleQualification = (selectedOption) => {
    console.log(selectedOption);
    setQualification(selectedOption.label);
    setValues({
      ...values,
      type: selectedOption,
    });
  };

  const handleGameChange = (selectedId) => {
    setValues({
      ...values,
      game_id: selectedId,
    });
  };

  const handleParticipantRadio = (value)=>{
    setWhoCanParticipate(value);
    console.log(value)
    setValues({
      ...values,
      open_to: value,
    });

    if(value === 0){
      setValues({
        ...values, 
        min_girls: value,
        min_boys:null,
        open_to: value,
      })
    }
    else if(value === 1){
      setValues({
        ...values,
        min_boys: value,
        min_girls: null,
        open_to: value,
      })
    }
    else if(value === 2){
      setValues({
        ...values,
        min_boys: 1,
        min_girls: 0,
        open_to: value,
      })
    }

  }

  const addGameToDB = async () => {
    try {
      const addedGame = await addGameToTnmt(values);
      console.log(addedGame);
    } catch (e) {
      const err = e?.data.detail || "Unknown error";
      toast.success(`Error while adding game to tournament${err}`);
    }
  };

  console.log(values);
  return (
    <div className="w-full space-y-8 py-5 border-t-2 ">
      {isSuccess ? (
        <div className="flex items-center justify-start mx-auto text-xl font-poppins gap-3">
          <CheckCircleIcon className="text-green-500" />{" "}
          <p>Game added Successfully</p>
        </div>
      ) : (
        <div className="space-y-4 shadow-lg p-4">
          <p className=" text-xl text-center font-poppins font-bold">
            Add new Game
          </p>

          {/* GAme details div starts */}
          <div className="w-full p-6 border border-black-100 rounded-lg flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="font-semibold font-poppins text-blue-gray-700">
                Enter game details{" "}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2 gap-x-2">
                <Input
                  value={values.name}
                  onChange={handleInputChange}
                  label="Enter the name of Game"
                  className="min-w-1/3"
                  color="orange"
                  name="name"
                />
              </div>
              <div className="w-full lg:w-1/2 text-sm">
                <MSelect
                  onChange={handleGameChange}
                  color="orange"
                  label="select game to be played"
                >
                  {successGames ? (
                    fetchedGames.map((o) => (
                      <Option className="capitalize" value={o.id}>
                        {o.value}
                      </Option>
                    ))
                  ) : (
                    <Option>game 1</Option>
                  )}
                </MSelect>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <Input
                value={values.avg_duration}
                type="number"
                onChange={handleInputChange}
                label="Average duration (in minutes)"
                color="orange"
                name="avg_duration"
              />
              {/* <Select
                options={qualificationOptions}
                onChange={handleQualification}
                autoFocus={true}
                value={qualification}
                className="w-full text-sm"
                placeholder={qualification}
              /> */}
              <MSelect
                onChange={handleQualification}
                color="orange"
                label="Type of Game"
              >
                {qualificationOptions.map((op) => (
                  <Option className="capitalize" value={op.value}>
                    {op.label}
                  </Option>
                ))}
              </MSelect>
            </div>

            {values.type === 2 && (
              <div className={`w-full flex flex-col lg:flex-row gap-5`}>
                <Input
                  value={values.num_groups}
                  type="number"
                  onChange={handleInputChange}
                  label="Number of Groups"
                  color="orange"
                  name="num_groups"
                />
                <Input
                  value={values.teams_per_group}
                  type="number"
                  onChange={handleInputChange}
                  label="Teams per group"
                  color="orange"
                  name="teams_per_group"
                />
              </div>
            )}

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
                }}
                label="Maximum Team"
                color="orange"
                name="max_teams"
              />
              <Input
                value={values.total_rounds}
                onChange={handleInputChange}
                label="Total Matches to be played"
                color="orange"
                name="total_rounds"
              />
            </div>

            <Textarea
              value={values.info}
              onChange={handleInputChange}
              className="w-full "
              label="Tournament Description"
              color="orange"
              name="info"
            />
          </div>
          {/* GAme details div ends */}

          {/* Participants div starts */}
          <div className="p-6 border border-black-100 rounded-lg space-y-4">
            <div className="flex gap-4">
              <p className="font-semibold font-poppins text-blue-gray-700">
                Who can participate?
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5">
              {/* <Input
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
            /> */}
              <List className=" w-full flex-row">
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-react"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        color="amber"
                        name="horizontal-list"
                        id="horizontal-list-react"
                        ripple={false}
                        checked={whoCanParticipate === 0}
                        onChange={() => handleParticipantRadio(0)}
                        className="hover:before:opacity-0 "
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Only Girls
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-vue"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                      color="amber"
                        name="horizontal-list"
                        id="horizontal-list-vue"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        checked={whoCanParticipate === 1}
                        onChange={() => handleParticipantRadio(1)}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Only Boys
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-svelte"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                      color="amber"
                        name="horizontal-list"
                        id="horizontal-list-svelte"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        checked={whoCanParticipate === 2}
                        onChange={() => handleParticipantRadio(2)}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Both
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
              <Input
                value={values.min_age}
                type="number"
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
            </div>
          </div>
          {/* Participants div ends */}

          {/* Prize and schedule div starts */}
          <div className="w-full p-6 border border-black-100 flex md:justify-between flex-col lg:flex-row gap-6">
            <div className="w-1/3 flex flex-col gap-5">
              <div className="flex gap-4">
                <p className="font-semibold font-poppins text-blue-gray-700">
                  Fess and Prizes{" "}
                </p>
              </div>
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

            {/* Schedule div starts */}
            <div className="w-full flex flex-col gap-5">
              <div className="flex gap-4">
                <p className="font-semibold font-poppins text-blue-gray-700">
                  Schedule{" "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DatePicker
                  selected={startDate}
                  showTimeSelect
                  onChange={(date) => setStartDate(date)}
                  className="w-60 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-xs md:text-normal"
                  placeholderText="Select start Date"
                  name="start_date"
                />
                <p>To</p>
                <DatePicker
                  selected={endDate}
                  showTimeSelect
                  onChange={(date) => setEndDate(date)}
                  className="w-60 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                  placeholderText="Select End Date"
                  name="end_date"
                />
              </div>
            </div>
            {/* Schedule div ends */}
          </div>
          {/* Prize and schedule div ends */}

          {/* <div className="w-full flex flex-col lg:flex-row justify-between  gap-4">
            <div className="text-sm w-full  flex items-center justify-center">
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={(date) => setStartDate(date)}
                className="border border-gray-500 px-4 py-2  rounded-lg focus:outline-none w-64 focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                placeholderText="Select End Date"
                name="start_date"
              />
            </div>
            <p className=" my-auto mx-4 text-normal font-poppins text-gray-700 text-center">to</p>
            <div className="text-sm w-full  flex items-center justify-center">
              <DatePicker
                selected={endDate}
                showTimeSelect
                onChange={(date) => setEndDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-64 focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                placeholderText="Select End Date"
                name="end_date"
              />
            </div>
          </div> */}

          <div className="w-full flex justify-center items-center">
            <Button
              onClick={addGameToDB}
              className="flex justify-center items-center"
              color="orange"
            >
              {isAddingGame ? <Spinner color="amber" /> : "Add game"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddGame;
