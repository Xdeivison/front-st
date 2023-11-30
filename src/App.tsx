import * as React from 'react';
import './App.css';
import MapView from './components/Map/MapView';
import Sidebar from './components/SideBar/Sidebar';
import { BrowserRouter } from "react-router-dom";
import AppProvider from './hooks';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
