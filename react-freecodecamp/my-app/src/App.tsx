import "./App.css";
import MyComponent from "./MyComponent";
import Button from "./Button";
import Cat from "./Cat";

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

const App = () => {
  return (
    <div>
      <div className="flex justify-center h-64 p-4 m-4 border-2 border-blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-between h-64 p-4 m-4 border-2 border-red-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-green-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-around items-end h-64 p-4 m-4 border-2 border-purple-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-between items-center h-64 p-4 m-4 border-2 border-orange-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
    </div>
  );
};

export default App;
