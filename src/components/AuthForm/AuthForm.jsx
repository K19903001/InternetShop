import { Input, Form, Button } from 'antd';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';


export function AuthForm({ onFinish }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal= () => {
        setIsModalOpen(true)
      }
      const handleCloseModal= () => {
        setIsModalOpen(false)
      }

  return (
    <div>
     <button onClick={handleOpenModal} type="button" className="btn btn-dark">Войти</button>
   <Modal closeModal={handleCloseModal} isOpen={isModalOpen}>
   <Form
    name="basic"
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">Войти</Button>
    </Form.Item>
  </Form>
  </Modal>
  </div>
  )
}
