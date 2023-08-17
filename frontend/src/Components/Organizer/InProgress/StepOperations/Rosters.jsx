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
        className={isActive ? 'bg-white text-black border' : ''}
          key={index}
          variant={isActive ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick(index)}
        >
          {index + 1}
        </Button>
      ))}
    </ButtonGroup>
          </div>

          <div className="my-5 flex flex-row items-center justify-center mr-[17rem]"><Button color="orange">VS</Button></div>


          <div className="w-72 my-5">
            <p className="text-[14px] bg-gray-200 h-10 rounded-md flex items-center justify-center">
              Player 1
            </p>
          </div>
          <div className="w-full">
          <ButtonGroup color="orange">
      {buttonStates2.map((isActive, index) => (
        <Button
        className={isActive ? 'bg-white text-black border' : ''}
          key={index}
          variant={isActive ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick2(index)}
        >
          {index + 1}
        </Button>
      ))}
    </ButtonGroup>
          </div>

        </div>
      ) : (
        <div>
          <div className="flex flex-col w-full items-start justify-center gap-6">
            <h1 className="font-semibold">Roster 1</h1>
            <button
              onClick={teamDetails}
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
