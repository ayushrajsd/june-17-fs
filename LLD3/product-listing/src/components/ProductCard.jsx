function ProductCard({ name, price, category, image }) {
  //   console.log(product);
  //   const { name, price, category, image } = product;
  //   console.log(props);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductCard;
