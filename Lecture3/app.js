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
//**************************JSX (Java Script Expression)************************************/

const name="Jaat";
const obj={
    khana:"dud dhai",
    excercise:"sapate"
}
const style_ka_object={
    color:"pink",
    backgroundColor: "beige"
}
function meet(){
    return <p>Shree ram janki baithe hai mere sine  m </p>
}
const new_element4=<h1 style={style_ka_object}>My self {name} Your Papa and i like {obj.khana} and to do {obj.excercise} JAI SHREE RAM!!!!!!!!! {meet()}</h1>

const rootreact=ReactDOM.createRoot(document.getElementById('root'));
rootreact.render(element);
rootreact.render(new_element);
rootreact.render(new_element2);
rootreact.render(new_element3);
rootreact.render(new_element4);