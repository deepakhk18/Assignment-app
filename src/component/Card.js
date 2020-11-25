import React from "react";
function Card(props) {
  return (
    <div className="card">
      <img src={props.img.replace(/\"/g, "")} alt="Avatar" />
      <h3 className="bg">{props.name}</h3>
      <div className="bg">
        From {props.sdate} to {props.edate}
      </div>
      <div className="bg">Entry type:{props.entry}</div>
      <div className="bg">{props.place}</div>
      <a href={props.web} className="bg">
        Visit website
      </a>
    </div>
  );
}
export default Card;
