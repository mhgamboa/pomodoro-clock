# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Notes

### UseState Hook

- useState let's you use state (pretty self-explanatory). EX: `const [seconds, setSeconds] = useState(0)`. The `setSeconds` function will re-render the entire component - meaning that the entire function will run again with the updated information.
  - The value of `seconds` does not change, but it is made different in the next render. That's why we can use `const` instead of `var` of `let`. That also why you need to use a funciton within `setSeconds` - So that the next render will have access to the previous state.
  - A returning a function inside `setSeconds` will execute at the start when useEffect is called again (based on state within a depency array being modified)
