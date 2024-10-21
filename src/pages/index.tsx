import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Fallback UI when an error occurs
const ErrorFallback = ({ error, resetErrorBoundary }:any) => {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Simulate error in `componentDidUpdate` equivalent
  useEffect(() => {
    if (count > 0) {
      console.log("Component updated (like componentDidUpdate)");
      throw new Error("Simulated error in componentDidUpdate");
    }
  }, [count]);

  return (
    <div>
      <h2>This is a functional component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Component</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
