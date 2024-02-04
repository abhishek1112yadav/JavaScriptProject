import React from "react";
import UserList from "../components/UserList";

function Users() {
  const user = [
    {
      id: "u1",
      name: "abhishek",
      image:
        "https://images.pexels.com/photos/17685567/pexels-photo-17685567/free-photo-of-a-group-of-people-riding-surfboards-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 3,
    },
  ];
  return <UserList items={user} />;
}

export default Users;
