import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { totalPrice } from "../../utils/cart";
import { getCurrentProduct } from "../../api/api";

export const RealCart = () => {
  const cart = useSelector((state) => state.cart);
  const { token } = useAuth();

  const { data: productsChecked } = useQuery({
    queryKey: ["cartProducts", cart],
    queryFn: async () => {
      return await Promise.allSettled(
        cart.map(async (cartProduct) => {
          const product = await getCurrentProduct(token, cartProduct.id).then(
            (res) => res.json()
          );
          return {
            ...product,
            isChecked: cartProduct.isChecked,
            count: cartProduct.count,
          };
        })
      ).then((res) =>
        res
          .map((elememt) => elememt.value)
          .filter((el) => el.isChecked === true)
      );
    },
    enabled: !!cart.length,
  });

  let totalPriceOfAll = 0;
  productsChecked &&
    productsChecked.forEach(({ count, price, discount }) => {
      totalPriceOfAll += totalPrice(count, price, discount);
    });

  return (
    <div>
      <p>К оформлению:</p>
      <ol className="list-group list-group-numbered">
        {/* {productsChecked.map(element => <li className="list-group-item">{element.name} - </li>)} */}
      </ol>
      <p>Total:{totalPriceOfAll} </p>
    </div>
  );
};
