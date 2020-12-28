import React, { useEffect } from "react";
import { Prompt } from "react-router-dom";

let NavigationBlock = ({ when, message }) => {
  let preventNavigation = (event) => {
    event.preventDefault();
    event.returnValue = message;

    return message;
  };

  useEffect(() => {
    if (when) {
      window.addEventListener("beforeunload", preventNavigation);
    } else {
      window.removeEventListener("beforeunload", preventNavigation);
    }

    return () => window.removeEventListener("beforeunload", preventNavigation);
  });

  return <Prompt when={when} message={message} />;
};

export default NavigationBlock;
