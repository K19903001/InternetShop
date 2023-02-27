import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState,React } from 'react';
import { api } from './api/api';
import { AuthForm } from './components/AuthForm/AuthForm';
import { Layout, Menu} from "antd";
import './index.css';


const { Header, Content, Footer } = Layout;

function App() {
   
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
    
  useEffect(() => {
  const token = localStorage.getItem('token')
    if (token) {
      setIsAuth(true)
        }
  }, [navigate])



  const onFinish = async (values) => { 
    const res = await api.auth(values);
    const responce = await res.json(values);
    setIsAuth(true)
    localStorage.setItem("token", responce.token)
    navigate('products')
  }
 
   const menuItems = [
    {
      key: `products`,
      label: `Products`,
    },
    {
      key: `user`,
      label: `User`,
    },
    {
      key: `contacts`,
      label: `Contacts`,
    }
  ]

  const handleRoute = (event) => {
    navigate(event.key)
  }
   return (
    <Layout className="layout">
       <Header>
       <div className="btn_reg">
       <button type="button" onClick={() => navigate('/registr')} className="btn btn-danger">Регистрация</button>
       </div>
       <Menu theme="dark" mode="horizontal" items={menuItems} onClick={handleRoute}/>
     </Header>
     <Content>
        <Outlet />
        {!isAuth && <AuthForm onFinish={onFinish} />}
      </Content>
      <Footer>PetsShop</Footer>
    </Layout>
  );
}

export default App;
