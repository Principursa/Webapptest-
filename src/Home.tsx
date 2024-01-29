import React from 'react'
import Dog from "./assets/dog.jpg"

function Home() {
  return (
    
 <div className="w-screen columns-3 mt-10">

    <img src={Dog} alt="dog" className=""/>
    <div>

        <p className="text-6xl m-7 font-bold">Welcome to PensionFI</p>
           <p> PensionFI is the first Blockchain based Pension system. Primarily made for a chilean market. </p>
           <p> Enjoy Full transparency for your pensions and finances!</p>
</div>
      </div>
 )
}

export default Home