import React from "react";
import ReactDOM from "react-dom/client"

function Card(props){
    return (
        <div style={{border:"2px solid black",padding:"2px" }}>
            <img src="https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=1260" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.name}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

const arr=[{name:"T-shirt", offer:"40-80%"},{name:"Shirt", offer:"10-90%"}, {name:"Skirt", offer:"4-80%"}, {name:"Belts", offer:"40-80%"},{name:"Tie", offer:"4-8%"} ]
function App(){
    return (
        <div style={{display:"flex", gap:"20px" , flexWrap:"wrap"}}>
            
            {/* <Card name="T-shirt" offer="40-80%"/>
            <Card  name="shirt" offer="40-60%"/>
            <Card  name="Kurta" offer="30-80%"/>
            <Card  name="T-shirt" offer="40-80%"/>
            <Card  name="T-shirt" offer="40-80%"/>
            <Card  name="T-shirt" offer="40-80%"/>
            <Card  name="T-shirt" offer="40-80%"/>
            <Card name="T-shirt" offer="40-80%"/> */
            
            
            }
            {
                arr.map((value,index)=><Card key={index} name={value.name} offer={value.offer}/>)
            }



        </div>
    )
}

const rootreact=ReactDOM.createRoot(document.getElementById('root'));
rootreact.render(<App/>);