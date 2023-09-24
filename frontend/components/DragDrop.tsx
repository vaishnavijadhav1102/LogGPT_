'use client'

import React, { useState } from "react";
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
// import Link from 'next/navigation';
import { useRouter } from 'next/navigation';

import { FileUploader } from "react-drag-drop-files";
  
const fileTypes = ["XLS", "SVG", "PDF"];
  
function DragDrop() {
  const [file, setFile] = useState(null);
  
  const handleChange = file => {
    setFile(file);
  };

  const router = useRouter();
  const handleButtonClick = () => {
    // do something with file
    // console.log(file);
    router.push(`/logs/new`)

  }

  return (
    <div className="rounded-lg bg-[#191717] p-3 mt-20 flex flex-col items-center justify-center">
    {/* <Link href='Log.tsx'> <a><ArrowUpTrayIcon className="h-8 w-8 " /></a> </Link> */}
    {/* <form>
    <button type = "submit" onSubmit={handleButtonClick} className = "bg-[#CCC8AA] hover:opacity-50 text-black font-bold px-4 py-2 rounded disabled:cursor-not-allowed disabled:opacity-50">
        <ArrowUpTrayIcon onClick={handleButtonClick} className="h-8 w-8 " />
    </button>
    </form> */}

    <ArrowUpTrayIcon onClick={handleButtonClick} className="h-8 w-8 " />


      <h3>Or Drag and Drop Below</h3>
      <FileUploader 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes} 
      />
    </div>
      
  );
}
  
export default DragDrop;