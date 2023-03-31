import style from "./style.module.css";

export function CurrentProductList({ product }) {
  return (
    <div className={style.currentProductPage}>
      <h1>{product.name}</h1>
      <div className={style.productInfo}>
        <img alt={product.pictures} src={product.pictures} />
        <p> {product.description} </p>
      </div>
    </div>
  );
}
