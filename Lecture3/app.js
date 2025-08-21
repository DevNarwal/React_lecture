import React from "react";
import ReactDOM from "react-dom/client"


//*                          React                          Render
// *    React.createElement() ==>  react elemnt (Js Object)  ==> html element
const element=React.createElement('h1',{color:"pink"}, "Hello the new world");
//ReactDOM.render(element,document.getElementById("root"));

//*        Babble                  React                       Render
//*   Jsx   ==>    createElemet()   ==> react elemnt(Js Object) == > html element
const new_element=<h1>Heloo buddy i am here</h1>//Jsx element

const new_element2=(
    <div>
        <h1>Headingggggg</h1>
        <p>This is a example of using two things to render with the help of div</p>
    </div>
)
const new_element3=(
    <>
        <h1 id="heading" className="heading">Headingggggg Agian</h1>
        <p>This  is a example of empty container that hold two element</p>
    </>
)

const rootreact=ReactDOM.createRoot(document.getElementById('root'));
rootreact.render(element);
rootreact.render(new_element);
rootreact.render(new_element2);
rootreact.render(new_element3);