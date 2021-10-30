import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h1>This is jhon</h1>;
const Message = () => {
  return <p> this is a message </p>;
};

/*
const Greeting =() =>
{
   return React.createElement('div',
   {},
   React.createElement('h1',
   {},
   'heloo hey this is ritish'));
};*/

ReactDOM.render(<Greeting />, document.getElementById("root"));
