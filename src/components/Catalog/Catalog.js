import { Card, Space } from 'antd';
import style from './card.module.css'
import { useNavigate } from "react-router-dom";

export function Catalog({ products }) {
  const { Meta } = Card;
  const navigate = useNavigate();
  

  return (



    <Space direction='horizontal' align='center' wrap>
      {products.map(product => {
        return <Card className={style.card_prod}
          cover={
            <img className={style.card_img}
              alt={product.name}
              src={product.pictures}
            />
          }>
          <Meta title={product.name}/>
          <ul className='card_text'>
          <li>Количество:{product.stock}</li>
          <li>Цена товара:{product.price}p</li>
          <li>Скидка:{product.discount}%</li>
          </ul>
          <button  type="button" class="btn btn-outline-warning">В корзну</button>
        </Card>
      })}
    </Space>
  )
}

