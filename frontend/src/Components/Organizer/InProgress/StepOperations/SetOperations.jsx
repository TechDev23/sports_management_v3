import { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


export default function SetOperations() {


    const UmpireInput = ({ onAddUmpire }) => {
        const [userId, setUserId] = useState('');
        const [gameId, setGameId] = useState('');
        const [error, setError] = useState('');
      
        const handleUserIdChange = (e) => {
          setUserId(e.target.value);
          setError('');
        };
      
      
        const handleAddUmpire = () => {
          if (!userId.includes('@')) {
            setError('Please enter a valid email as User ID');
            return;
          }
      
          onAddUmpire({ user_id: userId, game_id: gameId });
          setUserId('');
          setGameId('');
          setError('');
        };

        const disable = !userId;
      
        return (
          <div className="mb-4 border shadow-sm rounded-lg w-full">
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-xl  mb-2">Add Umpire</h2>
              <input
                type="text"
                placeholder="User ID (Email)"
                className="p-2 form-input w-full border rounded-lg outline-1 outline-orange-400"
                value={userId}
                onChange={handleUserIdChange}
              />
              <div>
              <Button
                color='orange'
                className={`${disable && "cursor-not-allowed opacity-60"}`}
                onClick={handleAddUmpire}
                disabled={disable}
                >
                Add
              </Button>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      };

    const GroundInput = ({ onAddGround }) => {
        const [gameId, setGameId] = useState('');
        const [name, setName] = useState('');
        const [location, setLocation] = useState('');
      
        const handleNameChange = (e) => {
          setName(e.target.value);
        };
      
      
        const handleLocationChange = (e) => {
          setLocation(e.target.value);
        };
      
        const handleAddGround = () => {
          onAddGround({ name, game_id: gameId, location });
          setName('');
          setGameId('');
          setLocation('');
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
                color='orange'
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
    
      const handleSetOperations = () => {
        const data = {
          umpires,
          grounds,
        };
    
        // Send data to backend using an API call
        console.log('Sending data to backend:', data);
      };
    
      return (
        <div className="mt-4 w-full h-full  font-poppins">

            <div className='w-full flex flex-col lg:flex-row gap-4 justify-between'>
                <UmpireInput onAddUmpire={handleAddUmpire} />
                <GroundInput onAddGround={handleAddGround} />
            
            </div>
            
            <div className='flex flex-col lg:flex-row gap-4'>
            
            <div className=" w-full border-r p-2">
            {umpires.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold py-2 border-b-2 ">Added Umpires</h2>
                    {umpires.map((umpire, index) => (
                      <p key={index} className="border shadow-sm p-2 rounded-lg flex justify-between items-center">
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
              <h2 className="text-xl font-semibold py-2 border-b-2">Added Grounds</h2>
                {grounds.map((ground, index) => (
                  <p key={index} className="border shadow-sm p-2 rounded-lg flex justify-between items-center">
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
              color='orange'
              className="btn btn-primary"
              onClick={handleSetOperations}
            >
              Set Operations
            </Button>
          </div>
        </div>
    );
}