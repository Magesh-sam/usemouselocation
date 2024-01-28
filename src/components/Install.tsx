
const Install = () => {
  return (
      <section className='flex flex-col gap-5 '>
      <h3 className="text-lg sm:text-xl font-semibold ml-2" >How To Install</h3>
      <section className='flex flex-col gap-3 ml-5 overflow-auto'>

          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light">npm install use-mouse-location</code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light">yarn add use-mouse-location</code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light">pnpm add use-mouse-location</code>
          <code className=" overflow-auto whitespace-nowrap mr-5 bg-gray-700 p-3 rounded-md max-w-md text-light">bun add use-mouse-location</code>
      </section>
    </section>
  )
}

export default Install