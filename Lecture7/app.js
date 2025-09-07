import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Main(){

    let [password,setPassword]=useState("eiugofiuegyfo");
    let [length,setLength]=useState(10);
    let [numberChanged, setNumber]=useState(false);
    let [charChanged,setChar]=useState(false);

    function generate(){
        let str='abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ';

        if(numberChanged){
            str+='0123456789';
        }
        if(charChanged){
            str+='!()_*&^%$#@';
        }

        let pas='';
        for(let i=0;i<length;i++){
            pas+=str[Math.floor(Math.random()*str.length)];
            setPassword(pas);
        }
    }
    useEffect(()=>{
         generate();
    },[length,charChanged,numberChanged])
   



    return (
        <div className="hero">
            <h1>Password Generator</h1>
            <h2>Password is:<span> {password}</span></h2>

            <div className="butt">
                <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length is: {length}</label>
                <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumber(!numberChanged)}></input>
                <label>Number</label>
                <input type="checkbox" defaultChecked={charChanged} onChange={()=>setChar(!charChanged)}></input>
                <label>Symbol</label>
            </div>


        </div>
    )
}
const reactroot=ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(<Main/>);