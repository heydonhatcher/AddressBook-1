import React from "react";

const UserDetails = props => {
  if (props.show) {
    return (
      <div>
        <p>{props.user.email}</p>
        <p>
          {props.user.location.city}, {props.user.location.state},{" "}
          {props.user.location.country}
        </p>
        <p>{props.user.dob.age}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default UserDetails;
