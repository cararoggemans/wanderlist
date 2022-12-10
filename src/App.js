import WanderlistLogoV1 from "./assets/svg/wanderlist-logo-v1.svg"
import ImgGlobe from "./assets/img/globe-start.jpg"

function App() {
  return (
    <>
    <div className="section__top p-4">
    <img className='rounded-2xl' src={ImgGlobe} alt='Globe start'/>
    </div>
    <div className='logo mx-auto flex flex-wrap items-center justify-center mt-8'>
      <img className='h-12 w-auto' src={WanderlistLogoV1} alt='Wanderlist Logo' />
      <h1 className='text-xl text-xl pl-2 font-semibold'>Wanderlist</h1>
    </div>
    </>
  )
}

export default App;
