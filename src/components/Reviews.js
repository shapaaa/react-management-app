import React from "react";
import ali from "../avatar-ali.png";
import anisha from "../avatar-anisha.png";
import richard from "../avatar-richard.png";
import shanai from "../avatar-shanai.png";
import "./Reviews.css";
const Reviews = () => {
  let array = [
    {
      key: 1,
      photo: anisha,
      review:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      name: "Anisha Li",
    },
    {
      key: 2,
      photo: ali,
      review:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      name: "Ali Bravo",
    },
    {
      key: 3,
      photo: richard,
      review:
        " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      name: "Richard Watts ",
    },
    {
      key: 4,
      photo: shanai,
      review:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      name: "Shanai Gough",
    },
    {
      key: 5,
      photo: anisha,
      review:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      name: "Anisha Li",
    },
  ];
  return (
    <div className="scroll-wrapper">
      {array.map(({ key, review, name, photo }) => (
        <div key={key} className="review-container1">
          <img className="user-img" src={photo} />
          <div className="review-container2">
            <div className="user-name">{name}</div>
            <div className="user-review">{review}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Reviews;
