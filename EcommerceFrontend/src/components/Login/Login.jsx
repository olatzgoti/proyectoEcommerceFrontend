import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserState'
import { Form, Input, Button, Space, Alert } from 'antd'

const Login = () => {

    const navigate = useNavigate()
    const { login } = useContext(UserDataContext) 
    const [ showAlert, setShowAlert ] = useState(false)

    const handleAlert = () => {
      setShowAlert(false)
    }

    useEffect(() => {
        setTimeout(()=>{
            const foundToken = JSON.parse(localStorage.getItem('token'))
            if(foundToken){
   //         
                setShowAlert(true)
               setAlertMessage('Se ha efectuado el inicio de sesión correctamente')
                navigate('/profile') }}, 1500)},
                [login])      
console.log('hola1')
            if(foundToken)
            { navigate('/profile') }}, 1000)},
            [login])      

    const onFinish = async (values) => { 
      const loginOk = await login(values)
      console.log('loginok', loginOk.request.status);

      if(loginOk.request.status === 200) {
        setTimeout(() => navigate('/profile'), 1500)
      } else {
        setShowAlert(true)
      }
    }

    const onFinishFailed = (error) => { console.log("Failed:", error)}
    const alert = <Alert message='Usuario o contraseña incorrectos' type="info" showIcon closable onClose={handleAlert} style={{maxWidth: '70%'}}/>

    return(
    <>  
     <Space className='space' align='center' direction='vertical' style={{'padding-top': '1.25rem'}}> 
        <Form name="basic" onFinish={onFinish} initialValues={{ remember:true }} onFinishFailed={onFinishFailed} autocomplete="off">
        
            <Form.Item name="email" rules={[{ required: true, message: 'Please, insert your email' }]}>
                <Input placeholder='Email'/>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please, insert your password' }]}>
                
                <Input.Password placeholder='Password'/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
      </Space>
      <div style={{display:'flex', justifyContent: 'center'}}>
        {showAlert && alert}
      </div>
    </>
    )
    }    
export default Login