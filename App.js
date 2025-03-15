import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id : "heading"}, "This is Hello World from ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX transpiled before it reaches JS -> PARCEL -> BABEL
//JSX ==> React.createElement ==> ReactElement-JSObject ==> HTMLElement(render)

const jsxHeading = (
    <h1 className = "head" tabIndex = "5">
        Hello World from JSX</h1>
    );

// Functional Components
const HeadingComponent = () => {
    return (
        <h1 className = "heading">Hello World Using Functional Component</h1>
    );  
};

const HeadingComponent2 = () => (
    <h1 className = "heading">Hello World Using Functional Component2</h1>
);

root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent/>);
root.render(<HeadingComponent2/>);