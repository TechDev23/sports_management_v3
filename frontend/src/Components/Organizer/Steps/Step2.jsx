import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import QRCode from 'qrcode.react';
import { 
  Input, 
  Button, 
  Switch, 
  IconButton
} from '@material-tailwind/react';
import Select from "react-select";

const Step2 = () => {

  const [textToCopy, setTextToCopy] = useState("Text to be copied");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  const options = [
    {
        value: "Organizer",
        label: "Organizer"
    },
    {
        value: "Umpire",
        label: "Umpire"
    },
    {
        value: "Referee",
        label: "Referee"
    }
  ]

  const [idName, setIdName] = useState();

  return (
    <div className="w-full h-full container  mt-4 space-y-4 border-b-2">
      <div className=''>
        <p className='text-2xl lg:text-3xl font-bold text-blue-gray-700'>Add Collaborators</p>
      </div>

      <div className='w-full flex flex-col lg:flex-row gap-4 justify-between items-center '>
        <div className='w-full lg:w-1/2'>
          <Input
          value={idName}
          onChange={(e) => setIdName(e.target.value)}
          label="Enter username / email"
          className=""
          color="orange"
          name="compName"
          />
        </div>
        <div className="w-full lg:w-1/4">
            <Select
            placeholder="Select role"
            onChange={()=> {}}
            options={options}
            name="game"
            />
        </div>
        <div className=''>
          <Button 
            onClick={()=> {}}
            color='orange'
            >Send Invite
          </Button>
        </div>
      </div>
      <div className="w-full">
          <Select
          placeholder="View invite list"
          onChange={()=> {}}
          options={options}
          name="game"
          />
      </div>
      <div className='w-full flex flex-col lg:flex-row gap-4 '>
      
        <div className='w-full lg:w-1/2 lg:border-r-2 p-4 items-center justify-center  space-y-4'>
          <div>
            <p className='text-blue-gray-700 text-xl font-semibold text-center '>Share code / Invite Link</p>
          </div>
          <div className='w-full flex items-center justify-center '>
            {textToCopy && <QRCode value={textToCopy} />}
          </div>
        </div>

        <div className='w-full lg:w-1/2 p-4 space-y-4'>
          <div className='border-2 flex justify-between lg:px-8 py-2  rounded-xl'>
            <p className='text-blue-gray-700 text-sm lg:text-xl font-semibold'>Enable / disable code</p>
            
            <Switch
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full checked:bg-[#ff9800]"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
              onChange={()=>{
                // enable disable function of code
              }}
            />
          </div>
          <div className='space-y-4'>
              <p className='text-blue-gray-700 text-sm lg:text-xl font-semibold'>Share this link :</p>
              <div className='flex flex-col sm:flex-row gap-4  items-center'>
                <Input disabled 
                  value={textToCopy}
                  className="w-2/5"
                />
                <IconButton
                  onClick={handleCopyClick} 
                  className='w-full p-2 px-4' 
                  color='orange'
                >{copySuccess ? ' Copied ' : ' Copy '}</IconButton>
              </div>

          
          </div>
        </div>

      </div>
      <div className='w-full p-2 flex items-center justify-center gap-5 border-y mt-4'>
        <div className='item-center flex flex-col items-center justify-center '>
            <img
            className="h-10 w-10 rounded-full object-cover object-center border cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/10449/10449817.png"
            alt="Embed"
            onClick={()=>{}}
            
            />
          <p className='hidden lg:block text-blue-gray-700'>Embed</p>
        </div>
        <div className='item-center flex flex-col items-center justify-center '>
          <img
            className="h-10 w-10 rounded-full object-cover object-center  cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/4494/4494494.png"
            alt="Whatsapp"
            onClick={()=>{}}
          />
          <p className='hidden lg:block text-blue-gray-700'>Whatsapp</p>  
        </div>
        <div className='item-center flex flex-col items-center justify-center  cursor-pointer'>
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png"
            alt="Facebook"
            onClick={()=>{}}
          />
          <p className='hidden lg:block text-blue-gray-700'>Facebook</p>
        </div>
        <div className='item-center flex flex-col items-center justify-center  cursor-pointer'>
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://cdn-icons-png.flaticon.com/128/3670/3670211.png"
            alt="Twitter"
            onClick={()=>{}}
          />
          <p className=' hidden lg:block text-blue-gray-700'>Twitter</p>
        </div>
        <div className='item-center flex flex-col items-center justify-center cursor-pointer'>
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src="https://cdn-icons-png.flaticon.com/128/552/552486.png"
            alt="Email"
            onClick={()=>{}}
          />
          <p className='hidden lg:block text-blue-gray-700'>Email</p>
        </div>
      </div>

    </div>
  );
};

export default Step2;