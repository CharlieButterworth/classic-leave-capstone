Classic Leave Behind
For ages people have gone camping and while setting up camp had the heart drop question of "Did you grab....?" Well, campers no longer have to fear! Classic Leave Behind will ensure you have all the equipment you need! 

Getting Started
The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Download and install Node.js, if not already installed on your local machine.
Install React with the following terminal command:
npm install --save react
Install ReactDOM with the following terminal command:
npm install --save react-dom
Install React Bootstrap with the following terminal command:
npm install react-bootstrap bootstrap
Install json-server with the following terminal command:
npm install -g json-server
Get an API key for The Strain API. Do NOT share this API key with anyone else.

Clone my repository to your local machine.

Navigate to the project folder. In the src directory, you will see a file named .Settings.js (note the dot at the beginning).

Copy that file with cp .Settings.js Settings.js. The Settings.js file is already in the .gitignore file, so it won't ever be tracked by git. This will prevent you from accidentally sharing your API key with other people.

Copy the API key that you registered into it's appropriate place in the Settings.js file.

Usage
A step by step series of examples that tell you how to get a development env running

In your terminal, navigate to the project directory.
Example:

cd /Users/charlie/workspace/classic-leave-capstone
From the root of this directory, run the following terminal command in order to start up React.
npm start
Open a new terminal tab and navigate to the api directory.
Example:

cd /Users/charlie/workspace/classic-leave-capstone/src/components/api
Run the following terminal command in order to start up your json-server.
Example:

json-server -p 8088 -w database.json
Open your web browser of choice and navigate to http://localhost:3000/

You will be presented with a login/registration page if this is your first time using the application. Register an account (NOTE: USE DUMMY DATA! Do NOT use your real email or password).

As a new user you will need to add gear in the 'gear' page and then enjoy all your camping trips!