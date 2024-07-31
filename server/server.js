const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config();

const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');
const screen = {
    width: 640,
    heigh: 480
}

const url = 'https://www.allergyeats.com/';

// Google Maps API Key
// Geocoding API to get coordinates from address: https://developers.google.com/maps/documentation/geocoding
// potentially use the pollen API
const maps_api_key = process.env.MAPS_API_KEY;

let driver = new Builder()
    .forBrowser('chrome')
    .build();

app.get("/api", (req, res) => {
    res.json({test: ["this","is","a","test"]});
});

app.post('/search', (req, res) => {
    // console.log(req.body);
    driver.get(url).then( () => {
        driver.findElements(By.xpath('//*[@id="home-search-criteria"]/div/form/div[1]/fieldset/div/label/input'))
        .then( arr => {
            for(let i = 0; i < arr.length; i++){
                arr[i].getAttribute('value')
                .then( val => {
                    console.log(val);
                });
                // arr[i].click()
                // .then( () => {
                //     console.log('clicked');
                // });
            }
        });
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
})