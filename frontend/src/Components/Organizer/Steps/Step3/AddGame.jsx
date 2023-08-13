/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Input,
  Button,
  Textarea,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
// import { createTournament } from "../../redux/slices/Tournament/tournamentAction";


const AddGame = ({gameIndex}) => {

//   const dispatch = useDispatch();
//   const { fetchGames: allGames } = useSelector((state) => state.admin);
//   const { createTournament: createTrmnt } = useSelector(
//     (state) => state.tournament
//   );
//   console.log("creat tour", createTrmnt);


  const organizationData = localStorage.getItem("org");
  const { id: orgID } = organizationData ? JSON.parse(organizationData) : {};
  console.log("orgid", orgID);

  const [totalMatches, setTotalMatches] = useState(0);
  const [maxTeams, setMaxTeams] = useState(null);
  const [info, setInfo] = useState("");

  const initialValues = {
    compName: "",
    game: "",
    desc: "",
    prize: "",
    fees: "",
    teamSize: "",
    maxTeams: "",
    totalMatches: "",
    minBoys: "",
    minGirls: "",
    opento: "",
    minAge: "",
    maxAge: "",
    qualification: "",

  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {

    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value,
    });
  };


//   const options =
//     allGames.value?.map((item) => ({
//       label: item.name,
//       value: item.id.toString(),
//     })) || [];



  const options = [
    {
        value: "Cricket",
        label: "Cricket"
    },
    {
        value: "Football",
        label: "Football"
    },
    {
        value: "Badminton",
        label: "Badminton"
    }
  ]

  const success = true;
  return (
    <div className="w-full space-y-4 py-5 border-t-2 ">

    {/**
      {createTrmnt.isSuccess ? ( */}
      { !success  ? (
          <div className="flex items-center justify-center mx-auto text-xl font-bold font-poppins">
            Details Saved
          </div>
      ) : (
        <div className="space-y-4">
            <p className="text-blue-gray-700 text-2xl">Enter Game {gameIndex+1}</p>
            <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 gap-x-2">
                <Input
                value={values.compName}
                onChange={handleInputChange}
                label="Enter the name of Tournament"
                className="min-w-1/3"
                color="orange"
                name="compName"
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
                value={values.desc}
                onChange={handleInputChange}
                className="w-full "
                label="Tournament Description"
                color="orange"
                name="desc"
            />
            <div className="w-full lg:w-1/3 flex flex-col gap-5">
                <Input
                value={values.prize}
                onChange={handleInputChange}
                label="Prize pool Rs"
                color="orange"
                name="prize"
                />
                <Input
                    value={values.fees}
                    onChange={handleInputChange}
                    label="Participation fees"
                    color="orange"
                    name="fees"
                />
            </div>

            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
                <Input
                value={values.teamSize}
                onChange={handleInputChange}
                label="Team Size"
                color="orange"
                name="teamSize"
                />
                <Input
                value={values.maxTeams}
                onChange={(e) => {
                    const newMaxTeams = e.target.value;
                    handleInputChange;
                    setTotalMatches(newMaxTeams - 1);
                }}
                label="Maximum Team"
                color="orange"
                name="maxTeams"
                />
                <Input
                value={values.totalMatches}
                // onChange={(e) => setTotalMatches(e.target.value)}
                label="Total Matches to be played"
                color="orange"
                name="totalMatches"
                />
            </div>


          <div className="w-full flex flex-col lg:flex-row gap-5">
                <Input
                value={values.minBoys}
                onChange={handleInputChange}
                label="Minimum Boys"
                color="orange"
                name="minBoys"
                />
            <Input
              value={values.minGirls}
              onChange={handleInputChange}
              label="Minimum girls"
              color="orange"
              name="minGirls"
            />
            <Input
              label="open to"
              color="orange"
              name="opento"
              value={values.opento}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-5">
                <Input
                value={values.minAge}
                onChange={handleInputChange}
                label="Minimum age"
                color="orange"
                name="minAge"
                />
            <Input
              value={values.maxAge}
              onChange={handleInputChange}
              label="Maximum age"
              color="orange"
              name="maxAge"
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

          {/**

          <div className="flex flex-row justify-start space-x-4">
            <Button onClick={handleAddGame} color="orange">
              {!success ? (
                <Spinner color="amber" />
              ) : (
                "Create tournament"
              )}
            </Button>
          </div>

           */}
        </div>
      )}
    </div>
  );
};

export default AddGame;