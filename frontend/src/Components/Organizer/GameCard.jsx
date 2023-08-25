import React, {useState} from 'react'


import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Typography,
  } from "@material-tailwind/react";
  
import Select from "react-select";
import EditIcon from "@mui/icons-material/Edit";
import { MdGirl, MdOutlineGirl } from 'react-icons/md';
import { BiFemale } from 'react-icons/bi';
import { BsGenderFemale } from 'react-icons/bs';
import { FaFemale, FaMale } from 'react-icons/fa';


function UpdateDialog() {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(!open);
  
    const initialValues = {
      name: "game1",
      tournament_id: "hUvFddYbS3iTN2uL",
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
      end_date: "2023-08-16T15:57:35.587Z",
    };
  
    const [values, setValues] = useState(initialValues);
    const [selectedGame, setSelectedGame] = useState(null);
  
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
  
    const handleGameChangeSelect = (game) => {
      setSelectedGame(game);
      console.log(`Option selected:`, game);
    };
    const addGameToDB = async () => {
      console.log(values);
    };
    return (
      <div>
        <Button
          color="amber"
          variant="outlined"
          onClick={handleOpen}
          className="hover:text-white hover:bg-orange-500 flex gap-2 items-center justify-center w-auto border-none"
        >
          <EditIcon />
          <p>Edit</p>
        </Button>
        <Dialog open={open} handler={handleOpen} size="xxl">
          <DialogHeader className="font-poppins">Edit game details</DialogHeader>
          <DialogBody divider className="font-poppins  overflow-y-scroll">
            <div className="w-full flex flex-col p-4 gap-2">
              <div className="w-full h-52 space-y-2 border-2 border-red-500">
                <p className="font-bold text-black">Game Details</p>
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
                      options={options}
                      onChange={handleGameChangeSelect}
                      autoFocus={true}
                      value={selectedGame}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-52 border-2 border-green-500"></div>
              <div className="w-full h-52 border-2 border-purple-500"></div>
              <div className="w-full h-52 border-2 border-orange-500"></div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

const GameCard = () => {
  return (
        <Card className=" border font-poppins">
            <CardBody className='flex flex-col gap-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-2'>
                    <div className='flex flex-col '>
                    <Typography variant="h5" className="font-poppins capitalize flex gap-4 justify-start items-center">
                    {/* {game?.name} */}
                    <p>game name</p>
                    <p className='text-sm font-normal text-orange-500 bg-orange-50 p-1 px-2 rounded-lg'>Cricket</p>
                    </Typography>
                    <Typography variant="h6" className="font-poppins">
                    <p>Single Elimination</p>
                    </Typography>
                    </div>
                
                <p className='border-2 border-yellow-500 w-fit h-fit rounded-lg p-1 px-2 bg-gray-100 border-dashed'>
                    Prize Pool
                </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='font-poppins text-sm text-justify border-b-2 py-2'>
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                    </div>
                    <div className='flex justify-between'>
                        <p className='bg-gray-100 p-1 px-2 rounded-lg'>Only boys</p>
                        <div className='flex gap-2'>
                            <p className='bg-pink-50 text-pink-500 flex flex-row items-center p-1 px-2 rounded-lg'><FaFemale/><p>4</p></p>
                            <p className='bg-blue-50 text-blue-500 flex flex-row items-center p-1 px-2 rounded-lg'><FaMale/><p>5</p></p>
                        </div>

                    </div>
                    <Typography className="flex justify-between gap-4 font-poppins" >
                        <div className='flex gap-4 text-xs lg:text-sm'>
                        
                            <p className='p-1 px-2 bg-green-50  text-green-500 rounded-lg'>Start Date</p>
                            <p className='p-1 px-2 bg-red-50  text-red-500 rounded-lg'>End Date</p>
                        </div>
                        
                    </Typography>
                </div>
                <UpdateDialog />
            </CardBody>
        </Card>
  )
}

export default GameCard