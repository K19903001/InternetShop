import { Catalog } from '../../components/Catalog/Catalog'
import { useQuery} from '@tanstack/react-query';
import { Spinner } from '../../components/Spinner/Spinner';
import { getAllProducts } from '../../api/api';

export function Product() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProducts(),
  });

  if (isLoading) return (<Spinner />)

  if (isError) {
      return <p className="error">{error.message}</p>;
    }
   
 return (
  
    <Catalog products={data} />
     )
 }
