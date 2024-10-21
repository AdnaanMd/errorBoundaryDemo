import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ resetErrorBoundary }:any) => {
  return (
    <div role="alert" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column" }}>
      <h1>Something went wrong:</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      throw new Error();
    }
  }, [count]);

  return (
    <div>
      <h2>Error Boundary Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
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
