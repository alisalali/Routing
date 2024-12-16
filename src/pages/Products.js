import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
export default function ProductsPage() {
  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        <li>
          {PRODUCTS.map((product) => (
            <li>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}
