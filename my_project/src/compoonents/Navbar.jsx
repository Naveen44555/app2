import "./Navbar.css";

export default function  Navbar(){
    return (
        <div >
            <div  className="nav1" style={{display:"flex",justifyContent:"space-around"}}>
                <div >
                    <h1>Natural Flavours</h1>
                </div>
                <div  className="nav-links" style={{ display:"flex", gap:"50px", margin:"20px",fontSize:"25px"  }}>
                    <a href="#video" >Products</a>
                    <a href="" >Brands</a>
                    <a href="" >Recipes</a>
                    <a href="" >Cart</a>
                    
                    </div>
            </div>
        </div>
    )
}