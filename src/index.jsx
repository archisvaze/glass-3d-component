import React from "react";
import "./style.css";

export default function Component(props) {
  const container_styles = {
    width: props.width ? props.width : "100%",
    height: props.height ? props.height : "600px",
    padding: "12px",
    border: "1px solid #d5d6d8",
    backgroundColor: "rgb(250, 250, 250)",
  };

  return <div id="componentcontainer" style={container_styles}></div>;
}
