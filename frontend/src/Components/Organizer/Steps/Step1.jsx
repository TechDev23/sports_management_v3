import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateTournamentMutation } from "../../../redux/api/organizer/orgApi";
import { useAppSelector } from "../../../redux/store";
import { Button, Spinner } from "@material-tailwind/react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setTournamentDetails } from "../../../redux/features/tournamentSlice";
import CustomizedSteppers from "../../Common/Stepper";
import { useNavigate } from "react-router-dom";

function Content() {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationDescription, setOrganizationDescription] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentDescription, setTournamentDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { id: userId } = useAppSelector((state) => state.userState.user);
  const [createTournament, { isLoading, isError, error, isSuccess }] =
    useCreateTournamentMutation();

  const handleOrganizationNameChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const handleOrganizationDescriptionChange = (event) => {
    setOrganizationDescription(event.target.value);
  };

  const handleTournamentNameChange = (event) => {
    setTournamentName(event.target.value);
  };

  const handleTournamentDescriptionChange = (event) => {
    setTournamentDescription(event.target.value);
  };

  const handleProceed = async () => {
    console.log("Start Date:", startDate);

    console.log("End Date:", endDate);
    console.log("Proceed button clicked!");
    try {
      const toSent = {
        name: tournamentName,
        about: tournamentDescription,
        organizer_id: userId,
        start_date: startDate,
        end_date: endDate,
        is_payment_done: true,
        is_active: true,
      };
      const crtTrnmt = await createTournament(toSent).unwrap();
      console.log("Create tournament returned", crtTrnmt);
    } catch (error) {
      const errorMessage = error?.data?.detail || "An error occurred";
      toast.error(`${errorMessage}`);
    }
  };

  const handleAutoSave = () => {
    console.log("Auto-Save triggered!");
    console.log("Organization Name:", organizationName);
    console.log("Organization Description:", organizationDescription);
    console.log("Tournament Name:", tournamentName);
    console.log("Tournament Description:", tournamentDescription);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const options = [
    { value: "Valorant", label: "Valorant" },
    { value: "CricketBuz", label: "CricketBuz" },
    { value: "FifaUpdated", label: "FifaUpdated" },
  ];

  return (
    <div className=" ">

      <div className="w-full">
        <CustomizedSteppers step={0}/>
      </div>
      <div className=" mt-2 md:mt-4 lg:mt-6 w-full sm:w-4/4 lg:w-full py-2 md:py-5 rounded-lg flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className=" text-blue-gray-700 text-2xl  md:text-3xl font-bold text-center">
            Organisational Details
          </p>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="text-sm w-full">
              <label htmlFor="organization" className="block mb-1 mt-2">
                Organisation Name
              </label>
              <input
                type="text"
                id="organization"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Organisation Name"
                value={organizationName}
                onChange={handleOrganizationNameChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-sm ">
              <label htmlFor="description" className="block mb-1 mt-4">
                About Organisation{" "}
              </label>
              <textarea
                id="description"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Organisation Description"
                value={organizationDescription}
                onChange={handleOrganizationDescriptionChange}
              />
            </div>
          </div>

          <div>
            <p className=" text-blue-gray-700 text-2xl md:text-3xl font-bold text-center mt-4">
              Tournament Details
            </p>
          </div>
          <div className="flex mt-2">
            <div className="text-sm  w-full">
              <label htmlFor="tournament" className="block mb-1 mt-2">
                Tournament Name
              </label>
              <input
                type="text"
                id="tournament"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Tournament Name"
                value={tournamentName}
                onChange={handleTournamentNameChange}
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="text-sm l">
              <label htmlFor="details" className="block mb-1 mt-4">
                About Tournament{" "}
              </label>
              <textarea
                id="details"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Tournament Description"
                value={tournamentDescription}
                onChange={handleTournamentDescriptionChange}
              />
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center justify-between">
            <div className="text-sm ">
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={(date) => setStartDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-xs md:text-normal"
                placeholderText="Select Start Date"
              />
            </div>

            <p className=" my-auto mx-4 text-normal text-gray-500">to</p>

            <div className="text-sm">
              <DatePicker
                selected={endDate}
                showTimeSelect
                onChange={(date) => setEndDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                placeholderText="Select End Date"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleProceed}
            >
              {isLoading ? <Spinner color="amber" /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Success() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-6xl">
          <CheckCircleOutlineIcon
            fontSize="inherit"
            className="text-green-400"
          />
        </p>
        <p className="font-poppins text-xl">Tournament Created Succesfully</p>
        <p className="font-poppins text-sm text-gray-600">
          Now you can add games to tournament
        </p>
      </div>
    </div>
  );
}

const Step1 = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationDescription, setOrganizationDescription] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentDescription, setTournamentDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { id: userId } = useAppSelector((state) => state.userState.user);
  const [createTournament, { isLoading, isError, error, isSuccess }] =
    useCreateTournamentMutation();
  const dispatch = useDispatch();

  const handleOrganizationNameChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const handleOrganizationDescriptionChange = (event) => {
    setOrganizationDescription(event.target.value);
  };

  const handleTournamentNameChange = (event) => {
    setTournamentName(event.target.value);
  };

  const handleTournamentDescriptionChange = (event) => {
    setTournamentDescription(event.target.value);
  };

  const handleProceed = async () => {
    try {
      const toSent = {
        name: tournamentName,
        about: tournamentDescription,
        organizer_id: userId,
        start_date: startDate,
        end_date: endDate,
        is_payment_done: true,
        is_active: true,
      };
      const crtTrnmt = await createTournament(toSent).unwrap();
      if(crtTrnmt.status === "success" && crtTrnmt.status_code === 201)
        dispatch(setTournamentDetails(crtTrnmt?.data))
    
      console.log("Create tournament returned", crtTrnmt);
      
    } catch (error) {
      const errorMessage = error?.data?.detail || "An error occurred";
      toast.error(`${errorMessage}`);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-full">
      { isSuccess ? 
        <Success/> : 
      
      <div className="w-full gap-4">
      <div className="w-full">
          <CustomizedSteppers step={0}/>
      </div>
      <div className=" mt-2 md:mt-4 lg:mt-6 w-full sm:w-4/4 lg:w-full py-2 md:py-5 rounded-lg flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className=" text-blue-gray-700 text-2xl  md:text-3xl font-bold text-center">
            Organisational Details
          </p>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="text-sm w-full">
              <label htmlFor="organization" className="block mb-1 mt-2">
                Organisation Name
              </label>
              <input
                type="text"
                id="organization"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Organisation Name"
                value={organizationName}
                onChange={handleOrganizationNameChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="text-sm ">
              <label htmlFor="description" className="block mb-1 mt-4">
                About Organisation{" "}
              </label>
              <textarea
                id="description"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Organisation Description"
                value={organizationDescription}
                onChange={handleOrganizationDescriptionChange}
              />
            </div>
          </div>

          <div>
            <p className=" text-blue-gray-700 text-2xl md:text-3xl font-bold text-center mt-4">
              Tournament Details
            </p>
          </div>
          <div className="flex mt-2">
            <div className="text-sm  w-full">
              <label htmlFor="tournament" className="block mb-1 mt-2">
                Tournament Name
              </label>
              <input
                type="text"
                id="tournament"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Tournament Name"
                value={tournamentName}
                onChange={handleTournamentNameChange}
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="text-sm l">
              <label htmlFor="details" className="block mb-1 mt-4">
                About Tournament{" "}
              </label>
              <textarea
                id="details"
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 "
                placeholder="Enter Tournament Description"
                value={tournamentDescription}
                onChange={handleTournamentDescriptionChange}
              />
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center justify-between">
            <div className="text-sm ">
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={(date) => setStartDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-xs md:text-normal"
                placeholderText="Select Start Date"
              />
            </div>

            <p className=" my-auto mx-4 text-normal text-gray-500">to</p>

            <div className="text-sm">
              <DatePicker
                selected={endDate}
                showTimeSelect
                onChange={(date) => setEndDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                placeholderText="Select End Date"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleProceed}
            >
              {isLoading ? <Spinner color="amber" /> : "Save"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row  items-center justify-center lg:justify-end gap-4 ">
        <Button color='orange' onClick={()=> navigate("/o/new-tournament/step2")} >
          Next
        </Button>
      </div>
    </div>

      }
    </div>
    
  );
};

export default Step1;
