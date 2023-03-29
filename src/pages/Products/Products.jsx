import { Catalog } from "../../components/Catalog/Catalog";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner/Spinner";
import { getAllProductsWithSearch } from "../../api/api";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { NotFound } from "../../components/notFound/notFound";
import style from "./style.module.css";

export function Products() {
  const { token } = useAuth();
  const { search } = useSelector((state) => state.filter);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getAllProductsWithSearch", search],
    queryFn: async () => {
      const res = await getAllProductsWithSearch(token, search);
      if (res.ok) {
        return await res.json();
      }
    },
  });

  if (isLoading) return <Spinner />;

  if (isError) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <>
      <h1 className={style.productTitle}>Лакомства для вашего питомца</h1>
      <div className="d-flex justify-content-center flex-row flex-wrap">
        {products.length ? (
          products.map((currentProduct) => {
            return (
              <Catalog product={currentProduct} key={currentProduct._id} />
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
