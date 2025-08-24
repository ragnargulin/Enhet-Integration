# Kodbas för Enhets- och integrationstestning av React komponenter.

## Installation

Run `npm install` to install all dependencies

## Utveckling

Run `npm run dev` to start development server

## Testning

Run `npm test` to run tests. This can also be done without dev server running

## Coverage

Run `npm run coverage` to see coverage of tests.

## Istanbul

Run `open coverage/index.html` to see live page of coverage stats



For this assignment, I worked with an existing React project and extended it by creating a CounterButton component and its associated test suite. The component is a simple button that maintains a local count state using the useState hook. Each time the button is clicked, the state increments by one, and the updated value is displayed on the button itself.

To test this component, I used Vitest with @testing-library/react. The tests check that the button starts with the initial value 0 and correctly increments the count when clicked multiple times:

I also made sure the Vitest environment was set to jsdom and enabled coverage reporting with Istanbul, which allowed me to verify that all statements, branches, and functions were fully tested.

## Reflection

Understanding the testing environment was very helpful. At first, my tests failed because of missing React imports and an incorrect environment setup. By switching to jsdom and ensuring the proper imports were in place, the tests ran successfully. I also saw the value of iterative improvements: small adjustments to both the component and its test code increased the coverage from 50% to 100%, which showed me how even minor refinements can enhance reliability in real-world projects. Working with an existing codebase also required attention to existing naming conventions and avoiding conflicts. For example, I needed to make sure I differnetiated between ScoreButton and CounterButton, and their individual tests.