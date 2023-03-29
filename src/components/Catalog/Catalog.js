import { Card, Space } from "antd";
import style from "./card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart";

export function Catalog({ product }) {
  const { Meta } = Card;
  const dispatch = useDispatch();

  return (
    <Space direction="horizontal" align="center" wrap>
      <Card
        className={style.card_prod}
        cover={
          <img
            className={style.card_img}
            alt={product.name}
            src={product.pictures}
          />
        }
      >
        <Meta title={product.name} />
        <ul className="card_text">
          <li>Количество:{product.stock}</li>
          <li>Цена товара:{product.price}p</li>
          <li>Скидка:{product.discount}%</li>
        </ul>
        <button
          type="button"
          onClick={() => dispatch(addToCart(product._id))}
          className="btn btn-outline-warning"
        >
          В корзину
        </button>
        <button
          type="button"
          // onClick={() => dispatch(addToCart(product._id))}
          className="btn btn-primary"
        >
          В избранное
        </button>
      </Card>
    </Space>
  );
}
