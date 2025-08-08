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
        <div className="text-3xl font-bold underline text-blue-600 bg-blue-100">
          Hello Blue
        </div>
        <div className="text-1xl font-bold underline text-yellow-600 bg-yellow-50 border-2 border-yellow-900">
          Hello Yellow
        </div>
        <div className="text-5xl font-bold underline text-red-300 bg-emerald-500">
          Hello Red
        </div>
        <div className="text-xl text-purple-600 border-sky-500 border-2">
          Hello Purple
        </div>
        <div className="text-xl text-purple-100 bg-violet-600 text-right">
          Hello other purple
        </div>
      </header>
    </div>
  );
}

export default App;
