const cardStyle = {
  width: "20%",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
};

const imgStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover",   // very important
  borderRadius: "8px",
};


export default function ProductCards({item}){
  const addToCart = (product) => {
  console.log("Added to cart:", product);
  alert(`${product.name} added to cart`);
};
  
const btnStyle = {
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px"
};

    return(
        <div  style={cardStyle}>
            <img src={item.image} alt={item.name} style={imgStyle}/>
            <h2>{item.name} </h2>
            <p>{item.price}</p>
            <h3>{item.desc}</h3>
             <button style={btnStyle} onClick={() => addToCart(item)}>Add to Cart
             </button>
        </div>
    )
}