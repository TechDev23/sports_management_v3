import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  ButtonGroup,
  Select,
  Option,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAddScoreVtbMutation } from "../../../../../../redux/api/organizer/fixturesApi";

function MessageDialog({ openWhoScore, setOpenWhoScore }) {
  return (
    <>
      <Dialog open={openWhoScore} handler={setOpenWhoScore}>
        <div className="flex items-center justify-between">
          <DialogHeader>Who scored?</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Select color="amber" label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind HTML</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            color="red"
            onClick={() => setOpenWhoScore(false)}
          >
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function generateScoreButtons(game_id) {
  let numButtons;

  switch (game_id) {
    case 1: // Volleyball
      numButtons = 25;
      break;
    case 2: // Table Tennis
      numButtons = 11;
      break;
    case 3: // Badminton
      numButtons = 21;
      break;
    default:
      numButtons = 0; // Default to 0 buttons if gameId is invalid
  }

  // Generate the buttons as an array of { value, isActive } objects
  const buttons = Array(numButtons)
    .fill(false)
    .map((_, index) => ({ value: index + 1, isActive: false }));
  return buttons;
}

export default function Scoreboard({ game_id, fixtureData }) {
  const [addScoreVtb, { isLoading: setVtbScoreLoading }] =
  useAddScoreVtbMutation();
  console.log(game_id)

  const [buttonStatesTeam1, setButtonStatesTeam1] = useState(null);
  const [buttonStatesTeam2, setButtonStatesTeam2] = useState(null);
  // Initialize buttonStates for two teams based on gameId
  useEffect(() => {
    const initialButtonStatesTeam1 = generateScoreButtons(game_id);
    const initialButtonStatesTeam2 = generateScoreButtons(game_id);

    setButtonStatesTeam1(initialButtonStatesTeam1);
    setButtonStatesTeam2(initialButtonStatesTeam2);
  }, [game_id]);

  const [selectedButtonTeam1, setSelectedButtonTeam1] = useState(null);
  const [selectedButtonTeam2, setSelectedButtonTeam2] = useState(null);

  const [openWhoScore, setOpenWhoScore] = useState(false);
  const [whoScored, setWhoScored] = useState(null);

  const handleButtonClick = async (index, team) => {
    const selectedButton =
      team === "team1" ? selectedButtonTeam1 : selectedButtonTeam2;
    const setButtonStates =
      team === "team1" ? setButtonStatesTeam1 : setButtonStatesTeam2;
    const setSelectedButton =
      team === "team1" ? setSelectedButtonTeam1 : setSelectedButtonTeam2;

    // Check if the clicked button's value is greater than the current score
    if (index + 1 === selectedButton + 1 || index + 1 === selectedButton - 1) {
      setOpenWhoScore(!openWhoScore);

      
      // Set the new score and update the button states
      const newButtonStates = (
        team === "team1" ? buttonStatesTeam1 : buttonStatesTeam2
      ).map((button, i) => ({
        value: button.value,
        isActive: i <= index,
      }));
      setButtonStates(newButtonStates);

      const scorePost = await addScoreVtb().unwrap();
      setSelectedButton(index + 1);
    } else {
      toast.warn("You can only increment score by one");
    }
  };

  return (
    <div className="mt-6">
      <MessageDialog
        openWhoScore={openWhoScore}
        setOpenWhoScore={setOpenWhoScore}
      />
      <div className="p-2 space-y-4">
        <h2 className="text-xl">
          Team 1 Score:{" "}
          <span className="bg-gray-300 px-2 ml-4"> {selectedButtonTeam1}</span>
        </h2>
        <ButtonGroup id="2" color="orange">
          {buttonStatesTeam1 && buttonStatesTeam1.map((button, index) => (
            <Button
              className={
                button.isActive ? "bg-white text-black border" : "bg-orange-400"
              }
              key={index}
              variant={button.isActive ? "contained" : "outlined"}
              onClick={() => handleButtonClick(index, "team1")}
            >
              {button.value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="bg-orange-400 items-center ml-24 rounded-sm w-fit text-center px-2 py-3 my-6 text-3xl italic text-white">
        vs
      </div>
      <div className="p-2 space-y-4">
        <p className="text-xl">
          Team 2 Score:{" "}
          <span className="bg-gray-300 px-2 ml-4">{selectedButtonTeam2}</span>
        </p>
        <ButtonGroup id="2" color="orange">
          {buttonStatesTeam2 && buttonStatesTeam2.map((button, index) => (
            <Button
              className={
                button.isActive ? "bg-white text-black border" : "bg-orange-400"
              }
              key={index}
              onClick={() => handleButtonClick(index, "team2")}
            >
              {button.value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
