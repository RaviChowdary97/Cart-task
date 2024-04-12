import Footer from "./Components/Footer";
import { Middle } from "./Components/Middle";
import { NavBar } from "./Components/NavBar";
import { Product } from "./Components/Product";
import cartContext from "./Components/Contextcart";
import { useState } from "react";
function App() {
  const product = [
    {
      name: "Fancy Product",
      price: "$30",
      rating: "⭐⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Special Product",
      price: "$20",
      rating: "⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Sale Product",
      price: "$50",
      rating: "⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Special Product",
      price: "$70",
      rating: "⭐⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Fancy Product",
      price: "$80",
      rating: "⭐⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Fancy Product",
      price: "$90",
      rating: "⭐⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Fancy Product",
      price: "$90",
      rating: "⭐⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
    {
      name: "Special Product",
      price: "$50",
      rating: "⭐⭐⭐",
      poster:
        "https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Orange-Juice-Advertising-Poster-Design-1-1536x864.jpg",
    },
  ];
  const [cartUCtxt, setcartUCtxt] = useState(0);
  return (
    <>
      <cartContext.Provider value={[cartUCtxt, setcartUCtxt]}>
        <NavBar />
        <Middle />
        <div
          className="d-flex flex-wrap  text-white "
          style={{ gap: "3%", marginBottom: "20px" }}
        >
          {product.map((ele) => (
            <Product {...ele} />
          ))}
        </div>
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default App;
