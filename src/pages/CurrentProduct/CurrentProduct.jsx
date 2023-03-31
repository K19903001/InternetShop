import { useNavigate, useParams, Link } from "react-router-dom";
import { getCurrentProduct } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner/Spinner";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Catalog } from "../../components/Catalog/Catalog";
import { CurrentProductList } from "../../components/CurrentProductList/CurrentProductList";

export function CurrentProduct() {
  let { productId } = useParams();
  const { token } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h1>{}</h1>
      <CurrentProductList product={currentProduct} />
      <Link to={"/products"}>Обратно в каталог</Link>
    </div>
  );
}
