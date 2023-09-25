import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function LogRow() {
    return ( 
    <Link href={'/logs/new/'} className ={`logRow justify-center `}>
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p> New Log</p>
        <TrashIcon className="h-5 w-5 test-grey-700 hover:text-red-700" />
    </Link>
     );
}

export default LogRow;