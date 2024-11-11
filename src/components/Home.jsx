import React, { useState } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";
import data from "../data/data.json";

const Home = () => {

  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [cardItems, setCardItems] = useState([]);

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a,b) => (a.id < b.id ? 1 : -1)));
    } else if (sort === "desc") {
      setItem(data.products.sort((a,b) => (a.id > b.id ? 1 : -1)));
    }
  }

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(data.products);
    } else {
      setBrand(event.target.value);
      setItem(data.products.filter((product) => product.availableBrand.indexOf(event.target.value) >= 0));
    }
  }

  const addProducts = (product) => {
    const exist = cardItems.find((element) => element.id === product.id);

    if (exist) {
      setCardItems(
        cardItems.map((element) => element.id === product.id ? {...exist, qty: exist.qty + 1} : element)
      )
    } else {
       setCardItems([...cardItems, {...product, qty: 1}]);
    }
  }

  const removeProducts = (product) => {
    const exist = cardItems.find((element) => element.id === product.id);
    
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((element) => element.id !== product.id))
    } else {
      setCardItems(
        cardItems.map((element) => element.id === product.id ? {...exist, qty: exist.qty - 1} : element)
      )
    }
  }

  return (
    <div className="container">
      <header>
        <a href="">فروشگاه خطایی</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter 
            count={item.length}
            sortProducts={sortProducts}
            brand={brand}
            filterProducts={filterProducts} />
            <Products 
            item={item}
            addProducts={addProducts} />
          </div>
          <div className="sidebar">
            <Cart cardItems={cardItems} removeProducts={removeProducts} />
          </div>
        </div>
      </main>
      <footer>طراحی و توسعه توسط محمد خطایی</footer>
    </div>
  );
};

export default Home;
