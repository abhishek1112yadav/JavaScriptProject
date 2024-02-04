import React from "react";

import "./UserList.css";
import UserItem from "./UserItem";

function UserList(props) {
//    console.log(props.items.id);
  if (props.items.length == 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (<UserItem
          key={user.id}
          image={user.image}
          name={user.name}
          placesCount={user.places}
        />)
})
      }
    </ul>)

}

export default UserList;
