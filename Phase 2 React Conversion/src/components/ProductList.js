const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "T-shirt", category: "Clothing", price: 25 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "Coffee Maker", category: "Home", price: 80 },
  { name: "Blender", category: "Home", price: 60 },
];

function ProductList({ selectedCategory }) {
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <>
      <section id="product-display-area">
        <h3>Product List</h3>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </>
  );
}

export default ProductList;
