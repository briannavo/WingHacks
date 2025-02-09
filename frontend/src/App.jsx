import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import TipsPage from './pages/TipsPage';
import TypesPage from './pages/TypesPage';

const App = () => {
  return (
    <BrowserRouter>

     
      <div>

        {/* navbar */}
        <nav className="bg-[#00022b] p-4 hover:bg-[#o855b1] transition duration-300">
          <ul className='flex justify-between w-full h-full'>
              <li className="hover:bg-[#4fa5d8] p-3 rounded transition duration-300 font-bold">
                <Link className='text-white' to="/">Home</Link>
              </li>

              <li className="hover:bg-[#4fa5d8] p-3 rounded transition duration-300 font-bold">
                <Link className='text-white' to="/other">Near You</Link>
              </li>

              <li className="hover:bg-[#4fa5d8] p-3 rounded text-white transition duration-300 font-bold">
                <p>SAFE HAVEN</p>
              </li>

              <li className="hover:bg-[#4fa5d8] p-3 rounded transition duration-300 font-bold">
                <Link className='text-white' to="/tips">Tips</Link>
              </li>

              <li className="hover:bg-[#4fa5d8] p-3 rounded text-white transition duration-300 font-bold">
                <Link className='text-white' to="/types">Types of Abuse</Link>
              </li>
          </ul>
        </nav>



        {/* Routes */}
        <div className="flex-grow">
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/other' element={<OtherPage />}/>
              <Route path='/tips' element={<TipsPage />}/>
              <Route path='/types' element={<TypesPage />}/>
            </Routes>
        </div>


      </div>
    
    </BrowserRouter>
  )
}

export default App

