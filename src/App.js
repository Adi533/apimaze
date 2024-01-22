// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<ShowList/>} />
          <Route path="/details/:id" element={<ShowDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;
