import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css';

const Step1 = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationDescription, setOrganizationDescription] = useState('');
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentDescription, setTournamentDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

  const handleProceed = () => {
    console.log('Proceed button clicked!');
    // window.location.href = '/next-page';
  };

  const handleAutoSave = () => {
    console.log('Auto-Save triggered!');
    console.log('Organization Name:', organizationName);
    console.log('Organization Description:', organizationDescription);
    console.log('Tournament Name:', tournamentName);
    console.log('Tournament Description:', tournamentDescription);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  const options = [
    { value: 'Valorant', label: 'Valorant' },
    { value: 'CricketBuz', label: 'CricketBuz' },
    { value: 'FifaUpdated', label: 'FifaUpdated' }
  ]

  return (
    <div className=" container mx-auto">
      <div className='w-full h-fit bg-orange-500 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5 items-center justify-end p-1 rounded-lg text-center mt-4'>
        <p className=' font-semibold text-gray-50 xl:mr-28 text-md md:text-normal mt-2 lg:mt-0'>Replicate Previous Tournament</p>

        <Select 
        options={options} 
        placeholder="List of prv tournaments"
        className='"border-2 bg-white hover:bg-gray-100 text-gray-500 w-full md:w-full lg:w-2/4 xl:w-2/5 2xl:w-1/4 rounded-lg' 
        />
      
      </div>

      <div className=" mt-2 md:mt-4 lg:mt-6 w-full sm:w-4/4 lg:w-full py-2 md:py-5 rounded-lg flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className=" text-blue-gray-700 text-2xl  md:text-3xl font-bold text-center">Organisational Details</p>
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
                {/** 
                <p className='text-gray-500 text-xs'>
                will be auto-filled if org selected from the list
                </p>*/}
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
            <p className=" text-blue-gray-700 text-2xl md:text-3xl font-bold text-center mt-4">Tournament Details</p>
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
                <p className='text-gray-500 text-xs'>
                 will be auto-filled if tournament selected from the list
                 </p>
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
                onChange={(date) => setStartDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-xs md:text-normal"
                placeholderText="Select Start Date"
              />
            </div>

            <p className=" my-auto mx-4 text-normal text-gray-500">to</p>

            <div className="text-sm">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200  text-xs md:text-normal"
                placeholderText="Select End Date"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleProceed}
            >
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Step1;