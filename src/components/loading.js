import React, { useState, useEffect } from 'react';
    import LoadingScreen from './LoadingScreen';
    
    function MyComponent() {
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
    
      if (isLoading) {
        return <LoadingScreen />;
      }
    
      return (
        <div>
          <h1>Data Loaded!</h1>
        </div>
      );
    }
    
    export default MyComponent;