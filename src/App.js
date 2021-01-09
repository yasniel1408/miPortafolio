import React, { lazy, Suspense, useState, useEffect } from 'react';
import { DisappearedLoading } from 'react-loadingg';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import './App.css';

const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./component/Footer'));
const LeftMenu = lazy(() => import('./component/LeftMenu'));

const Home = lazy(() => import('./pages/Home'));

const App = () =>{

  return(
    <BrowserRouter>
      <Suspense fallback={<DisappearedLoading/>}>
        <LeftMenu/>
        <Header/>
        <Switch>
          <Route path="/" name="Home" render={props => <Home {...props} />} />

        </Switch>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
