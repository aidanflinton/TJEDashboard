import React from 'react'
import "./SideBar.css"
import {ClassData} from "./ClassData";

function SideBar(){
    return ( 
    <div className="Wrapper">
    <div className="SideBars">
    <div className="Sidebar">
    <ul className="SideBarList">
    {ClassData.map((val,key)=> {
        return (
            <li 
            key={key} 
            className="row"
            onClick={()=>{window.location.pathname=val.link}}>
            {" "}

        <div id="icon">{val.icon}</div>{" "}
        <div id="title">
            {val.title}

        </div>
        
        
        </li>
        );
    })}
    </ul>
    </div>
    </div>
   </div>
    );
        
}

export default SideBar;


/*
<div className="Wrapper">
    <div className="SideBars">

    <Sidebar/>
    
    
    </div>
   </div>
*/

