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

import { ArrowPathIcon } from "@heroicons/react/24/outline";

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
  const handlePostMatchScore = async () => {
    
  };
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
          {/* <Button variant="text" color="green" onClick={handleOpenWinnerDialog}>
            winner
          </Button> */}
        </div>
      </div>

      <ScoreDialog
        open={scoreDialogOpen}
        handleClose={handleCloseScoreDialog}
        handleScoreChange={handleScoreChange}
        team1Score={team1Score}
        team2Score={team2Score}
        handlePostMatchScore={handlePostMatchScore}
        postScoreState={postScoreState}
      />
    </>
  );
}

export default function Rosters() {
 

  
  const [tourFixtures, setTourFixtures] = useState([]);
  const tourID = localStorage.getItem("createdTournamentID");

  useEffect(() => {
    const fetchData = async () => {
     
    };

    fetchData();
  }, []);

  const mappedMatches = tourFixtures?.reduce((matchesByRound, fixture) => {
    
  }, []);

  const handleCreateFixtures = async () => {
    
  };

  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <div>
        <Button
          onClick={handleCreateFixtures}
          variant="outlined"
          color="orange"
          className={`flex items-center gap-3`}
        >
          Create fixtures
          <ArrowPathIcon
            strokeWidth={2}
            className={`h-5 w-5`}
          />
        </Button>
      </div>
      {mappedMatches.map((roundMatches, index) => (
        <div
          key={index}
          className="min-w-screen py-5 rounded border border-gray-600"
        >
          <p className="ml-2 text-gray-500">Roster Round {index}</p>
          <div className="flex flex-col p-2 space-y-3">
            {roundMatches.map((match) => (
              <Match
                key={match.id}
                match={match}
                postScoreState={postScoreState}
                postResultState={postResultState}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}