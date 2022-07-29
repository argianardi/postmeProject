import React from "react";
import "../styles/index.css";

export default function Input(props) {
  return (
    <div>
      <input
        className="pl-4 w-10/12 md:w-3/5 h-10  bg-white rounded-md"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
