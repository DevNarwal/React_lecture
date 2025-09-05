
function Card(props){
    return (
        <div  className="card" style={{border:"2px solid black",padding:"2px" }}>
            <img src="https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=1260" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.name}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}
export default Card;