# GrowTime Project Plan

## CONCEPT

**PROBLEM:**	various and disorganized sources of information on when to plant, fertilize, spray, prune, and otherwise care for outdoor garden plants

**SOLUTION:**	collects and displays information in a user-friendly calendar, programmed to send text reminders

**TARGET USER:**	amateur gardeners in planting zones 4-6


## FEATURES

**MVP:**
- login page to track sessions/create customizable experience
- master calendar that displays gardening tasks by month
- list of user’s current plants & optional plants to add to their collection
- plant profile pages, displaying stats/task dates
- edit feature on plant profiles to allow for changes
- form to input a new plant in the database
- automated text reminder for each task

**Additions:**
- limit access for edit feature & new plant form to admins
- link to instructional video for each task (included in text)
- printable calendar
- drag-and-drop calendar with customizable events
- optional email reminders
- extended plant database (trees & shrubs, extended zones, etc.)
- extended plant profile (growing information, gardening tips, etc.)

## VIEWS 

Login:

<img src="./Screen Shot 2020-06-22 at 11.22.42 PM.png">


Register:	

<img src="./Screen Shot 2020-06-22 at 11.23.05 PM.png">


Calendar:

<img src="./Screen Shot 2020-06-22 at 11.23.18 PM.png">


Plant List: 

<img src="./Screen Shot 2020-06-22 at 11.23.28 PM.png">


Plant Profile:

<img src="./Screen Shot 2020-06-22 at 11.23.41 PM.png">


Add a Plant: 

<img src="./Screen Shot 2020-06-22 at 11.23.53 PM.png">


## ROUTES
- Login: ‘/’
- Calendar: ‘/calendar’
- Plant List: ‘/plant-list’
- Plant Profile: ‘/plant-profile-1’ (etc.)
- Add a Plant: ‘/add-a-plant’

## DATABASE SCHEMA

<img src="./Screen Shot 2020-06-22 at 11.24.10 PM.png">


## ENDPOINTS & CONTROLLERS

authCtrl:
- app.post (‘/auth/register’, authCtrl.***register***)
    - input collected on body & saved to the following SQL tables:
        - growtime_users: username, password – generates id
        - growtime_profiles: first_name, last_name, email, phone, city, state

- app.post (‘/auth/login’, authCtrl.***login***)
    - input collected on body and authenticated against SQL table:
        - growtime_users: username, password

plantCtrl:

- app.get (‘/api/plants’, plantCtrl.***getPlants***)
    - query by common plant name, else return all
    - map over collection and return from SQL:
        - plants: plant_pic, common_name

- app.get (‘/api/plant/:plantid’, plantCtrl.***getPlant***)
    - locate plant by plantid param
    - map over collection and return profile cards from SQL:
        - plants: common_name, scientific_name, plant_pic, description, hardiness, exposure
        - plant_dates: planting_date, fertilize_date_1, fertilize_date_2, fertilize_date_3, bloom_date, treatment_date_1, treatment_type_1, treatment_date_2, treatment_type_2, spent_date, prune_date

- app.post (‘/api/newplant’, plantCtrl.***newPlant***)
    - input collected on body & saved to the following SQL tables:
        - plants: common_name, scientific_name, plant_pic, description, hardiness, exposure
        - plant_dates: planting_date, fertilize_date_1, fertilize_date_2, fertilize_date_3, bloom_date, treatment_date_1, treatment_type_1, treatment_date_2, treatment_type_2, spent_date, prune_date

- app.delete (‘/api/plant/:plantid’, plantCtrl.***deletePlant***)
    - locate plant by plantid param and delete from the following SQL tables:
        - plants
        - plant_dates
        
- app.put (‘/api/plant/:plantid’, plantCtrl.***editPlant***)
    - input collected on body then saved as changes on SQL tables:
        - plants: common_name, scientific_name, plant_pic, description, hardiness, exposure
        - plant_dates: planting_date, fertilize_date_1, fertilize_date_2, fertilize_date_3, bloom_date, treatment_date_1, treatment_type_1, treatment_date_2, treatment_type_2, spent_date, prune_date

 
___________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
