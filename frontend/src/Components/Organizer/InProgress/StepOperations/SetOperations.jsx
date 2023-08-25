import { useState } from "react";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useAddGrndUmpireMutation } from "../../../../redux/api/organizer/orgApi";
import { useParams } from "react-router-dom";
import {
  useGetUserByEmailQuery,
  useLazyGetUserByEmailQuery,
} from "../../../../redux/api/General/generalApi";
import { toast } from "react-toastify";

const UmpireInput = ({ onAddUmpire, game_id }) => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [gameId, setGameId] = useState("");
  const [error, setError] = useState("");

  const handleUserIdChange = (e) => {
    setUserEmail(e.target.value);
    setGameId(game_id);
    setError("");
  };

  const [
    getUserWithMail,
    {
      data,
      error: fetchedUserError,
      isError,
      isLoading: fetchingUserByMail,
      isFetching,
    },
  ] = useLazyGetUserByEmailQuery();

  const handleAddUmpire = async () => {
    const res = await getUserWithMail(userEmail);

    console.log(res?.data?.data?.id)
    if (res?.data?.status === "error" && res?.data?.status_code === 400)
      toast.error(res?.data.message);
    if (res?.data?.status === "success" && res?.data?.status_code === 200)
      toast.success("User with email found");

    // check for user email id exists in organization
    onAddUmpire({ user_id: res?.data?.data.id, game_id });
    setUserId("");
    setGameId("");
    setError("");
  };

  const disable = !userEmail;

  return (
    <div className="mb-4 border shadow-sm rounded-lg w-full">
      <div className="flex flex-col gap-4 p-2">
        <h2 className="text-xl  mb-2">Add Umpire</h2>
        <input
          type="text"
          placeholder="User ID (Email)"
          className="p-2 form-input w-full border rounded-lg outline-1 outline-orange-400"
          value={userEmail}
          onChange={handleUserIdChange}
        />
        <div>
          <Button
            color="orange"
            className={`${disable && "cursor-not-allowed opacity-60"}`}
            onClick={handleAddUmpire}
            disabled={disable}
          >
            {fetchingUserByMail ? <Spinner color="amber" /> : "Check for user"}
          </Button>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const GroundInput = ({ onAddGround, game_id }) => {
  const [gameId, setGameId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setGameId(game_id);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAddGround = () => {
    onAddGround({ name, game_id: game_id, location });
    setName("");
    setGameId("");
    setLocation("");
  };

  const disable = !name || !location;

  return (
    <div className="w-full flex flex-col mb-4 border rounded-lg shadow-sm">
      <div className="flex flex-col gap-4 p-2">
        <h2 className="text-xl mb-2">Add Ground</h2>
        <input
          type="text"
          placeholder="Name"
          className="p-2 form-input w-full border rounded-lg outline-1 outline-orange-400"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Location"
          className="p-2 form-input w-full border rounded-lg outline-1 outline-orange-400"
          value={location}
          onChange={handleLocationChange}
        />
        <div>
          <Button
            color="orange"
            className={`${disable && "cursor-not-allowed opacity-60"}`}
            onClick={handleAddGround}
            disabled={disable}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function SetOperations() {
  const params = useParams();
  const [umpires, setUmpires] = useState([]);
  const [grounds, setGrounds] = useState([]);

  const handleAddUmpire = (umpire) => {
    setUmpires([...umpires, umpire]);
  };

  const handleAddGround = (ground) => {
    setGrounds([...grounds, ground]);
  };

  const handleRemoveUmpire = (index) => {
    const updatedUmpires = umpires.filter((_, i) => i !== index);
    setUmpires(updatedUmpires);
  };

  const handleRemoveGround = (index) => {
    const updatedGrounds = grounds.filter((_, i) => i !== index);
    setGrounds(updatedGrounds);
  };

  const [
    addGrndUmpire,
    { isLoading: settingUmpire, isSuccess: isUpmireGrndAdded },
  ] = useAddGrndUmpireMutation();
  const handleSetOperations = async () => {
    const data = {
      umpires,
      grounds,
      tournament_id: params.tourId,
      game_id: params.tour_game_id,
    };

    // Send data to backend using an API call
    console.log("Sending data to backend:", data);
    const response = await addGrndUmpire(data).unwrap();
    console.log("after adding umpire and ground", response);
    if(response?.status === "success" && response?.status_code === 202){
      toast.success(response?.message)
    }else{
      toast.success("error while adding ground umpire")
    }
  };

  return (
    <div className="mt-4 w-full h-full  font-poppins">
      <div className="w-full flex flex-col lg:flex-row gap-4 justify-between">
        <UmpireInput
          onAddUmpire={handleAddUmpire}
          game_id={params.tour_game_id}
        />
        <GroundInput
          onAddGround={handleAddGround}
          game_id={params.tour_game_id}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className=" w-full border-r p-2">
          {umpires.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold py-2 border-b-2 ">
                Added Umpires
              </h2>
              {umpires.map((umpire, index) => (
                <p
                  key={index}
                  className="border shadow-sm p-2 rounded-lg flex justify-between items-center"
                >
                  {umpire.user_id} - {umpire.game_id}
                  <button
                    className="bg-red-50 text-red-500 p-2 rounded-lg"
                    onClick={() => handleRemoveUmpire(index)}
                  >
                    Remove
                  </button>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className=" w-full  p-2">
          {grounds.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold py-2 border-b-2">
                Added Grounds
              </h2>
              {grounds.map((ground, index) => (
                <p
                  key={index}
                  className="border shadow-sm p-2 rounded-lg flex justify-between items-center"
                >
                  {ground.name} - {ground.game_id} - {ground.location}
                  <button
                    className="bg-red-50 text-red-500 p-2 rounded-lg"
                    onClick={() => handleRemoveGround(index)}
                  >
                    Remove
                  </button>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <Button
          color="orange"
          className="btn btn-primary"
          onClick={handleSetOperations}
        >
          Set Operations
        </Button>
      </div>
    </div>
  );
}
