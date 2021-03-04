import React from 'react';
import { useSelector } from 'react-redux';
import { uiStateSelectors } from 'Redux/uiState';

import './App.less';

const App = () => {
  const title = useSelector(uiStateSelectors.getTitle);

  return (
    <div className="app">
      <h1>{title}</h1>
    </div>
  );
};

App.propTypes = {};

export default App;
