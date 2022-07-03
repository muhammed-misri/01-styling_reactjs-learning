import React from "react";
import ReactDOM from "react-dom";

const morning = "Good morning";
const afternoon = "Good afternoon";
const evening = "Good evening";

let greeting;

const date = new Date(2019, 1, 1, 10);
const CurrentTime = date.getHours();

let customStyle = {
  color: " "
};

if (CurrentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "green";
} else if (CurrentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}

customStyle.color;

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,

  document.getElementById("root")
);

//Create a React app from scratch. *
//Show a single h1 that says "Good morning" if between midnight and 12PM. *
//or "Good Afternoon" if between 12PM and 6PM. *
//or "Good evening" if between 6PM and midnight. *
//Apply the "heading" style in the styles.css *
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
