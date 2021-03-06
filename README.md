# Running the project

To run this project:

- After cloning the project on your machine.

- Run `npm install` in project directory after cloning, to install the required dependencies.

- Run `npm start` in project directory to start the application. The app will start running on port 3000 by default, if port 3000 is used it will automatically choose another unused port on your machine.

- Run `npm test` in project directory to execute Jest test.

# About the project

Mozark weather app is a simple weather app that gives you information about the weather based on the entered location.

# Getting Started with Mozark weather app

- This project was created with native Reactjs framework, which is suitable for small apps like this. Other frameworks can be better on large scale apps, but harder to set up for the first time so it will take more time.
- Index.js is first point in our project, which is pointing to App.js which contains our app. The project is small and simple, we don't need to split it into smaller components.
- The styling is located in style.app.css.
- I used a gitignore file to prevent node_modules from pushing to github, they will use a lot of space and they can be easily downloaded by the script `npm install`.
- I used openweathermap api to get weather data in real time, it provides 1,000,000 calls/month for free which is more than enough in our small app.
- For testing, I used Jest to test the api, if the api works, the app will be fine, we don't have logical functions to test. The test is written in App.test.js.

# The future of Mozark Weather app

- As we go for native Reactjs to initialize the project, we can upgrade it easily later to a more scalable framework like NextJS, for now the architecture is well organized under the src folder. However, the code can be easily written in a new architecture like MVC if the project gets more complicated and bigger in the future.
- We can think about a better UX/UI as well, like a live background that changes dynamically with the current weather data, or an auto complete in the search bar so the user won't complete the full name of the city.
- Because the built with Reactjs, we can easily convert it into a mobile application that can be installed on either Apple iPhone or Android devices using the PWA technology.
