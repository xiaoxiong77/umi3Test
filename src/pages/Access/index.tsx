import React, { useEffect } from 'react';

const Access = () => {
  useEffect(() => {
    console.log('Test');
  }, []);

  return <div>Access</div>;
};

export default Access;
