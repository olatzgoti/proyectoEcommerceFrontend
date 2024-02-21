import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserState'
import { Form, Input, Button } from 'antd'

const Login = () => {

    const navigate = useNavigate()
    const { login } = useContext(UserDataContext) 

    useEffect(() => {
        setTimeout(()=>{
            const foundToken = JSON.parse(localStorage.getItem('token'))
            if(foundToken)
            { navigate('/users/getUser') }}, 1500)},
            [login])      

    const onFinish = (values) => { login(values) }       
    const onFinishFailed = (error) => { console.log("Failed:", error)}

    return(
    <>  
        <Form onFinish={onFinish} initialValues={{ remember:true }} onFinishFailed={onFinishFailed}autocomplete="off">
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
    </>
    )
    }    
export default Login