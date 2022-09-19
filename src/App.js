
import './index.css';

import image from'./house.jpg';

import logo from './airbnb-brands.svg';

import{ReactComponent as ReactLogo} from './airbnb-brands.svg'

function App() {

const backgroundImageStyle = {
  backgroundImage: `url("${image}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}


  return (
    <div className="App">
      <div className=" text-white "
      style={backgroundImageStyle}>
        
        <div className=" bg-gradient-to-r from-black  px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            
            <div className="w-12">
              <ReactLogo className="fill-white" />
            </div>

            
          <h2 className="text-xl uppercase font-bold">Become a host</h2>

          <h1 className="text-7xl font-extrabold">
            Host your own space, share your own world
          </h1>

          <p className="">The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guests and earn extra income on a schedule that wors for you</p>

          <button className="bg-red-500 py-3 px-6 text-lg rounded-md w-40 bg-gradient-to-r from-rose-400 to from-rose-900">Try hosting</button>
        </div>
      
        
        </div>

      </div>

      <div className="px-8 py-16">

        <div className="max-w-md mb-16">
          <h2 className="text-5xl mb-8 ">Your next chapter made by Host<span>ing</span></h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-800">

         <div className="">
          <h3 className="text-2xl font-medium mb-2">Share what you love</h3>

          <p className="">
            Indulge your love for design when you host Airbnb guests,
            who are drawn to authentic travel in creatively curated spaces.
          </p>


         </div>
         
          <div className="">
            <h3 className="text-2xl font-medium mb-2" >Host how you want to</h3>

          <p className="">
            Airbnb gives you the tools to support and earn extra income, be your own boss
            and invest in yourpassions.
          </p>
          </div>
          
          

        </div>


      </div>


    </div>
  );
}

export default App;
