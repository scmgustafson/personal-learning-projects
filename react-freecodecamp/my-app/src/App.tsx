import "./App.css";
import MyComponent from "./MyComponent";

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
        <button className="text-green-700 border-2 border-green-700 px-8 py-4 m-4 rounded-md">
          Forest
        </button>
        <button className="text-white bg-sky-500 border-sky-300 border-2 px-8 py-4 m-4 rounded-md">
          Sky
        </button>
        <button className="text-red-500 bg-red-800 p-8 rounded-full hover:bg-red-500 hover:text-red-100 m-4">
          Fire
        </button>
        <button className="text-violet-900 bg-violet-400 rounded-full py-2 px-10 m-4">
          Magic
        </button>
      </header>
    </div>
  );
}

export default App;
