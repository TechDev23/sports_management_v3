import {useState, useEffect} from 'react';


import { 
    Stepper, 
    Step, 
    Button, 
    Typography 
} from "@material-tailwind/react";
import { Outlet, useNavigate } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

const TournamentTracking = () => {

  const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);


    // useEffect(() => {
    //     const savedActiveStep = sessionStorage.getItem("activeStep");
    //     const lastCompletedStep = parseInt(savedActiveStep, 10);
    //     if (
    //       savedActiveStep !== null &&
    //       lastCompletedStep >= 1 &&
    //       lastCompletedStep <= 5
    //     ) {
    //       setActiveStep(lastCompletedStep);
    //     } else {
    //       setActiveStep(0); // Set initial step to 0 if no saved value or invalid value found
    //     }
    //   }, []);

      // useEffect(() => {
      //   sessionStorage.setItem("activeStep", activeStep.toString());
      // }, [activeStep]);
    
      const handleNext = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        !isLastStep && setActiveStep(activeStep + 1);
        console.log(activeStep);
        navigate(`/o/new-tournament/step${activeStep+1}`);
        
      };
      const handlePrev = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        !isFirstStep && setActiveStep(activeStep - 1);
        console.log(activeStep);
        navigate(`/o/new-tournament/step${activeStep-1}`);
      };


  return (
    <div className="w-full min-h-full flex flex-col-reverse md:flex-row md:space-x-5">

    <div className="mt-4 md:mt-0  md:border-none border-t-2 bg-white px-2 min-h-full w-full md:w-full  flex flex-col items-center ">
    <p className=" text-blue-gray-700 text-3xl font-bold my-4 lg:mt-0 w-full">
        New Tournament
      </p>
    <div className="w-full py-4 px-4 lg:px-8">
      <Stepper
        activeStep={activeStep-1}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        activeLineClassName="bg-orange-400 flex flex-col"
      
      >
        <Step activeClassName="bg-orange-500 shadow-none scale-105"
        completedClassName="bg-orange-500" className="h-4 w-4"  />
        <Step activeClassName="bg-orange-500 shadow-none scale-105"
        completedClassName="bg-orange-500" className="h-4 w-4" />
        <Step activeClassName="bg-orange-500 shadow-none scale-105"
        completedClassName="bg-orange-500" className="h-4 w-4"  />
        <Step activeClassName="bg-orange-500 shadow-none scale-105"
        completedClassName="bg-orange-500" className="h-4 w-4" /> 
        <Step activeClassName="bg-orange-500 shadow-none scale-105"
        completedClassName="bg-orange-500" className="h-4 w-4" />
      </Stepper>
    </div>

      
      
      <Outlet/>
    
    
      {/* <div className="flex justify-center my-2">
      <button
        className="bg-gray-300 hover:bg-gray-500 text-gray-800 py-2 px-4 rounded-lg"
        onClick={handleAutoSave}
      >
        Auto Save All the Details
      </button>
    </div> */}
    
    
      <div className="w-full flex flex-row px-4 justify-between space-x-2">
      <Button color='orange' onClick={handlePrev} disabled={isFirstStep}>
        Prev
      </Button>
      <Button color='orange' onClick={handleNext} disabled={isLastStep}>
        Next
      </Button>
      </div>


    </div>


    </div>
  )
}

export default TournamentTracking;