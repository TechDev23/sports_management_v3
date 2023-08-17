/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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
import { Select, Option } from "@material-tailwind/react";
import Dropdown from "react-multilevel-dropdown";

function ScoreDialog({
  open,
  handleClose,
  handleScoreChange,
  team1Score,
  team2Score,
  handlePostMatchScore,
  postScoreState,
}) {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Input
            color="orange"
            label="team1_score"
            size="lg"
            value={team1Score}
            onChange={(e) => handleScoreChange("team1", e.target.value)}
          />
          <Input
            color="orange"
            label="team2_score"
            size="lg"
            value={team2Score}
            onChange={(e) => handleScoreChange("team2", e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="orange"
            onClick={handlePostMatchScore}
            fullWidth
          >
            {postScoreState.isLoading ? (
              <Spinner color="amber" />
            ) : (
              "Update Score"
            )}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
function WinnerDialog({
  open,
  handleClose,
  winnerId,
  setWinnerId,
  handlePostWinner,
  postResultState,
}) {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Input
            color="orange"
            label="winner_id"
            size="lg"
            value={winnerId}
            onChange={(e) => setWinnerId(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="orange"
            onClick={handlePostWinner}
            fullWidth
          >
            {postResultState.isLoading ? (
              <Spinner color="amber" />
            ) : (
              "Set Winner"
            )}
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}

function Match({ match }) {
  const [team1Score, setTeam1Score] = useState("");
  const [team2Score, setTeam2Score] = useState("");
  const [scoreDialogOpen, setScoreDialogOpen] = useState(false);

  const handleOpenScoreDialog = () => {
    setScoreDialogOpen(true);
  };

  const handleCloseScoreDialog = () => {
    setScoreDialogOpen(false);
  };

  const handleScoreChange = (team, score) => {
    if (team === "team1") {
      setTeam1Score(score);
    } else if (team === "team2") {
      setTeam2Score(score);
    }
  };

  // handle submit score
  const handlePostMatchScore = async () => {};
  // handle post winner
  // const handlePostWinner = async ({ match_id }) => {
  //   console.log("Winner id", winnerId);
  //   console.log("match_id", match_id);

  // };

  return (
    <>
      <div
        key={match.id}
        className="flex flex-row rounded-lg items-center justify-evenly gap-2"
      >
        <div>
          <Input label="Team 1" value={match.team_1.name} color="orange" />
        </div>
        <div>
          <p className="p-2 bg-orange-600 text-white rounded-md"> vs </p>
        </div>
        <div>
          <Input label="Team 2" value={match.team_2.name} color="orange" />
        </div>
        <div>
          <Button variant="text" color="amber" onClick={handleOpenScoreDialog}>
            Score
          </Button>
        </div>
      </div>

      <ScoreDialog
        open={scoreDialogOpen}
        handleClose={handleCloseScoreDialog}
        handleScoreChange={handleScoreChange}
        team1Score={team1Score}
        team2Score={team2Score}
        handlePostMatchScore={handlePostMatchScore}
      />
    </>
  );
}

export default function Rosters() {
  const [tourFixtures, setTourFixtures] = useState([]);
  const tourID = localStorage.getItem("createdTournamentID");

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  const [show, setShow] = useState(false);
  const [isTeam, setIsTeam] = useState(false);

  const teamDetails = () => {
    setIsTeam(true);
  };

  const userDetails = () => {
    setShow(true);
  };

  const [buttonStates, setButtonStates] = useState(Array(21).fill(false));

  const handleButtonClick = (index) => {
    const newButtonStates = Array(21).fill(false);
    newButtonStates[index] = true;
    setButtonStates(newButtonStates);
  };

  const [buttonStates2, setButtonStates2] = useState(Array(21).fill(false));

  const handleButtonClick2 = (index) => {
    const newButtonStates = Array(21).fill(false);
    newButtonStates[index] = true;
    setButtonStates2(newButtonStates);
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [selectedSubOption, setSelectedSubOption] = useState("");

  const toggleSubOptions = () => {
    setShowSubOptions(!showSubOptions);
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption);
  };

  const [checkedBoxes, setCheckedBoxes] = useState({});

  const handleCheckboxChange = (team, title) => {
    setCheckedBoxes((prevState) => ({
      ...prevState,
      [team]: {
        ...prevState[team],
        [title]: !prevState[team][title]
      }
    }));
  };

  const teams = ['Team1', 'Team2'];
  const titles = ['1', '2', '3', '4', '5'];




  return (
    <div className="flex flex-col gap-2 min-h-screen">
      {show ? (
        <div>
          <div className="flex flex-row  items-center gap-4  ">
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
          </div>
          <textarea
            className="flex-grow w-full h-[10rem] mt-5 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="Time Place and Responsible details"
            rows={1}
            disabled="true"
          ></textarea>

          <div className="w-72 my-5">
            <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
              Player 1
            </p>
          </div>
          <div className="w-full">
            <ButtonGroup color="orange">
              {buttonStates.map((isActive, index) => (
                <Button
                  className={isActive ? "bg-white text-black border" : ""}
                  key={index}
                  variant={isActive ? "contained" : "outlined"}
                  onClick={() => handleButtonClick(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <div className="my-5 flex flex-row items-center justify-center mr-[17rem]">
            <Button color="orange">VS</Button>
          </div>

          <div className="w-72 my-5">
            <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
              Player 1
            </p>
          </div>
          <div className="w-full">
            <ButtonGroup color="orange">
              {buttonStates2.map((isActive, index) => (
                <Button
                  className={isActive ? "bg-white text-black border" : ""}
                  key={index}
                  variant={isActive ? "contained" : "outlined"}
                  onClick={() => handleButtonClick2(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
      ) : isTeam ? (
        <div>
          <div className="flex flex-row  items-center justify-between gap-4  ">
            <div className="flex flex-row items-center gap-4">
              <div className="w-72">
                <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                  Team 1
                </p>
              </div>

              <Button color="orange">VS</Button>

              <div className="w-72">
                <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                  Team 2
                </p>
              </div>
            </div>
            <div>
              <div className="w-72">
                <Select label="Match Details">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
          </div>
          <textarea
            className="flex-grow w-full h-[10rem] mt-5 border border-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="Time Place and Responsible details"
            rows={1}
            disabled="true"
          ></textarea>

          <div className="grid grid-cols-7 gap-4">
            <div className="col-start-1 col-end-6">
              <div className="flex flex-row justify-center items-center">
                <p className="text-[18px] font-semibold">Goal Score</p>
              </div>

              <div className="flex flex-row items-center justify-between border p-3 rounded-md">
                <div className="bg-gray-200 w-[12rem] h-[4rem] flex items-center justify-center rounded-sm">
                  Team A
                </div>

                <div className="w-[1rem] ">0|0</div>
                <div className="bg-gray-200 w-[12rem] h-[4rem] flex items-center justify-center rounded-sm">
                  Team A
                </div>

                <div className="bg-white w-[10rem] border-orange-400 border rounded-lg h-[4rem] flex items-center justify-center text-black">
                  45:02
                </div>
                <div className="bg-white w-[10rem] border-orange-400 border rounded-lg h-[4rem] flex items-center justify-center text-black">
                  +05:00
                </div>
              </div>

              <div className="flex flex-row items-center my-5 gap-5">
                <Button color="orange">Team A Goal</Button>
                <Button color="orange">Team B Goal</Button>
              </div>

              <div className="w-72">
                <Select label="Goal Type">
                  <Option>Normal Goal</Option>
                  <Option>Set Piece</Option>
                  <Option>Own Goal by Team B</Option>
                </Select>
              </div>
              <div className="flex flex-row items-center my-5 gap-5">
                <Button color="orange">Team A Card</Button>
                <Button color="orange">Team B Card</Button>
              </div>
              <div className="w-72 mb-5">
                <Select label="Card Type">
                  <Option>Yellow</Option>
                  <Option>Red</Option>
                </Select>
              </div>


              <Button color="orange">Shoot OUT</Button>

              <div className="p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Teams</th>
            {titles.map((title) => (
              <th key={title} className="border p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team}>
              <td className="border p-2">{team}</td>
              {titles.map((title) => (
                <td key={title} className="border p-2">
                  <input
                    type="checkbox"
                    checked={checkedBoxes[team]?.[title] || false}
                    onChange={() => handleCheckboxChange(team, title)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


      
    </div>


    
            </div>
            <div className="col-end-8 col-span-2">
              <div className="flex flex-row gap-4 items-center justify-between mt-7">
                <div className="flex flex-col justify-center items-center gap-3">
                <Button color="orange">Team A</Button>
                <div className="flex flex-col gap-4">
                  <p>Player 1</p>
                  <p>Player 2</p>
                  <p>Player 3</p>
                  <p>Player 4</p>
                  <span className="border-t-2"></span>
                  <p>substitutes</p>
                  <p>Player 1</p>
                  <p>Player 2</p>
                  <p>Player 3</p>
                  <p>Player 4</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                <Button color="orange">Team B</Button>
                <div className="flex flex-col gap-4">
                  <p>Player 1</p>
                  <p>Player 2</p>
                  <p>Player 3</p>
                  <p>Player 4</p>
                  <span className="border-t-2"></span>
                  <p>substitutes</p>
                  <p>Player 1</p>
                  <p>Player 2</p>
                  <p>Player 3</p>
                  <p>Player 4</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col w-full items-start justify-center gap-6">
            <h1 className="font-semibold">Roster 1</h1>
            <button
              onClick={userDetails}
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

            <button
              onClick={teamDetails}
              className=" p-2 border w-full rounded-lg"
            >
              <div className="flex flex-row  items-center justify-between gap-4  ">
                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Team 1
                  </p>
                </div>

                <Button color="orange">VS</Button>

                <div className="w-72">
                  <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
                    Team 2
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
