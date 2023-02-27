import { Card, Space } from 'antd';
import style from './card.module.css'
const { Meta } = Card;

export function Catalog({ products }) {
  

  return (
    <Space direction='horizontal' align='center' wrap>
      {products.products.map(product => {
        return <Card className={style.card_prod}
          style={{ width: 300 }}
          cover={
            <img
              alt={product.name}
              src={product.pictures}
            />
          }>
          <Meta
            
            title={product.name}
            description={product.description}
          />
        </Card>
      })}
    </Space>
  )
}

