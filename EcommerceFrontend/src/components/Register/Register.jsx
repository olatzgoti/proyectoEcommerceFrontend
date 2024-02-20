import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../context/UserState';
import { Button, Form, Input, Alert } from 'antd';

const Register = () => {
  const { users, createUser, resetUserState } = useContext(UserDataContext)
  const [ showAlert, setShowAlert ] = useState(false)

  useEffect(() => {
    if (users === 'email already used') setShowAlert(true) 
  }, [users])

  const onFinish = (values) => {
    console.log('Success:', values);
    createUser(values)
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleAlert = () => {
    setShowAlert(false)
    resetUserState()
  }

  const formData = [
    <>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="name"
        rules={[
          {
            required: true,
            message: 'Por favor introduce tu nombre',
          },
        ]}
      >
        <Input placeholder='Nombre'/>
      </Form.Item>

      <Form.Item name="last_name"
        rules={[
          {
            required: true,
            message: 'Por favor introduce tu apellido',
          },
        ]}
      >
        <Input placeholder='Apellido'/>
      </Form.Item>

      <Form.Item name="email"
        rules={[
          {
            required: true,
            message: 'Por favor introduce tu email',
          },
        ]}
      >
        <Input type='email' placeholder='Email'/>
      </Form.Item>

      <Form.Item name="password"
        rules={[
          {
            required: true,
            message: 'Por favor introduce tu contraseña',
          },
        ]}
      >
        <Input.Password placeholder='Contraseña'/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
        <Button type="primary" htmlType="submit">Registrar</Button>
      </Form.Item>
    </Form>
  </>
  ]

  const alert = <Alert message="Email ya utilizado, escoge otro" type="error" showIcon closable onClose={handleAlert}/>

  return (
    <>
      { formData }
      { showAlert && alert }
    </>
  )
}

export default Register