import React, { useState } from 'react'
import { BiCheck, BiCheckCircle, BiPlay } from 'react-icons/bi';
import { HiDocumentText } from 'react-icons/hi';

const Tournaments = () => {

const cards = [
    {
        label: "New",
        value: "1",
        desc: "+1 from yesterday",
        icon: <HiDocumentText/>,
        iconBg: "bg-blue-500",
        bgColor: "bg-blue-100",
        textColor: "text-blue-500"
    },
    {
        label: "In Progress",
        value: "3",
        desc: "",
        icon: "",
        iconBg: "bg-red-500",
        bgColor: "bg-red-100",
        textColor: "text-red-500"
    },
    {
        label: "Completed",
        value: "16/20",
        desc: "+2 from yesterday",
        icon: "",
        iconBg: "bg-light-blue-500",
        bgColor: "bg-light-blue-100",
        textColor: "text-light-blue-500"
    },
];


  return (
    <div className='w-full h-full flex flex-col space-x-5 space-y-5 border-2 border-red-500'>
        <div>
            <p className='text-3xl font-bold '>Tournaments Tracking</p>
        </div>
        <div className='w-full h-full flex flex-row'>
            <div className='w-4/5  h-full border-2 border-blue-400 px-5'>
                <div className='grid grid-cols-3 gap-5 '>
                {
                    cards.map((card, index) => (
                        <div key={index} className={`p-5 ${card.bgColor} rounded-lg space-y-5`}>
                            <div className='flex flex-row justify-between items-center'>
                                <p className={`text-md`}>
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
            </div>
            <div className='w-1/5 h-full border-2 border-blue-400'>
                right side
                
            </div>
        </div>
    </div>
  )
}

export default Tournaments