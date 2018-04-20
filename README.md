# Pomodoro Timer

A Pomodoro Timer that can be utilized for efficient use of time

## Prerequisites

Prior to running the app, the user needs to have the following installed on their machines
1. [Node.js && npm](https://nodejs.org/en/download/)
2. [create-react-app](https://github.com/facebook/create-react-app)

## Installing

The following is a set of directions for how to get a react development server running locally to run the app

1. Download the git repository into a directory of choice from the following link
- [master.zip](https://github.com/EduardOrdukhanov/Pomodoro-Timer/archive/master.zip)

2. Open a terminal in the "pomodoro_app" folder of the downloaded repository and run the following command to install dependencies

```
npm install
```

3. To run the app in the browser, run the following command

```
npm start
```

If all the directions were followed, the app should open in the browser

## How to use

1. Press "Start" button to trigger first pomodoro busy phase.
2. The timer will automatically transition between "Busy", "Short break", and "Long break" states as necessary.
3. After four pomodoro "Busy" states, the timer will enter a "Long break" state after which the timer will reset and require user input to start over.
4. At any moment after starting the timer, the user can reset it by pressing the "Reset" button.

## Running the tests

To run the tests, run the following command from a terminal inside the "pomodoro_app" folder

```
npm test
```

## Built With

* [React](https://reactjs.org/) - The frontend library used
* [Bulma](https://bulma.io/) - CSS framework used for styling
* [Jest](https://facebook.github.io/jest/) - Facebook library for testing react components
* [Enzyme](http://airbnb.io/enzyme/) - Airbnb library for enhanced testing of react components

## Authors

* **Eduard Ordukhanov**