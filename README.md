# Running the project

To run this project:

- After cloning the project on your machine.

- Run `npm install` in project directory after cloning, to install the required dependencies.

- Run `npm start` in project directory to start the application. The app will start running on port 3000 by default, if port 3000 is used it will automatically choose another unused port on your machine.

- Run `npm test` in project directory to execute Jest test.

# Getting Started with Mozark weather app

- This project was created with native Reactjs framework, which is suitable for small apps like this. Other frameworks can be better on large scale apps, but harder to set up for the first time so it will take more time.
- Index.js is first point in our project, which is pointing to App.js which contains our app. The project is small and simple, we don't need to split it into smaller components.
- The styling is located in style.app.css.
- I used a gitignore file to prevent node_modules from pushing to github, they will use a lot of space and they can be easily downloaded by the script `npm install`.
- I used openweathermap api to get weather data in real time, it provides 1,000,000 calls/month for free which is more than enough in our small app.
  For testing, I used Jest to test the api, if the api works, the app will be fine, we don't have functions or logic to test. The test is written in App.test.js
