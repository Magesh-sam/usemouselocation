import { useMouseLocation } from "use-mouse-location";

const HeroSection = () => {
    const { x, y } = useMouseLocation();

    return (
      <>
    <h1  className='text-2xl sm:text-4xl font-bold text-center'>useMouseLocation( );</h1>
    <h2 className='text-xl sm:text-3xl font-semibold text-center text-gray-400'>React Hook to get the cursor location</h2>
    <section className='flex gap-3 justify-center text-2xl'>
    <p>x: {x}</p> 
    <p>y: {y}</p> 
        </section>
       
        <a className="text-center px-3 py-2 bg-light text-dark rounded-md max-w-fit mx-auto hover:bg-gray-200" href="https://www.npmjs.com/package/use-mouse-location" target="_blank">View NPM Package</a>
      </>
  )
}

export default HeroSection