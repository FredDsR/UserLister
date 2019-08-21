import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet><title>UserLister</title></Helmet>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
