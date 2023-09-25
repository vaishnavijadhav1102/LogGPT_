'use client'
import {
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineLogOut,
  AiOutlineBulb,
  AiOutlineLogout,

} from "react-icons/ai";

import { BiLinkExternal } from "react-icons/bi";

//session and sign in issues
// import{ useSession } from "next-auth/react";
//sign out and image functionality not applied yet - 1;17;18
//left firebase too

import Newlog from "./Newlog";

function SideBar() {
    return ( 
        <div className = "p-2 flex flex-col h-screen bg-[#191717]">
            <div className = "flex-1">
                <div>
                {/* new log chat */}
                <Newlog />

                    <div> 
                    {/* model selection */}
                    </div>

                    {/* map through the chat rows */}

                </div>

            </div>
            <a href = "/"className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
            <AiOutlineLogout className="h-4 w-4" />
              Back to Home
            </a>
            <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <AiOutlineBulb className="h-4 w-4" />
              Light Mode
            </a>

            <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <BiLinkExternal className="h-4 w-4" />
              FAQs and Upgrades
            </a>
         

        </div>
     );
}

export default SideBar;


