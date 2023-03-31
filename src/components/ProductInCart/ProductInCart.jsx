import { totalPrice } from "../../utils/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCheck,
  deleteFromCart,
  dicrementProduct,
  incrementProduct,
} from "../../redux/slices/cart";
import style from "./style.module.css";

export const ProductInCart = ({
  product: { name, price, discount, _id, stock },
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { count, isChecked } = cart.find((el) => el.id === _id);

  return (
    <>
      <li className={style.cartList}>
        <input
          type="checkbox"
          onChange={(event) =>
            dispatch(changeCheck({ _id, isChecked: event.target.checked }))
          }
          checked={isChecked}
        />
        {name}
        <span className="badge bg-primary rounded-pill">{count} шт.</span>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(dicrementProduct(_id))}
          >
            -
          </button>
          <span className="badge bg-primary rounded-pill">
            {totalPrice(count, price, discount)} р
          </span>
          <button
            className="btn btn-primary"
            disabled={count === stock}
            onClick={() => dispatch(incrementProduct(_id))}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteFromCart(_id))}
        >
          Удалить
        </button>
      </li>
    </>
  );
};
