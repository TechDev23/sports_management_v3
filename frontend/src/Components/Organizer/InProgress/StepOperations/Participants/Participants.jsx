import { useState } from "react";
import { Button, Chip, Typography } from "@material-tailwind/react";
import { useGetRgstrdTeamsQuery } from "../../../../../redux/api/organizer/orgApi";



export default function Participants() {
  const toSend = {
    tournament_id : "HRTirSchGzYehTGx",
    tournament_game_id : "HSohQ8E22JU5oeXQ",
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI1MzQ5MjksInN1YiI6Imp1RDNSTm52RUEifQ.G_uA3tDwtdIl7SfG4sRwyQl-QcDpTwPDOVIjgQvXj1Y",
  }
  const {data:allTeams, isLoading, isFetching, isError, error} = useGetRgstrdTeamsQuery(toSend)
  console.log(allTeams)
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
          >
            All
          </Button>
          <Button
            color="orange"
            size="sm"
            variant="text"
            className="border-none outline-none"
          >
            Approved Teams
          </Button>
          <Button
            color="red"
            size="sm"
            variant="text"
            className="border-none outline-none"
          >
            Rejected Teams
          </Button>
        </div>
        <div className="w-full rounded-md">

          <div className="w-full shadow-md rounded-md my-2 p-4 flex flex-row justify-between items-center ">
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-3">
                <Typography variant="h5" className="capitalize font-semibold ">
                  {" "}
                  hello
                </Typography>
              </div>
              <div className="flex flex-row items-start gap-20">
                <div className="flex flex-col gap-2">
                  <span className=" text-[14px] text-gray-700 font-medium">
                    Created by:
                  </span>
                  <span className="text-[13px]">Member</span>
                </div>
              </div>
            </div>

            <div className="space-x-2">
              <Button
                type="button"
                color="amber"
                variant="text"
              >
                Accept
              </Button>
              <Button
                type="button"
                color="red"
                variant="text"
              >
                Reject
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
