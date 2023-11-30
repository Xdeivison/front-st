
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About/index';
import Boletim from '../pages/Boletim/index';
import Conference from '../pages/Conference/index';
import Contact from '../pages/Contact/index';
import Historic from '../pages/Historic/index';
import StationsList from '../pages/List-Stations/index';
import Sidebar from '../components/SideBar/Sidebar';
import Home from '../pages/Home/index';

export function CommonRoutes() {
  return (
    <div className='d-flex justify-content-center'>
      <Sidebar />
      <div className='w-100 m-4 d-flex flex-column' style={{ gap: 30 }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/boletim' component={Boletim} />
          <Route path='/conference' component={Conference} />
          <Route path='/contact' component={Contact} />
          <Route path='/historic' component={Historic} />
          <Route path='/list-stations' component={StationsList} />
          {/* <Route path='*' component={PageError} /> */}
        </Switch>
      </div>
    </div>
  );
};
