import { Card, Space } from "antd";
import style from "./card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart";
import { useNavigate } from "react-router-dom";

export function Catalog({ product }) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    dispatch(addToCart(product._id));
    event.stopPropagation();
  };
  const navigate = useNavigate();
  return (
    <Space
      onClick={() => navigate(product._id)}
      direction="horizontal"
      align="center"
      wrap
    >
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
          <li>Цена товара:{product.price}pуб.</li>
          <li>Скидка:{product.discount}%</li>
        </ul>
        <button
          onClick={(event) => handleAddToCart(event)}
          className="btn btn-warning"
        >
          В корзину
        </button>
        <button type="button" className="btn btn-primary">
          В избранное
        </button>
      </Card>
    </Space>
  );
}
