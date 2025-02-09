import React, { useState } from 'react';
import axios from 'axios';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const OtherPage = () => {
  const [zipCode, setZipCode] = useState('');
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(false);

  const [hoveredShelter, setHoveredShelter] = useState(null)
  const [clickedShelter, setClickedShelter] = useState(null)

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  const fetchShelters = async (lat, long) => {
    try {
      setLoading(true);
      console.log('Fetching shelters with lat:', lat, 'lon:', long);
      const res = await axios.get(`http://localhost:5000/shelters`, {
          params: {lat, long}
      });

      setShelters(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("An error occurred while fetching shelters.");
    }
  }

const handleSubmit = async (e) => {
  e.preventDefault();

console.log('Submitting zipCode:', zipCode);
  
  try {
      const res = await axios.get(`http://localhost:5000/geocode`, {
        params: { zipCode }
      });

      console.log(res);
      setLat(res.data.lat);
      setLong(res.data.long);
      
      fetchShelters(res.data.lat, res.data.long);

  } catch (error) {
    if(error.response){
      setError(error.response.data.error);
    }else{
      setError("An error occurred. Try again.")
    }
  }

};

// FOR MAP (CLICKING AND HOVERING)
const handleMarkerHover = (shelter) => {
  setHoveredShelter(shelter);
}

const handleMarkerMouseOut = (shelter) => {
  if(!hoveredShelter){
    setHoveredShelter(null); //reset state only when user leaves marker
  }
  
}


return (
  <div className='p-4 '>
    <h1 className='text-2xl mb-4'>Nearby Resources by Zip Code</h1>
    <p>Find safe, accessible options for support in your area</p>

    <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center space-x-4 mb-4'>
            <input 
            type="text" 
            value={zipCode}
            onChange={handleInputChange}
            className="border border-blue-300 p-2 rounded-lg w-64 h-10 bg-[#daeaf7]"
            placeholder='Enter Zip Code'
            />

            <button
            type='submit'
            className="bg-[#010e54] border border-blue  p-2 rounded-lg w-64 h-10 text-white"
            >
            Find Nearby Resources
            </button>
      </div>
     

      {/* SEE LATITUDE AND LONGITUDE */}
      {/* {lat && long && (
        <div className='mt-4'> 
          <p className='text-lg'>lat: {lat}</p>
          <p className='text-lg'>Long: {long}</p>
        </div>
      )} */}

      {error && (
        <div className='text-red-500 mt-4'>
          <p>{error}</p>
        </div>
      )}


    </form>

    {/* SEE RAW DATA IN JSON FORMAT */}
    {/* {shelters.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl mb-4">Shelters Data (Raw JSON)</h2>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(shelters, null, 2)}
          </pre>
        </div>
      )} */}

    {/* GOOGLE MAP DISPLAY */}
    {lat && long && shelters.length > 0 && (
      <div className="mt-6 rounded-lg ">
          <h3 className='text-2xl mb-4'>Resources Near You</h3>
          


            <div className='rounded-lg'> 
            <LoadScript googleMapsApiKey= "AIzaSyD6aXaWoE-wsCBZP02O1OWT6HC3lLqLHVc">
            <GoogleMap
            id="shelters-map"
            mapContainerStyle={{
              height:'500px',
              width:'100%',
              borderRadius: '0.5rem'
            }}
            center={{lat, lng: long}}
            zoom={13}
            >
              {shelters.map((shelter) => (
                  <Marker 
                  key={shelter.place_id}
                  position={{ lat: shelter.lat, lng: shelter.lng }}
                  title={shelter.name}
                  onMouseOver={() => handleMarkerHover(shelter)}
                  onMouseOut={handleMarkerMouseOut}
                  
                  />
              ))}

              {/* INFO ON HOVER */}
              {hoveredShelter && (
                <InfoWindow
                position={{ lat: hoveredShelter.lat, lng: hoveredShelter.lng}}
                >
                    <div>
                    
                      <h4>{hoveredShelter.name}</h4>
                      <p>{hoveredShelter.address}</p>
                    </div>
                </InfoWindow>
              )}



            </GoogleMap>
          </LoadScript>
            </div>

           
      </div>
    )}

    
  </div>
)};

export default OtherPage
