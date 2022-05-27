import React from "react";
import "./Card.css"


function Card(props){
  return(
    <div className="card">
      <div className="card__body">
      <img src={props.img} className="__image"/>
      <h2 className="card__title">{props.title}</h2>
      <div className="description__border">
      <p className="card__description">
        {props.description}
      </p>
      </div>
      </div>
      <button className="card__btn">{props.contact}</button>
      <p className="Grade" > Average grade: {props.grade}</p>
      </div>



  )
}

export default Card