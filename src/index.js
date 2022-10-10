import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <App/>
    {/* <Routes>
    <Route path='mobiles' element={<App title='mobile'/>}/>
    <Route path='audio' element={<App title='audio'/>}/>
    <Route path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes> */}
  </BrowserRouter>
  </React.StrictMode>
);

