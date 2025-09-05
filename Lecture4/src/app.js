import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import arr from "./utils/dummy.js";



function App(){
    return (
        <>
        <Header/>

        <div className="hero" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
            
        
            {
                arr.map((value,index)=><Card key={index} name={value.name} offer={value.offer}/>)
            }



        </div>
         <Footer/> 
        </>
    )
}

const rootreact=ReactDOM.createRoot(document.getElementById('root'));
rootreact.render(<App/>);