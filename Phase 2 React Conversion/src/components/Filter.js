import ProductList from "./ProductList";
import { useState } from "react";

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <>
      <section id="filter-section">
        <button onClick={() => handleCategory("All")}>All</button>
        <button onClick={() => handleCategory("Electronics")}>
          Electronics
        </button>
        <button onClick={() => handleCategory("Clothing")}>Clothing</button>
        <button onClick={() => handleCategory("Home")}>Home</button>
      </section>
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
}

export default Filter;
