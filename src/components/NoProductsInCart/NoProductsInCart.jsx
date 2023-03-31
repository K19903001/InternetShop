import style from "./style.module.css";

export const NoProductsInCart = () => {
  return (
    <div>
      {" "}
      <h3 className={style.NoProductsInCart}>Корзина пуста</h3>
    </div>
  );
};
