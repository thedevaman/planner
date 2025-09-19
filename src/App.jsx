import React from "react";
import 'animate.css';
import { Badge } from "antd";

const App  = () =>{

  return(
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-white h-[60px] fixed top-0 left-0 w-full">

      </nav>
      <section className="fixed top-[60px] left-0 h-[calc(100%-120px)] w-full overflow-x-auto overflow-y-visible grid grid-cols-3 gap-8 p-8">
      <div className="h-full min-h-0">
        <Badge.Ribbon text="Highest" 
        className="!bg-gradient-to-b !from-rose-600 !via-pink-600 !to-rose-500 !font-medium" />

          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto">
            

          </div>
      </div>

       <div className="h-full min-h-0">
        <Badge.Ribbon text="Medium" 
        className="!bg-gradient-to-b !from-indigo-600 !via-blue-600 !to-indigo-500 !font-medium" />

          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto">
            

          </div>
      </div>

       <div className="h-full min-h-0">
        <Badge.Ribbon text="Lowest" 
        className="!bg-gradient-to-b !from-amber-600 !via-orange-600 !to-amber-500 !font-medium" />

          <div className="bg-white rounded-lg h-full min-h-0 overflow-auto">
            

          </div>
      </div>
       
       
      </section>

      <footer className="bg-white h-[60px] fixed bottom-0 left-0 w-full">

      </footer>
    </div>
  )

}

export default App