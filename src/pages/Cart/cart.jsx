import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentProduct } from "../../api/api";
import { Catalog } from "../../components/Catalog/Catalog";
import { Spinner } from "../../components/Spinner/Spinner";
import { useAuth } from "../../hooks/useAuth";
import { removeAllCart, removeFromCart } from "../../redux/slices/cart";

export const Cart = () => {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["getCartProduct", cart, token],
    queryFn: async () => {
      return await Promise.allSettled(
        cart.map((element) =>
          getCurrentProduct(token, element.id).then((res) => res.json())
        )
      ).then((res) => res.map((el) => el.value));
    },
  });
  if (isLoading) return <Spinner />;

  if (isError) {
    return <p className="error">{error.message}</p>;
  }
  return (
    <>
      <h1>Корзина</h1>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeAllCart())}
      >
        Удалить все
      </button>
      <div className="d-flex juistify-content-center flex-row flex-wrap ">
        {" "}
        {data.map((product) => (
          <Catalog key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
