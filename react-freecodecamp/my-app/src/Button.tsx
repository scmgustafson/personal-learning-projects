const Button = (props: any) => {
  const { large, children } = props;
  const largeStyle = large ? "text-3xl" : "text-xl";
  return (
    <button
      className={`text-white bg-gray-600 border-2 px-6 py-2 m-4 rounded-lg ${largeStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
