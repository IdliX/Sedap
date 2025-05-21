import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";

export default function GuestLayout(){
    return(
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
          <div id="layout-wrapper" className="flex flex-col flex-1">
              <Navbar/>
              <div id="main-content" className="flex-1">
                    <Header2/>

                    <Outlet/>
                    <Footer2/>
                
              </div>
          </div>
        </div>
    )
}