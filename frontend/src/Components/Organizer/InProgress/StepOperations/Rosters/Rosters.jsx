import React from "react";
import { Button } from "@material-tailwind/react";
import { useGetFixturesQuery } from "../../../../../redux/api/organizer/orgApi";
import { Fragment } from "react";

function FixtureList({ fixtures }) {
  console.log("fixtures", fixtures)
  return (
    <div className="p-2 border w-full rounded-lg">
      {/* Display the round number */}
      <p>Round {fixtures[0].round_no}</p>

      {/* Map over fixtures for this round */}
      {fixtures.map((fixture) => (
        <Fragment key={fixture.id}>
          <div className="my-2">
            
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="w-72">
              <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                {fixture?.team_1?.name}
              </p>
            </div>

            <Button color="orange">vs</Button>

            <div className="w-72">
              <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
              {fixture?.team_2?.name}
              </p>
            </div>
            <textarea
              className="flex-grow w-full h-10 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              placeholder="Time Place and Responsible details"
              rows={10}
              disabled="true"
            ></textarea>
          </div>
          
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default function Rosters() {
  const toSend = {
    tournament_id: "HRTirSchGzYehTGx",
    tournament_game_id: "HSohQ8E22JU5oeXQ",
    game_id: 1,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI1MjU2NjMsInN1YiI6Imp1RDNSTm52RUEifQ.4b0kGLWT3NSjL1WSjL_EzFxsV5AyqhONhOya_ZmN71I",
  };
  const {
    data: allFixtures,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetFixturesQuery(toSend);

  const fixturesByRound = {};

  if (isSuccess) {
    // Step 1: Group fixtures by 'round_no'
    allFixtures?.data?.forEach((fixture) => {
      const roundNo = fixture.round_no;
      if (!fixturesByRound[roundNo]) {
        fixturesByRound[roundNo] = [];
      }
      fixturesByRound[roundNo].push(fixture);
    });
  }

  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <div>
        <div className="flex flex-col w-full items-start justify-center gap-6">
          <h1 className="font-semibold">Roster 1</h1>

          {/* Render fixtures grouped by rounds */}
          {Object.keys(fixturesByRound).map((roundNo) => (
            <Fragment key={roundNo}>
              <FixtureList fixtures={fixturesByRound[roundNo]} />
            </Fragment>
          ))}

          <div className="flex flex-row w-full px-20 justify-between items-center">
            <Button color="orange">Customize Roster</Button>
            <Button color="orange">Declare Roster</Button>
          </div>
        </div>

        <div className="my-10 border-t-2"></div>
      </div>
    </div>
  );
}
