import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Title = (): any => {
  return <div>Title!</div>;
};

const Description = (): any => {
  console.log("Description console text");
  return <div>Here is some description for the app</div>;
};

const Message = (props: any) => {
  const { text, bgColor } = props; // this is destructuring the dict props {text: "balh", color: "blah"}

  console.log(props);
  // curly braces below are used for rendering any javascript
  return <div style={{ background: bgColor }}>{text}</div>;
};

const Box = (props: any) => {
  const { label, bgColor, textColor, large } = props;
  return (
    <div
      style={{
        background: bgColor,
        color: textColor,
        fontSize: large ? "40px" : "20px",
      }}
    >
      {label}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          label="My name is boxboy"
          bgColor="CornFlowerBlue"
          textColor="White"
          large={true}
        />
        <Box
          label="and I am box girl"
          bgColor="Pink"
          textColor="Black"
          large={false}
        />
      </header>
    </div>
  );
}

export default App;
