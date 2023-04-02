import { useNavigate, useParams, Link } from "react-router-dom";
import { getCurrentProduct } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { CurrentProductList } from "../../components/CurrentProductList/CurrentProductList";

export function CurrentProduct() {
  let { productId } = useParams();
  const { token } = useAuth();

  const {
    data: currentProduct,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getCurrentProduct"],
    queryFn: async () => {
      const res = await getCurrentProduct(token, productId);

      return await res.json();
    },
  });

  if (isLoading) return <Spinner />;

  if (isError) {
    return <p className="error">{error.message}</p>;
  }
  return (
    <div>
      <CurrentProductList product={currentProduct} />
      <Link to={"/products"}>Обратно в каталог</Link>
    </div>
  );
}
