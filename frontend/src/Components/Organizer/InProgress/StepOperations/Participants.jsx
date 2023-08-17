//import { useDispatch } from "react-redux";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
//import { getTournamentEntries } from "../../redux/slices/Tournament/tournamentAction";
import { useState } from "react";
//import { approveTeam } from "../../redux/slices/Teams/teamActions";
import { Button, Chip, Typography } from "@material-tailwind/react";
import { ImCross } from 'react-icons/im'

export default function Participants() {
  


    const fetchAprpovedTeams = async()=>{
      try {
        // const response = await dispatch(getTournamentEntries({id: tourID, isApproved: true}))
        // setAllTeams(response.payload);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    const fetchRejectedTeams = async()=>{
      try {
        // const response = await dispatch(getTournamentEntries({id: tourID, isApproved: false}))
        // setAllTeams(response.payload);
      } catch (error) {
        console.log('Error:', error);
      }
    }

    const fetchData = async () => {
      try {

      } catch (error) {
        console.log('Error:', error);
      }
    };
  
  const handleApproveTeam = async (id, isApprove) => {
    try {
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleRejectTeam = async (id, isApprove) => {
    try {
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // console.log("All teams", allTeams)
  

  return (
<>
    <div className="w-full min-h-screen">
        <Typography variant="h4">Teams</Typography>
      <div className="flex gap-4">
        <Button color="orange" size="sm" variant="text" className="border-none outline-none" onClick={()=>fetchData()}>All</Button>
        <Button color="orange" size="sm" variant="text" className="border-none outline-none" onClick={()=>fetchAprpovedTeams()}>Approved Teams</Button>
        <Button color="red" size="sm" variant="text" className="border-none outline-none" onClick={()=>fetchRejectedTeams()}>Rejected Teams</Button>
      </div>
    <div className="w-full rounded-md">

      {/* {true && allTeams.map((data, index) => ( */}
          <div className="w-full shadow-md rounded-md my-2 p-4 flex flex-row justify-between items-center ">
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-3">
                <Typography variant="h5" className="capitalize font-semibold "> hello</Typography>
                {/* {
                  data.isApproved ? <Chip value="approved" variant="outlined" className="text-green-200 border-green-200 border-none" icon={<CheckCircleIcon className="text-green-200" />} />:
                  <Chip value="not approved" variant="outlined" className="text-red-200 border-none" icon={<ImCross className="text-red-200" />} />
                } */}
                
              </div>
              <div className="flex flex-row items-start gap-20">
                <div className="flex flex-col gap-2">
                  <span className=" text-[14px] text-gray-700 font-medium">
                    Created by: 
                  </span>
              <span className="text-[13px]">Member</span>
                  {/* <span className="rounded-full -mt-1 bg-gray-200 border-gray-400 border-[1px] px-6 py-1 text-[12px]">
                    Cricket
                  </span> */}
                </div>

              </div>
            </div>

            <div className="space-x-2">
              <Button
                type="button"
                color="amber"
                // onClick={() => handleApproveTeam(data.id, true)}
                variant="text" 
              >
                Accept
              </Button>
              <Button
                type="button"
                color="red"
                // onClick={() => handleRejectTeam(data.id, false)}
                variant="text" 
              >
                Reject
              </Button>
            </div>
          </div>
      {/* ))} */}
    </div>

      </div>
    </>
  );
};