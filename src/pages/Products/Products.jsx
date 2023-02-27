import { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { Catalog } from '../../components/Catalog/Catalog'
import { useQuery} from '@tanstack/react-query';
import { Spinner } from '../../components/Spinner/Spinner';

export function Product() {
  const [products, setProducts] = useState({ total: 0, products: [] })

   useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      const res = await api.getProducts(token);
      const responce = await res.json()

      setProducts(responce)

     
    }
    fetchData()
  }, [])

  const {data, isLoading } = useQuery ({
    queryKey: ['prod'],
    queryFn: () => fetch ('https://api.react-learning.ru/products').then(res => res.json())
  })
  if (isLoading) return (<Spinner />)

  return (
    <div>
      {/* Search */}
      <Catalog products={products} />
    </div>
  )
}
