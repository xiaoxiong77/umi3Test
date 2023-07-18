import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('Test');
  }, []);

  return <div>Home</div>;
};

export default Home;
