import React from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>ProductsDetail </h1>
      <p>{params.productId}</p>
    </>
  );
}
