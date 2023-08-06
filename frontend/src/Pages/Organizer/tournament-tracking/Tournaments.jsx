// import React, { useState } from 'react'


import { Button, Carousel, IconButton } from '@material-tailwind/react';


import { BiCheckCircle, BiPlay, BiPlus } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Table } from '../../../Components/Organizer/table';
import { FaBoxes } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { IoMdOptions } from 'react-icons/io';


function NewTournamentCarousel() {
    return (
        <Carousel transition={{ duration: 2 }} 
            autoplay={true} 
            autoplayDelay={5000} 
            loop={true} 
            prevArrow={false} 
            nextArrow={false} 
            navigation={false} 
            className="rounded-t-xl"
        >
          <img
            src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg"
            alt="image 1"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="https://img.freepik.com/free-photo/tennis-girl-professional-tennis-court_654080-1256.jpg?size=626&ext=jpg"
            alt="image 2"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="https://img.freepik.com/free-photo/cricket-equipments-green-grass_53876-63200.jpg?size=626&ext=jpg"
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
        </Carousel>
    );
}


const Tournaments = () => {

const cards = [
    {
        label: "New",
        value: "1",
        desc: "+1 from yesterday",
        iconBg: "bg-blue-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-500"
    },
    {
        label: "In Progress",
        value: "3",
        desc: "",
        iconBg: "bg-red-500",
        bgColor: "bg-red-50",
        textColor: "text-red-500"
    },
    {
        label: "Completed",
        value: "16/20",
        desc: "+2 from yesterday",
        iconBg: "bg-light-blue-500",
        bgColor: "bg-light-blue-50",
        textColor: "text-light-blue-500"
    },
];


  return (
    <div className='w-full h-full flex flex-col gap-5 '>

        <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
            <p className='text-2xl md:text-3xl font-bold text-blue-gray-700'>Tournaments Tracking</p>

            <div className='xl:hidden items-center justify-center'>
            <Link to={"/o/new-tournament"} className='w-full flex items-center justify-center'>
                <Button color='orange' size='sm' className='w-full flex justify-center items-center'>
                    <BiPlus className='w-8 h-8'/><p className='text-md'>   New Tournament</p>
                </Button>
            </Link>
            
            </div>
        </div>
        <div className='w-full h-full flex flex-col-reverse md:flex-row gap-5'>
            <div className='w-full  xl:w-4/5 h-full gap-4 flex flex-col xl:pr-4 border-r-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-grow'>
                {
                    cards.map((card, index) => (
                        <div key={index} className={`p-5 ${card.bgColor} rounded-lg space-y-5 shadow-md`}>
                            <div className='flex flex-row justify-between items-center'>
                                <p className={`text-md font-bold text-blue-gray-700`}>
                                {card.label}
                                </p>
                                <div className={`w-12 h-12 p-2 rounded-lg ${card.iconBg}`}>
                                    <div className='w-full h-full text-white flex justify-center items-center'>
                                        {card.label === "New" ? <HiDocumentText className='w-full h-full'/> : card.label === "In Progress" ? <BiPlay className='w-full h-full'/> : <BiCheckCircle className='w-full h-full'/> }
                                    </div>
                                </div>
                            </div>
                            <p className={`text-3xl font-bold ${card.textColor}`}>{card.value}</p>
                            <p className='text-sm text-gray-700'>{card.desc}</p>
                        </div>
                    ))
                }
                </div>
                <div>
                <div className='flex justify-between '>
                    <p className='text-xl md:text-2xl font-bold text-blue-gray-700'>Tournament details</p>
                    <div className='flex space-x-4 text-blue-gray-700'>
                        <IconButton className='cursor-pointer bg-gray-200 text-blue-gray-700 p-2' size="sm">
                            <IoMdOptions className='w-7 h-7 p-1 rounded-md' onClick={()=>{}}/>
                        </IconButton>
                        <IconButton className='cursor-pointer bg-gray-200 text-blue-gray-700 p-2' size="sm">
                            <FaBoxes className='w-7 h-7 bg-gray-200 p-1 rounded-md' onClick={()=>{}}/>
                        </IconButton>
                        <IconButton className='cursor-pointer bg-gray-200 text-blue-gray-700 p-2' size="sm">
                            <FiFilter className='w-7 h-7 bg-gray-200 p-2 rounded-md' onClick={()=>{}}/>
                        </IconButton>
                    </div>
                </div>

                <div className='scroll-smooth'>
                <Table/>
                
                </div>
                </div>

            </div>
            <div className='w-full hidden xl:w-1/5 space-y-4 h-full px-3 xl:flex flex-col items-center justify-center'>

            
                <Link to={"/o/new-tournament"} className='w-full flex flex-col justify-center items-center'>
                    <div className='w-11/12 h-40  rounded-t-lg border'>
                        <NewTournamentCarousel/>
                    </div>
                    <Button color='orange' size='md' className='flex justify-between items-center w-full'>
                        <BiPlus className='w-8 h-8'/><p className='text-md'>   New Tournament</p>
                    </Button>
                </Link>
                <div className='w-full h-full border rounded-lg bg-blue-50'>
                    image
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Tournaments