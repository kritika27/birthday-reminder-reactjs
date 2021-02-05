import React from "react";
import data from "./data";
import "./App.css";

export default function App() {
  var date = new Date();
  var currentMonth = date.getMonth();
  switch (currentMonth) {
    case 0:
      var month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      return 0;
  }

  data.sort(function (a, b) {
    return a.day - b.day;
  });
  return (
    <div className="birthday">
      <h1>Birthdays Of The Month</h1>
      <div className="container">
        {data
          .filter((bday) => bday.month === month.toLowerCase())
          .map((people) => {
            return (
              <div className="person" key={people.id}>
                <img src={people.image} alt="person" />
                <div className="info">
                  <h3>{people.name}</h3>
                  <h4>
                    {people.day} {month}
                  </h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
