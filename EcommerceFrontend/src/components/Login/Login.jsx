import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserState'
import { Form, Input, Button, Space } from 'antd'

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
    </>
    )
    }    
export default Login