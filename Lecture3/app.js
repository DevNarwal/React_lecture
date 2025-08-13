import React from "react";
import ReactDOM from "react-dom/client"


const element=React.createElement('h1',{color:"pink"}, "Hello the new world");
//ReactDOM.render(element,document.getElementById("root"));
const rootreact=ReactDOM.createRoot(document.getElementById('root'));
rootreact.render(element);