export const Button = ({ label = "Click Me", clickHandler }) => {
  return <button onClick={clickHandler}> {label} </button>;
};
