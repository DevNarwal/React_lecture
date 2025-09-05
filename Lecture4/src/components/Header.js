
export default function Header(){
    return (
        <div className="heading">
        <img src=" https://images.indianexpress.com/2021/01/myntra.png?w=640" height={"60px"} width={"80px"}/>

        <div className="section">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Kids</button>
            <button className="but">Home & Living</button>
            <button className="but">Beauty</button>
            <button className="but">Studio</button>
        </div>

        <div className="search">
            <textarea placeholder="Search for product, brands and more"></textarea>
        </div>
        <div className="inventory">
            <button className="but">Profile</button>
            <button className="but">Wishlist</button>
            <button className="but">Cart</button>

        </div>
        </div>
    )
}