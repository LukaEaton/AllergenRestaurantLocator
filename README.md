# Allergy-friendly Restaurant Locator

## Purpose
This app is designed to be a tool for discovering new restaurants that have been known to accommodate for people's allergies. It can be extremely difficult to eat out since many places tend to cook with common allergens or cross-contaminate with common allergens.

The inspiration behind this app is to find nice local restaurants that I can take my Fiance out to, as over the years it has been hard to find new places to eat at.

While this will offer some very useful suggestions on where to eat, always call the restaurant ahead of time to verify that they can/will accommodate for your allergies.

## The App Itself
### Technologies Used
Front-End: React + Vite

Back-End: Express/NodeJS

### Running the App
Once downloaded, open up / change directories to the client folder and in the terminal execute **npm run dev** to host the React App on a localhost server. Then, open up a browser and navigate to **http://localhost:5173/** to view the React App.

To run the Server-side API, in a new terminal open up / change directories to the server folder and execute **npm run dev** to host the API on localhost (port 8080).

#### Notes: 
Use of external API's in this app requires API Keys from the following: Open AI API. You must get your own API keys and add them to the .env_sample file. Once completed, rename the .env_sample file to .env

Ensure the packages used for both front-end and back-end are installed when running either. Required packages can be found in the package.json file in each of the client/server directories. To install, switch into the respective client/server directory in a terminal and execute: **npm install PACKAGE_NAME**.
