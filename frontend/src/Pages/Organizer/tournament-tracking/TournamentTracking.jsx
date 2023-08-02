import {useState, useEffect} from 'react';


import { 
    Stepper, 
    Step, 
    Button, 
    Typography 
} from "@material-tailwind/react";

import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import { 
    Step1, 
    Step2, 
    Step3, 
    Step4, 
    Step5 
} from '../../../Components/Organizer/Steps'

// import { useNavigate } from "react-router-dom";

const TournamentTracking = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    useEffect(() => {
        const savedActiveStep = sessionStorage.getItem("activeStep");
        const lastCompletedStep = parseInt(savedActiveStep, 10);
        if (
          savedActiveStep !== null &&
          lastCompletedStep >= 0 &&
          lastCompletedStep <= 4
        ) {
          setActiveStep(lastCompletedStep);
        } else {
          setActiveStep(0); // Set initial step to 0 if no saved value or invalid value found
        }
      }, []);

      useEffect(() => {
        sessionStorage.setItem("activeStep", activeStep.toString());
      }, [activeStep]);
    
      const handleNext = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return !isLastStep && setActiveStep((cur) => cur + 1);
      };
      const handlePrev = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return !isFirstStep && setActiveStep((cur) => cur - 1);
      };
    
      const renderStepContent = () => {
        switch (activeStep) {
          case 0:
            return <Step1 />;
          case 1:
            return <Step2 />;
          case 2:
            return <Step3 />;
          case 3:
            return <Step4 />;
          case 4:
            return <Step5 />;
          default:
            return null;
        }
      };

      
  const handleAutoSave = () => {
    console.log('Auto-Save triggered!');
    // console.log('Organization Name:', organizationName);
    // console.log('Organization Description:', organizationDescription);
    // console.log('Tournament Name:', tournamentName);
    // console.log('Tournament Description:', tournamentDescription);
    // console.log('Start Date:', startDate);
    // console.log('End Date:', endDate);
  };


  return (
    <div className="w-full min-h-full flex flex-col-reverse md:flex-row md:space-x-5">

    <div className="mt-4 md:mt-0 md:border-none border-t-2 bg-white min-h-full w-full md:w-full  flex flex-col items-center justify-between">
    
      {renderStepContent()}
    
    
      <div className="flex justify-center my-4">
      <button
        className="bg-gray-300 hover:bg-gray-500 text-gray-800 py-2 px-4 rounded-lg"
        onClick={handleAutoSave}
      >
        Auto Save All the Details
      </button>
    </div>
      <div className="w-full flex flex-row px-4 justify-between space-x-2">
        <Button className="bg-orange-500 hover:bg-orange-700 text-white w-[150px] py-2 px-4 rounded-lg" onClick={handlePrev} color="orange" disabled={isFirstStep}>
          Prev
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-700 text-white w-[150px] py-2 px-4 rounded-lg" onClick={handleNext} color="orange" disabled={isLastStep}>
          Proceed
        </Button>
      </div>
    
    
    </div>

    




      <div className=" h-5/5 w-full md:w-1/4 xl:w-1/5 items-center flex-grow  item-center justify-center sticky">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className={`w-full md:w-full  md:h-[500px] flex flex-row md:flex-col space-y-0 md:space-y-2`}
          activeLineClassName="bg-orange-400 flex flex-col"
        >
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(0)}
          >
            <UserIcon className="h-5 w-5" />
            
            <div className="absolute -bottom-16  text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 0 ? "orange" : "gray"}
                className="text-center text-xs hidden md:block"
              >
                Organisational Details
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(1)}
          >
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-6 text-center ">
              <Typography
                variant="paragraph"
                color={activeStep === 1 ? "orange" : "gray"}
                className="text-center text-xs hidden md:block"
              >
                Collaborators
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(2)}
          >
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-6 w-24 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 2 ? "orange" : "gray"}
                className="text-center text-xs hidden md:block"
              >
                Game Details
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(3)}
          >
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-6 w-26 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 3 ? "orange" : "gray"}
                className="text-center text-xs hidden md:block"
              >
                Payment
              </Typography>
            </div>
          </Step>
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(4)}
          >
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-10 w-28 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 4 ? "orange" : "gray"}
                className="text-center text-xs hidden md:block"
              >
                Participant Invite Code
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

    </div>
  )
}

export default TournamentTracking;