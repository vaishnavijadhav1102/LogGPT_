import Log from "../../../components/Log";
import LogInput from "../../../components/LogInput";

function LogPage() {
    return ( 
        
    <div className="flex flex-col h-screen overflow-hidden">

        {/* chat  */}
        <Log />
        {/* chat input */}
        <LogInput />

    </div> );
}

export default LogPage;