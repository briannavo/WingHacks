import React, { useState } from 'react';
import axios from 'axios';

const OtherPage = () => {
  const [zipCode, setZipCode] = useState('');
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const API_KEY = process.env.GOOGLE_API_KEY;


  try {
      const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {

        params: {
            address: zipCode,
            key: API_KEY
        },

      });

      if(res.data.status === 'OK'){
        const location = res.data.results[0].geometry.location;
        setLat(location.lat);
        setLong(location.lng);
        setError('');
      }else{
        setError("Error: Invalid Zip Code.")
      }

  } catch (error) {
    setError("An error occurred. Try again.")
  }

};

return (
  <div className='p-4'>
    <h1 className='text-2xl mb-4'>Enter Zip Code</h1>

    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={zipCode}
      onChange={handleInputChange}
      className='border border-gray-300 p-2 mb-4'
      placeholder='Enter Zip Code'
      />

      <button
      type='submit'
      className='bg-blue-500 text-white p-2'
      >
      Get Lat and Long
      </button>

      {lat && long (
        <div className='mt-4'> 
          <p className='text-lg'>lat: {lat}</p>
          <p className='text-lg'>Long: {long}</p>
        </div>
      )}

      {error && (
        <div className='text-red-500 mt-4'>
          <p>{error}</p>
        </div>
      )}


    </form>

  </div>
)};

export default OtherPage
