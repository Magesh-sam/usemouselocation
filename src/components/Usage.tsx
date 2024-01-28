
const Usage = () => {
  return (
    <section className='flex flex-col gap-5 '>
      <h3 className="text-lg sm:text-xl font-semibold ml-2" >Usage</h3>
    <pre className='bg-gray-700 p-3 rounded-md max-w-lg text-light mx-5 overflow-auto'><code className=''>
{`import { useMouseLocation } from 'use-mouse-location'
function App() {
  const { x, y } = useMouseLocation();
  return (
    <div>
      {x + ' ' + y}
    </div>
  )
}

export default App`}
</code></pre>


  </section>
  )
}

export default Usage