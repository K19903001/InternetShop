import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/slices/user";
import { SearchInput } from "../../Search/Search";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const logOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <>
      <header>
        {token && (
          <>
            {" "}
            <div>
              <ul className={style.hederMenu}>
                <li>
                  <Link to="/main">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/myPage">User</Link>
                </li>
                <li>
                  <Link to="/cart">Корзина({cart.length})</Link>
                </li>
                <li>
                  <Link to="/favorites">Избранное</Link>
                </li>
              </ul>
            </div>
            <SearchInput />
          </>
        )}

        <div className={style.btn_reg}>
          {token ? (
            <button onClick={logOut} className="btn btn-dark">
              Выйти
            </button>
          ) : (
            <button
              onClick={() => navigate("/signin")}
              type="button"
              className="btn btn-dark"
            >
              Войти
            </button>
          )}
        </div>
      </header>
    </>
  );
}
