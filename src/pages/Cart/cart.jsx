import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProduct } from "../../api/api";
import { ProductInCart } from "../../components/ProductInCart/ProductInCart";
import { RealCart } from "../../components/RealCart/RealCart";
import { useAuth } from "../../hooks/useAuth";
import { deleteFromCart } from "../../redux/slices/cart";
import style from "./style.module.css";

export const Cart = () => {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { data: products, isLoading } = useQuery({
    queryKey: ["cartProducts", cart.length],
    queryFn: async () => {
      return await Promise.allSettled(
        cart.map(
          async (cartProduct) =>
            await getCurrentProduct(token, cartProduct.id).then((res) =>
              res.json()
            )
        )
      ).then((res) => res.map((elememt) => elememt.value));
    },
    enabled: !!cart.length,
  });

  if (!cart.length) return <ProductInCart />;
  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={style.cartPage}>
      <h1>В корзине уже имеется:</h1>
      <ul>
        {products.map((product) => (
          <ProductInCart product={product} key={product._id} />
        ))}
      </ul>
      <button
        onClick={() => dispatch(deleteFromCart())}
        className="btn btn-danger"
      >
        Очистить корзину
      </button>
      <RealCart />
    </div>
  );
};
