import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { changeSearchValue } from "../../redux/slices/filter";

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(() => {
    const searching = searchParams.get("search");
    return searching ? searching : "";
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    dispatch(changeSearchValue(debounceValue));
  }, [debounceValue, dispatch]);

  const onChange = (event) => {
    setValue(event.target.value);

    if (event.target.value) {
      return navigate({
        pathname: "/products",
        search: `?search=${event.target.value}`,
      });
    }

    return navigate("/products");
  };

  return (
    <div className={style.search}>
      <input
        value={value}
        name="search"
        type="text"
        onChange={onChange}
        placeholder="Введите продукт"
      />
    </div>
  );
};

export { SearchInput };
