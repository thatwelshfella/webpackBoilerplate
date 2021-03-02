import React from 'react';
import { useSelector } from 'react-redux';

import './App.less';

const App = () => {
  const title = useSelector(state => state.title);

  return <div className="app">{title}</div>;
};

App.propTypes = {};

export default App;
