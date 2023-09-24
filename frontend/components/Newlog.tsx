import { PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import * as React from 'react';


//left off some firebase thing here too

function Newlog() {
    const router = useRouter();

    const createNewChat = async () => {
        router.push(`/`)

    }
    return ( 
        <div onClick={createNewChat} className = "border-gray-700 border chatRow">
            <PlusIcon className = "h-4 w-4" />
            


            <p>New log Analysis</p>

        </div>

    );
}

export default Newlog;