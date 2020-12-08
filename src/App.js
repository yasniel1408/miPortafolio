import React, { lazy, Suspense, useState } from 'react';
import { DisappearedLoading } from 'react-loadingg';
import './App.css';

const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./component/Footer'));
const Proyectos = lazy(() => import('./component/Proyectos'));
const Descripcion = lazy(() => import('./component/Descripcion'));


const App = () =>{
  
  const [anchoNav, setAnchoNav] = useState("0px")

  return(
    <Suspense fallback={<DisappearedLoading/>}>
      <div id="sideNavigation" class="sidenav" style={{width:`${anchoNav}`}}>
        <a href="#" class="closebtn" onClick={()=>setAnchoNav("0px")}>&times;</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact Us</a>
      </div>
      <nav class="topnav">
        <a href="#" onClick={()=>setAnchoNav("250px")}>
          <svg width="30" height="30" id="icoOpen">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="2"/>
              <path d="M0,14 30,14" stroke="#fff" stroke-width="2"/>
              <path d="M0,23 30,23" stroke="#fff" stroke-width="2"/>
          </svg>
        </a>
      </nav>
      <Header/>
      <Descripcion/>
      <Proyectos/>
      <Footer/>
    </Suspense>
  )
}

export default App;
