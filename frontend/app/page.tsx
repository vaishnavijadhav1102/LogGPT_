import { BoltIcon, ExclamationTriangleIcon, SunIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import DragDrop from '@/components/DragDrop';

const fileTypes = ["JPG", "PNG", "GIF"];



export default function Home() {
  return (
    <div className = " flex flex-col items-center justify-center h-screen px-2 text-white">
      {/* <img src="C:\Users\Amee Madhani\logGPT\loggpt\images\Untitled-design.gif" /> */}
      {/* <Image
        src = "https://tenor.com/view/logo-gif-10351248064220881848"
        width = {300}
        height = {300}
        alt = "logo"
        /> */}
        



      
      <h1 className="text-5xl opacity-20 mb-20">logGPT</h1>
      <div className = "flex space-x-2 text-center">

        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/* <SunIcon className="h-8 w-8 text-blue-500" /> */}
            <SunIcon className="h-8 w-8" />
            {/* icon-1*/}
            <h2>Our Innovation</h2>
          </div>
          <div className = "space-y-2">
            <p className = "infoText">Security and privacy</p>
            <p className = "infoText">Adaptive learning</p>
            <p className = "infoText">Log aggregation</p>
          </div>
        </div>
        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/* <SunIcon className="h-8 w-8 text-blue-500" /> */}
            <BoltIcon className="h-8 w-8" />
            {/* icon-1*/}
            <h2>Capabilities / Use Cases</h2>
          </div>
          <div className = "space-y-2">
            <p className = "infoText">Resource Scalability and Planning </p>
            <p className = "infoText">Commercial Use</p>
            <p className = "infoText">Energy and Environmental Monitoring</p>
          </div>
        </div>


        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/* <SunIcon className="h-8 w-8 text-blue-500" /> */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            {/* icon-1*/}
            <h2>Limitations</h2>
          </div>
          <div className = "space-y-2">
            <p className = "infoText">Requires sufficient GPU</p>
            <p className = "infoText">Requires sufficient memory</p>
            <p className = "infoText">Requires sufficient storage and other hardware resources</p>
          </div>
        </div>
      </div>
      <div>
        <DragDrop />
        
      </div>

    </div>
  )
}
