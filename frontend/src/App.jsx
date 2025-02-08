import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';

const App = () => {
  return (
    <BrowserRouter>

     
      <div>

        {/* navbar */}
        <nav className="bg-blue-500 p-4">
          <ul className='flex space-x-4'>
              <li>
                <Link className='text-white' to="/">Home</Link>
              </li>

              <li>
                <Link className='text-white' to="/other">Other</Link>
              </li>
          </ul>
        </nav>



        {/* Routes */}
        <div className="flex-grow">
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/other' element={<OtherPage />}/>
            </Routes>
        </div>


      </div>
    
    </BrowserRouter>
  )
}

export default App

