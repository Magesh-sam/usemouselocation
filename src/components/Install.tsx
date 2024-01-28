import CopyIcon from "./CopyIcon"
import { copyToClipboard } from "./utils/helper"

const Install = () => {

  
  return (
      <section className='flex flex-col gap-5 '>
      <h3 className="text-lg sm:text-xl font-semibold ml-2" >How To Install</h3>
      <section className='flex flex-col gap-3 ml-5 overflow-auto'>

          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light flex items-center justify-between">npm install use-mouse-location <button className="hover:text-white" onClick={()=>copyToClipboard("npm install use-mouse-location")} aria-label="copy code"><CopyIcon/></button></code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light flex items-center justify-between">yarn add use-mouse-location <button className="hover:text-white" onClick={()=>copyToClipboard("yarn add use-mouse-location")} aria-label="copy code"><CopyIcon/></button></code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light flex items-center justify-between">pnpm add use-mouse-location <button className="hover:text-white" onClick={()=>copyToClipboard("pnpm add use-mouse-location")} aria-label="copy code"><CopyIcon/></button></code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light flex items-center justify-between">bun add use-mouse-location <button className="hover:text-white" onClick={()=>copyToClipboard("bun add use-mouse-location")} aria-label="copy code"><CopyIcon/></button></code>
      </section>
    </section>
  )
}

export default Install