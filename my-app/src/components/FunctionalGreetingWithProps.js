import React from "react";

const FunctionalGreetingWithProps = (props) => {
  return <h1>Hello, World! {props.greeting} {props.name}</h1>;
};

export default FunctionalGreetingWithProps;
