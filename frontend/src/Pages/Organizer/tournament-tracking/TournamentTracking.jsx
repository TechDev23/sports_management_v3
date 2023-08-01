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


  return (
    <div className="w-full min-h-full flex flex-row ">

    <div className="min-h-full w-4/5  flex flex-col items-center justify-between border-2 border-blue-400">
    
    {renderStepContent()}
    
    
    <div className="w-full flex flex-row px-4 justify-between">
        <Button variant="outlined" onClick={handlePrev} color="orange" disabled={isFirstStep}>
          Prev
        </Button>
        <Button variant="outlined" onClick={handleNext} color="orange" disabled={isLastStep}>
          Next
        </Button>
      </div>
    
    
    </div>




      <div className=" h-3/4 w-44 flex-grow">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          // className={`h-[500px] flex flex-col space-y-2`}
          // activeLineClassName="bg-orange-400 flex flex-col"
          className='flex flex-col space-y-12'
        >
          <Step
            activeClassName="bg-orange-500 shadow-none scale-105"
            completedClassName="bg-orange-500"
            onClick={() => setActiveStep(0)}
          >
            <UserIcon className="h-5 w-5" />
            
            <div className="absolute -bottom-10 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 0 ? "orange" : "gray"}
                className="text-center text-xs"
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
                className="text-center text-xs"
              >
                Invite
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
                className="text-center text-xs"
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
                className="text-center text-xs"
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
            <div className="absolute -bottom-6 w-28 text-center">
              <Typography
                variant="paragraph"
                color={activeStep === 4 ? "orange" : "gray"}
                className="text-center text-xs"
              >
                Go Live
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

    </div>
  )
}

export default TournamentTracking;