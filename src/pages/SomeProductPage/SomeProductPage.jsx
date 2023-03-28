import { useParams } from "react-router-dom";
import { getSomeProduct } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { Spinner } from '../../components/Spinner/Spinner';
import style from './style.module.css'

export function SomeProductPage() {
    
    // const navigate = useNavigate();
    
  
    let { productId } = useParams();
  
    const { data: product, isLoading, isError, error } = useQuery({
      queryKey: ["getSomeProduct"],
      queryFn: () => getSomeProduct(productId),
    });
  
     
    if (isError) {
        return <p className="error">{error.message}</p>;
      }
  
      
      if (isLoading) return (<Spinner />)
    
      return (

    <div className={style.card_byProdId}
          cover={
            <img className={style.prod_img}
              alt={product.name}
              src={product.pictures}
            />
          }>
          <div title={product.name}
            description={product.description}
          />
        
        </div>
  )
}
