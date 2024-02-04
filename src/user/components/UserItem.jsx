import React from "react";

import "./UserItem.css";

function UserItem(props) {
    console.log(props);
return (<li className="user-Item">
    <div className="user-Item_Content">
      <div className="user-Item_image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
    <div className="user-Info">
      <h2>{props.name}</h2>
      <h3>
        {props.placesCount}
        {props.placesCount === 1 ? "Place" : "places"}
      </h3>
    </div>
  </li>);
}

export default UserItem;
