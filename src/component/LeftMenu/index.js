import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import image from '../../assets/wathsappqr.jpeg'


const Component = () => {
    const [anchoNav, setAnchoNav] = useState("0px")

    return(
        <div>
            <div id="sideNavigation" className="sidenav" style={{width:`${anchoNav}`}}>
            <Link to="#" className="closebtn" onClick={()=>setAnchoNav("0px")}>&times;</Link>
            <a href="#" onClick={()=>setAnchoNav("0px")}>Beging</a>
            <a href="#about" onClick={()=>setAnchoNav("0px")}>About</a>
            <a href="#skills" onClick={()=>setAnchoNav("0px")}>Skills</a>
            <a href="#projects" onClick={()=>setAnchoNav("0px")}>Projects</a>
            <a href="#contact" onClick={()=>setAnchoNav("0px")}>Contact</a>
            <a href="#"><img width="80%" loading="lazy" src={image}/></a>
            </div>
            <nav className="topnav" id="beging">
            <Link to="#" onClick={()=>setAnchoNav("250px")}>
                <svg width="25" height="25" id="icoOpen">
                    <path d="M0,8 30,8" stroke="#fff" strokeWidth="3"/>
                    <path d="M0,15 30,15" stroke="#fff" strokeWidth="3"/>
                    <path d="M0,22 30,22" stroke="#fff" strokeWidth="3"/>
                </svg>
            </Link>
            </nav>
        </div>
    )
}

export default Component