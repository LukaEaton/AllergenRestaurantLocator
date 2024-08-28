// Importing dependencies
import express from 'express';
import { config } from 'dotenv';
import { OpenAI } from 'openai';
import cors from 'cors';

// Load environment variables
config();

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Creating new express app
const app = express();
// Body parsing
app.use(express.json())

const corsOptions = {
    origin : 'http://localhost:5173'
}
app.use(cors(corsOptions));

// Google Maps API Key
// Geocoding API to get coordinates from address: https://developers.google.com/maps/documentation/geocoding
// potentially use the pollen API
const maps_api_key = process.env.MAPS_API_KEY;

const prompt = "give a JSON array of the name, address, phone number, and url of allergy-friendly restaurants near ";

app.get("/api", (req, res) => {
    res.json({test: ["this","is","a","test"]});
});


//curl -X POST -H "Content-type:application/json" -d "{\"location\":\"Philadelphia, PA\"}" "localhost:8080/search" 
app.post('/search/:location', async (req, res) => {
    console.log(prompt + req.params.location);
    openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role : "user",
                content : prompt + req.params.location + " within a 25 mile radius"
            }
        ]
    }).then( data => {
        res.json(data.choices[0].message.content);
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
})