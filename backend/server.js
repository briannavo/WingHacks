const express  = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'], 
}));


//geocoding endpoint (get request)
app.get("/geocode", async (req, res) => {
    console.log('Received request');
    const {zipCode} = req.query;
    console.log('Received zipCode:', zipCode);

    const API_KEY = process.env.GOOGLE_API_KEY;

    console.log("KEY: ", API_KEY);



    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {

            params: {
                address: zipCode,
                key: API_KEY
            },
    
          });

          console.log('Google API response:', response.data);

          if(response.data.status === 'OK'){
            const location = response.data.results[0].geometry.location;
            res.send({
                lat: location.lat,
                long: location.lng
            })
            // return express.response({
            //     lat: location.lat,
            //     long: location.lng
            // });
          }else{
            return response.status(400).json({ error: "Invalid Zip Code" });
          }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred. Try again." });
    }
});


//endpoint for finding nearby shelters
app.get("/shelters", async (req, res) => {
    console.log('Received request');
    const { lat, long } = req.query;
    console.log('Received lat:', lat);
    console.log('Received long:', long);

    const API_KEY = process.env.GOOGLE_API_KEY;

    console.log("KEY: ", API_KEY);

    console.log("STARTING TEST -----------------------")

    const keywords = ['domestic violence shelter', "womens shelter", "safe house"];
    const keywordString = keywords.join('+');

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                location: `${lat},${long}`,
                radius: 5000,
                keyword: keywordString,
                key: API_KEY
            }
        });
        // console.log('Google Places API response:', response.data);

        console.log("Testing:", response.data.results)

        console.log("Inspect geometry", response.data.results[0].geometry.location)

        const shelters = response.data.results.map((shelter) => ({
            name: shelter.name,
            place_id: shelter.place_id,
            lat: shelter.geometry.location.lat,
            lng: shelter.geometry.location.lng,
            address: shelter.vicinity,
            rating: shelter.rating ?? 0,
            icon: shelter.icon,
            ratings: shelter.user_rating_total
        }))

        console.log("Go here:", shelters)

        return res.status(200).json({ data: shelters });

        // if(response.data.status === "ok") {
            
        // }else{
        //     console.log("NDSHFKJHKJASD")
        //     return res.status(400).json({ error: "No shelters found" });
        // }

    } catch (error) { 
        
        return res.status(500).json({ error: "An error occurred. Try again." });
    }


});``

app.listen(PORT, () => {
    console.log(`Server Running On port ${PORT}`)
});