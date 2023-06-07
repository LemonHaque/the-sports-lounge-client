import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)


            {/* <div className="relative h-screen">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>
                <div className="relative z-20 flex flex-col justify-center items-center text-white h-full">
                    <h3 className="text-4xl font-bold mb-4">Turn Your Summer Booring to</h3>
                    <h2 className="font-bold text-6xl text-yellow-500">Exciting Sports</h2>
                    <div className='max-w-3xl mx-auto mt-4 mb-10'>
                        <p>Let's make your summer vacation enjoyable and exciting also learn sports with proper skill with us.All champions are made when nobody is watching. Don't say, “We can't do it,” just say, “We will do it anyway.” Those who make the most of small opportunities find greater ones. Nothing is impossible.</p>
                    </div>
                    <button className="btn btn-warning btn-outline btn-lg">Explore More</button>

                </div>
            </div> */}