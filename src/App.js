import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainLayOut from './LauOut/MainLayOut';
import { PATHS } from './paths/paths';
import Form from './Pages/Preferance/Form';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayOut />}>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.addPreferance} element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App