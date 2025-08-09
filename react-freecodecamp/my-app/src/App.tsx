import "./App.css";
import MyComponent from "./MyComponent";
import Button from "./Button";

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
  const error = false;

  return (
    <div className="App">
      <header className="App-header">
        <Button large>Big!</Button>
        <Button>Small.</Button>
      </header>
    </div>
  );
}

export default App;
