import Navbar from "./Components/Navbar"
import ProductCards from "./Components/ProductCards"
import "./App.css"
import LastCards from "./Components/LastCards";
import Video from "./Components/video";
import Audio from "./Components/Audio";


const Products=[
  {
    id:1,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"image1.jpg"
  },
  {
    id:2,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img2.jpg"
  },
   {
    id:3,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img3.jpg"
  },
   {
    id:4,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img4.jpg"
  },
   {
    id:5,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img5.jpg"
  },
   {
    id:6,
    name:"Strawberry",
    price:"₹89",
    desc:"this is sweet",
    image:"img8.jpg"
  },
   {
    id:7,
    name:"Strawberry",
    price:"₹89",
    desc:"this is sweet",
    image:"img7.jpg"
  },
   {
    id:8,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img6.jpg"
  }
]

const Last=[
  {
    id:1,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img7.jpg"
  },
  {
    id:2,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img2.jpg"
  },
   {
    id:3,
    name:"Strawberry",
     price:"₹89",
    desc:"this is sweet",
    image:"img3.jpg"
  },
]

function App() {
  return (
    <>
      <Navbar />
     <div className="cards-container">
      {Products.map((p) => (
        <ProductCards key={p.id} item={p} />
      ))}
     </div>

    <Video />

      <div className="cards-container">
      {Last.map((p) => (
        <ProductCards key={p.id} item={p} />
      ))}
     </div>

     <LastCards />
    <Audio />

    </>
  );
}

export default App
