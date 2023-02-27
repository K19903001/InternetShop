import style from './user.module.css'
import { useNavigate } from "react-router-dom";
import { api } from '../../api/api'
import { useEffect, useState } from 'react'


export function User() {
 
  const [ user, setUser ] = useState(Object());
  const navigate = useNavigate();

  useEffect(() => {
      const fetchData = async () => {
          const token = localStorage.getItem('token')
          if (token) {
              const res = await api.me(token);
              const responce = await res.json()
              setUser(responce)
          } else {
            navigate('/registr')
          }
      }
      fetchData()
  }, [ navigate])


  return (
    <div className={style.page_title}><h1>Страница пользователя</h1>
        <div className={style.user_card}>
            <img alt={user.name} src={user.avatar}/>
             <div className={style.userInfo}> 
             <p> ФИО: {user.name} </p>
             <p>Email: {user.email}</p>
             <p> Группа: {user.group}</p>
            </div>
        </div>
    </div>

       
  );
}
