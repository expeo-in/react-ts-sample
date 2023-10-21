let count = 0;

const ImpureComponent = (props: any) => {
  console.log("rendering component");
  count = count + 1;
  count = count + props.value;
  return <div>Count Value: {count}</div>;
};

export default ImpureComponent;
