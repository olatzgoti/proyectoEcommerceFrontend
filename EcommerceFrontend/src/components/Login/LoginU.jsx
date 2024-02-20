import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//import {userContext} from '../../context/UserState' PENDIENTE
import { Form, Input, Button } from 'antd'

const Login = ()=>{

    const navigate = useNavigate()
    const { login } = useContext(userContext) 

    useEffect(()=>{
        setTimeout(()=>{
            const foundToken = JSON.parse(localStorage.getItem('token'))
            
            if(foundToken){ navigate('/users/getuser') }}, 1500)},[login])      

    const onFinish = (values) =>{ login(values) }       

    const onFinishFailed = (error)=>{ console.log("Failed:", error)

            return
            (
              <div>
                <h1>Login</h1>
                <Form onFinish={onFinish} initialValues={{ remember:true }} onFinishFailed={onFinishFailed} autocomplete="off">
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please, insert your email' }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please, insert your password' }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
					    <Button htmlType="submit">
						    Submit
					    </Button>
				    </Form.Item>
                </Form>
              </div>
            )
    }    
    }

export default Login
