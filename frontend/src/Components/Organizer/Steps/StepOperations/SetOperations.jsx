import { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function SetOperations() {
    const [startDate, setStartDate] = useState('');
    const [timeslot, setTimeslot] = useState('');
    const [groundDetails, setGroundDetails] = useState('');
    const [nameEmail, setNameEmail] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    


    return (
        <div className='flex flex-col space-y-4 content-center'>
            <div className=' p-2  w-36 '>
                <label htmlFor="start"></label>
                <input
                    type="date"
                    id="start"
                    label="start"
                    className='border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div className='p-2 w-fit'>
                <label htmlFor="timeSlots"></label>
                <input
                    type="time"
                    id="time"
                    label="Select Timeslots"
                    className='border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200 '
                    value={timeslot}
                    onChange={(e) => setTimeslot(e.target.value)}
                />
            </div>

            <div className='  p-2 w-fit'>
                <label htmlFor=""></label>
                <input
                    type="text"
                    id="groundDetails"
                    placeholder="Enter Ground Details"
                    className='border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                    value={groundDetails}
                    onChange={(e) => setGroundDetails(e.target.value)}
                />
            </div>

            <div className='p-3  flex flex-row space-x-14 items-center'>
                <div className='text-xl text-midblack font-bold'>
                    <h2>Add Responsibles</h2>
                </div>
                <div className='  p-1.5 w-52'>
                    <label htmlFor=""></label>
                    <input
                        type="text"
                        id="nameEmail"
                        placeholder="Enter name or email"
                        className='border border-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full focus:border-orange-500 focus:ring-2 focus:ring-orange-200'
                        value={nameEmail}
                        onChange={(e) => setNameEmail(e.target.value)}
                    />
                </div>
                <div className="w-fit rounded-lg">
                    <Select label="Roles" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <Option>Striker</Option>
                        <Option>Goal-Keeper</Option>
                        <Option>Midfilder</Option>
                        <Option>Defender</Option>
                    </Select>
                </div>
            </div>
            <div className='flex flex-row rounded-lg justify-center content-center items-center'>
                <Button color='orange'>Save</Button>
            </div>
        </div>
    );
}