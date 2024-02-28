import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../context/UserState';
import { Button, Form, Input, Alert, Space } from 'antd';
import {  useNavigate } from 'react-router-dom'

const Register = () => {
  const { users, createUser, resetUserState } = useContext(UserDataContext)
  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')

  useEffect(() => {
    if (users === 'email already used') {
      setShowAlert(true)
      setAlertMessage('Email ya utilizado, escoge otro')
    }
  }, [users])

  let navigate = useNavigate()

  const onFinish = async (values) => {
    console.log('Success:', values)
    try {
      await createUser(values)
      setShowAlert(true)
      setAlertMessage('Usuario creado correctamente, te hemos enviado un email de confirmación')
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } catch (error) {
      console.log(error)
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleAlert = () => {
    setShowAlert(false)
    resetUserState()
  }

  const formData = [
    <Space className='space' align='center' direction='vertical' style={{'padding-top': '1.25rem'}}>
      <Form
      name="basic"
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

      <Form.Item >
        <Button type="primary" htmlType="submit">Registrar</Button>
      </Form.Item>
    </Form>
  </Space>
  ]

  const alert = <Alert message={alertMessage} type="info" showIcon closable onClose={handleAlert}/>

  return (
    <>
      { formData }
      { showAlert && alert }
    </>
  )
}

export default Register