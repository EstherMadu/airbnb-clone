import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} className="katie" />
      <div className="card-stats">
        <img src="/images/star.png" alt="star image" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span>/ person
      </p>
    </div>
  );
}

export default Card;
