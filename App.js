import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id : "heading"}, "This is Hello World from ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX transpiled before it reaches JS -> PARCEL -> BABEL
//JSX ==> React.createElement ==> ReactElement-JSObject ==> HTMLElement(render)
const jsxHeading = <h1 id = "heading">Hello World from JSX</h1>;
root.render(heading);
root.render(jsxHeading);