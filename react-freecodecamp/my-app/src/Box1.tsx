import Dog from "./Dog";

const Box1 = () => {
  return (
    <div className="flex items-center justify-center h-64 p-4 m-4 border-2 border-blue-400">
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
};

export default Box1;
