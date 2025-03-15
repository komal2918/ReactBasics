import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id : "heading"}, "This is Hello World from ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX transpiled before it reaches JS -> PARCEL -> BABEL
//JSX ==> React.createElement ==> ReactElement-JSObject ==> HTMLElement(render)

// Functional Components
const Title = () => {
    return <h1 className = "head" tabIndex = "5">Namaste React🚀</h1>
};
    
// Component Composition - use of one component inside other component
const HeadingComponent = () => {
    return (
        <div id = "container">
        <Title/>
        <h1 className = "heading">Hello World Using Functional Component</h1>
        </div>
    );  
};

const HeadingComponent2 = () => (
    <h1 className = "heading">Hello World Using Functional Component2</h1>
);


root.render(<HeadingComponent/>);