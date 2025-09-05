import React, { useState }  from "react";
import ReactDOM from "react-dom/client";


function Counter(){
    let [count,setCount]=useState(0);
    function increase(){
        
       count =count+1;
       setCount(count);
        
    }
    function decrease(){
        count=count-1;
       setCount(count);
        
    }
    return (
        <div className="main">
            <h1>Live counting</h1>
            <h1>The count is {count}</h1>
            <div className="but">
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}> decrement</button>
            </div>
        </div>
    )
}

const rootreact=ReactDOM.createRoot(document.getElementById('root'));

rootreact.render(<Counter/>);