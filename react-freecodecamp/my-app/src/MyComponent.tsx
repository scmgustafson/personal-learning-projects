const MyComponent = (props: any) => {
  const { children, height, bgColor } = props;
  return (
    <div style={{ background: bgColor, height: height + "px" }}>{children}</div>
  );
};

export default MyComponent;
