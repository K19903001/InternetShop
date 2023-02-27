import { Button, Form, Input } from 'antd';
import style from './style.module.css';
import { api } from '../../api/api';
import { useState} from 'react'

import { useNavigate, Outlet } from "react-router-dom";


  export function Registr(onFinish) {
    const [registr, setRegistr] = useState();
    const navigate = useNavigate();

    const signUp= async (values) => { 
      const res = await api.reg(values);
     if (res.ok)  {
      navigate('products')
     }   
     
    }

   
  return(
  <div className={style.form_registr}>
  <h2>Регистрация нового пользователя</h2>
  <Form>
        <Form.Item name="email" onFinish={onFinish} label="email" rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item name="password" label="password" rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="group" label="Group" rules={[
        {
          required: true,
          message: 'Please input group!',
        },
      ]}
    >    
     <Input />
    </Form.Item>

      <Button type="submit" htmlType="submit" >Зарегистрироваться</Button>
      </Form>
  </div>
  )
   }