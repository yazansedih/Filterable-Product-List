// Define an array of product objects
const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "T-shirt", category: "Clothing", price: 25 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "Coffee Maker", category: "Home", price: 80 },
  { name: "Blender", category: "Home", price: 60 },
];

// Function to display products
function displayProducts(filteredProducts) {
  const productDisplayArea = document.getElementById("product-display-area");
  productDisplayArea.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";

    productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;

    productDisplayArea.appendChild(productItem);
  });
}

// Function to filter products by category
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// Initial display of all products
document.addEventListener("DOMContentLoaded", () => {
  filterProducts("All");
});
