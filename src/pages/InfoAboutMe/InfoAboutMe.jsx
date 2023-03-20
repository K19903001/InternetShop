import style from './user.module.css'
import { useQuery } from "@tanstack/react-query";
import { Spinner } from '../../components/Spinner/Spinner';
import { aboutMe } from '../../api/api';

export function InfoAboutMe() {
   
  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: ["aboutMe"],
    queryFn: () => aboutMe(),
  });

  if (isLoading) return (<Spinner />)

  if (isError) {
    return <p>Произошла ошибка: {error}</p>
  }

  return (
    <div className={style.page_title}><h1>Страница пользователя</h1>
        <div className={style.user_card}>
            <img alt={user.name} src={user.avatar}/>
             <div className={style.userInfo}> 
             <p>ФИО: {user.name} </p>
             <p>Email: {user.email}</p>
             <p>Группа: {user.group}</p>
             <p>О себе: {user.about}</p>
            </div>
        </div>
    </div>
  );
}
