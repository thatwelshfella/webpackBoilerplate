import React from 'react';
import { useSelector } from 'react-redux';
import { aliases } from 'Redux/reducer';

import './App.less';

const App = () => {
  const title = useSelector(state => state.title);

  return (
    <div className="app">
      <h1>{title}</h1>
      <h2>{aliases}</h2>
    </div>
  );
};

App.propTypes = {};

export default App;
