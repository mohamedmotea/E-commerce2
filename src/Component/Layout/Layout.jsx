<<<<<<< HEAD
import React from 'react'
import Style from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Offline } from "react-detect-offline";
export default function Layout() {
  return <>
        <Navbar/>

    <Offline>
        <div className="network d-flex justify-content-evenly align-items-center rounded fw-bolder">
            <div>
            <i className='fas fa-wifi text-danger display-6'></i><span className='text-danger fs-1'>!</span>
            </div>
        
        Wifi Disconnect ..

        

        </div>
        
        </Offline>
        <div className="container">

        <Outlet/>
        </div>
        <Footer/>
  </>
}
=======
import React from 'react'
import Style from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Offline } from "react-detect-offline";
export default function Layout() {
  return <>
        <Navbar/>

    <Offline>
        <div className="network d-flex justify-content-evenly align-items-center rounded fw-bolder">
            <div>
            <i className='fas fa-wifi text-danger display-6'></i><span className='text-danger fs-1'>!</span>
            </div>
        
        Wifi Disconnect ..

        

        </div>
        
        </Offline>
        <div className="container">

        <Outlet/>
        </div>
        <Footer/>
  </>
}
>>>>>>> adc6bc5 (e-commerce)
