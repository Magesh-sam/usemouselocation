import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Install from './components/Install';
import Usage from './components/Usage';
function App() {
  return (
    <>
    <Navbar/>
    <main className='flex flex-col gap-10 mt-20  min-h-screen bg-dark text-light max-w-5xl mx-auto '>
        <HeroSection />
        <Install />
        <Usage />
      </main>
      </>
  )
}

export default App