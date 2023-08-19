/* eslint-disable no-unused-vars */
//import { useDispatch } from "react-redux";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
//import { getTournamentEntries } from "../../redux/slices/Tournament/tournamentAction";
import { useState } from "react";
//import { approveTeam } from "../../redux/slices/Teams/teamActions";
import { Button, Chip, Typography } from "@material-tailwind/react";
import { ImCross } from "react-icons/im";

export default function Participants() {
  // const dispatch = useDispatch();
  const [allTeams] = useState([]);
  //const tourID = localStorage.getItem("createdTournamentID")
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await dispatch(
  //           getTournamentEntries({ id: tourID, isApproved: false })
  //         );
  //         console.log('Data:', response.payload); // Access the data from the response
  //         setAllTeams(response.payload);
  //       } catch (error) {
  //         console.log("Error:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [dispatch]);

  const [all, setAll] = useState(true);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  const fetchData = async () => {
    setAll(true);
    setApproved(false);
    setRejected(false);
  };

  const fetchAprpovedTeams = async () => {
    setApproved(true);
    setAll(false);
    setRejected(false);
  };

  const fetchRejectedTeams = async () => {
    setRejected(true);
    setApproved(false);
    setAll(false);
  };

  const handleApproveTeam = async (id, isApprove) => {
    try {
      //   await dispatch(approveTeam({id: id, isApproved: true}))
      //   setAllTeams(prevTeams => {
      //     return prevTeams.map(team => {
      //       if (team.id === id) {
      //         // Update the team's isApproved property
      //         return { ...team, isApproved: true };
      //       }
      //       return team;
      //     });
      //   });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleRejectTeam = async (id, isApprove) => {
    try {
      //  await dispatch(approveTeam({id: id, isApproved: false}))
      //   // console.log("Aprrove team: ", response.payload)
      //   setAllTeams(prevTeams => {
      //     return prevTeams.map(team => {
      //       if (team.id === id) {
      //         // Update the team's isApproved property
      //         return { ...team, isApproved: false };
      //       }
      //       return team;
      //     });
      //   });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  console.log("All teams", allTeams);

  return (
    <>
      <div className="w-full min-h-screen">
        <Typography variant="h4">Teams</Typography>
        <div className="flex gap-4">
          <Button
            color="orange"
            size="sm"
            variant="text"
            className="border-none outline-none"
            onClick={() => fetchData()}
          >
            All
          </Button>
          <Button
            color="orange"
            size="sm"
            variant="text"
            className="border-none outline-none"
            onClick={() => fetchAprpovedTeams()}
          >
            Approved Teams
          </Button>
          <Button
            color="red"
            size="sm"
            variant="text"
            className="border-none outline-none"
            onClick={() => fetchRejectedTeams()}
          >
            Rejected Teams
          </Button>
        </div>
        <div className="my-8 border-t-2"></div>
        {all ? (
          <div>
            <div className="w-full rounded-md">
              <div className="w-full shadow-md rounded-md my-2 md:p-4 py-2 flex flex-row justify-between items-center ">
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex gap-3">
                    <Typography
                      variant="h5"
                      className="capitalize font-semibold "
                    >
                      Team name
                    </Typography>
                  </div>
                  <div className="flex flex-row items-start gap-20">
                    <div className="flex flex-col gap-2">
                      <span className=" text-[14px] text-gray-700 font-medium">
                        Created by: name
                      </span>
                      <span className="text-[13px]">count Member</span>
                      <span className="rounded-full -mt-1 bg-gray-200 border-gray-400 border-[1px] px-6 py-1 text-[12px]">
                        Cricket
                      </span>
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
            </div>
          </div>
        ) : null}

        {approved ? (
          <div>
            <div className="w-full rounded-md">
              <div className="w-full shadow-md rounded-md my-2 md:p-4 py-2 p flex flex-row justify-between items-center ">
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex gap-3">
                    <Typography
                      variant="h5"
                      className="capitalize font-semibold "
                    >
                      Approved Team name
                    </Typography>
                    <Chip
                      value="approved"
                      variant="outlined"
                      className="text-green-600 border-green-200 border-none"
                      icon={<CheckCircleIcon className="text-green-600" />}
                    />
                  </div>
                  <div className="flex flex-row items-start gap-20">
                    <div className="flex flex-col gap-2">
                      <span className=" text-[14px] text-gray-700 font-medium">
                        Created by: name
                      </span>
                      <span className="text-[13px]">count Member</span>
                      <span className="rounded-full -mt-1 bg-gray-200 border-gray-400 border-[1px] px-6 py-1 text-[12px]">
                        Cricket
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {rejected ? (
          <div>
            <div className="w-full rounded-md">
              <div className="w-full shadow-md rounded-md my-2 md:p-4 py-2 flex flex-row justify-between items-center ">
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex gap-3">
                    <Typography
                      variant="h5"
                      className="capitalize font-semibold "
                    >
                      Rejected Team name
                    </Typography>
                    <Chip
                      value="not approved"
                      variant="outlined"
                      className="text-red-600 border-none"
                      icon={<ImCross className="text-red-600 mt-1" />}
                    />
                  </div>
                  <div className="flex flex-row items-start gap-20">
                    <div className="flex flex-col gap-2">
                      <span className=" text-[14px] text-gray-700 font-medium">
                        Created by: name
                      </span>
                      <span className="text-[13px]">count Member</span>
                      <span className="rounded-full -mt-1 bg-gray-200 border-gray-400 border-[1px] px-6 py-1 text-[12px]">
                        Cricket
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
