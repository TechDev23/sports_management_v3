/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
// import {
//   getTournamentFixtures,
//   postMatchScore,
//   postMatchResult,
//   createTournamentFixtures,
// } from "../../redux/slices/Tournament/tournamentAction";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  Spinner,
} from "@material-tailwind/react";
import { ButtonGroup } from "@material-tailwind/react";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import SetScore from "./SetScore";

export default function Rosters() {
  const [tourFixtures, setTourFixtures] = useState([]);
  const tourID = localStorage.getItem("createdTournamentID");

  const mappedMatches = tourFixtures?.reduce((matchesByRound, fixture) => {},
  []);

  const handleCreateFixtures = async () => {};

  const [show, setShow] = useState(false);

  const teamDetails = () => {
    setShow(!show);
  };


  return (
    <div className="flex flex-col gap-2 min-h-screen">
      {show ? (
        <SetScore/>
      ) : (
        <div>
          <div className="flex flex-col w-full items-start justify-center gap-6">
            <h1 className="font-semibold">Roster 1</h1>
            <button
              onClick={() => setShow(!show)}
              className=" p-2 border w-full rounded-lg"
            >
              <div className="flex flex-row  items-center justify-between gap-4  ">
                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 1
                  </p>
                </div>

                <Button color="orange">VS</Button>

                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 2
                  </p>
                </div>
                <textarea
                  className="flex-grow w-full h-10 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Time Place and Responsible details"
                  rows={10}
                  disabled="true"
                ></textarea>
              </div>
            </button>

            {/* ================================ */}

            <div className="flex flex-row w-full px-20 justify-between items-center">
              <Button color="orange">Customize Roster</Button>
              <Button color="orange">Declear Roster</Button>
            </div>
          </div>

          <div className="my-10 border-t-2"></div>

          <div className="flex flex-col w-full items-start justify-center gap-6">
            <h1 className="font-semibold">Roster Round 2</h1>
            <button className=" p-2 border w-full rounded-lg">
              <div className="flex flex-row  items-center justify-between gap-4  ">
                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 1
                  </p>
                </div>

                <Button color="orange">VS</Button>

                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 2
                  </p>
                </div>
                <textarea
                  className="flex-grow w-full h-10 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Time Place and Responsible details"
                  rows={10}
                  disabled="true"
                ></textarea>
              </div>
            </button>

            <button className=" p-2 border w-full rounded-lg">
              <div className="flex flex-row  items-center justify-between gap-4  ">
                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 3
                  </p>
                </div>

                <Button color="orange">VS</Button>

                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Player 4
                  </p>
                </div>
                <textarea
                  className="flex-grow w-full h-10 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  placeholder="Time Place and Responsible details"
                  rows={10}
                  disabled="true"
                ></textarea>
              </div>
            </button>

            {/* ================================ */}

            <div className="flex flex-row w-full px-20 justify-between items-center">
              <Button color="orange">Customize Roster</Button>
              <Button color="orange">Declear Roster</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
