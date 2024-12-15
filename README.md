# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook. The bug is an infinite loop caused by incorrectly using the state variable as a dependency in `useEffect`.

## Bug Description
The `MyComponent` component uses the `useState` hook to manage a count. Inside the `useEffect` hook, `setCount` is called to update the count, causing a continuous loop because the dependency array `[count]` triggers re-renders that update the count again within the effect itself.

## Solution
The solution involves understanding how to properly use the dependencies array in `useEffect`.  To resolve this infinite loop, the dependency array can be left empty to remove the problematic dependency. Alternatively, if you need a dependent effect it may be that the use of a `setTimeout` or `setInterval` is more appropriate and will not cause infinite updates.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the browser console for errors (if present) and the rapidly increasing count on the page. This demonstrates the infinite loop.
