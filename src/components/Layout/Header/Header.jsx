import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { PetsShopContext } from "../../../Context/Context";
import style from './style.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../redux/slices/user";
import { SearchInput } from "../../Search/Search";

export function Header() {
  const {isAuth,setIsAuth, setToken} = useContext(PetsShopContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
      if (token) {
        setIsAuth(true)
          }
    }, )

  return (
      <>
      <header>
      <nav>
        <ul className={style.hederMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/myPage">User</Link></li>
        </ul>
      </nav>
      {isAuth && <SearchInput />}
      <div className={style.btn_reg}>
      {isAuth ? <button onClick={logOut} className="btn btn-dark">Выйти</button> : <button onClick={() => navigate('/signin')} type="button" className="btn btn-dark">Войти</button>}
      </div>
       </header>
     </>
    )
  }