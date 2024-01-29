import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Outlet,Link} from "react-router-dom"
import {ConnectButton} from "@rainbow-me/rainbowkit"
import '@rainbow-me/rainbowkit/styles.css';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-slate-800 to-blue-800">
      <div className="bg-slate-800 shadow-md">
        <ul className="h-20 flex  flex-row justify-evenly items-center visited:text-white " >
         <li className="text-white">
            <Link to={""} className="text-white hover:text-cyan-300 text-xl font-bold">Home</Link>

          </li>


          <li >
            <Link to={`about`} className="text-white hover:text-cyan-300 text-xl font-bold">About</Link>

          </li>
          <li>
            <Link to={`contracts`} className="text-white hover:text-cyan-300 text-xl font-bold  bg-cyan-500 box-border p-3 border-4 rounded-lg">Launch App</Link>

          </li>
          <li>
            <ConnectButton/>

          </li>
         </ul>
   
      </div>
      <Outlet/>
     
    </div>
  );
}

export default App;
