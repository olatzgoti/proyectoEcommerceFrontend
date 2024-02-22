import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserState'
import { Form, Input, Button, Space, Alert } from 'antd'

const Login = () => {

    const { login } = useContext(UserDataContext) 
    const [ showAlert, setShowAlert ] = useState(false)
    
    const [ alertMessage, setAlertMessage ] = useState('')

    useEffect(() => {
        setTimeout(()=>{
            const foundToken = JSON.parse(localStorage.getItem('token'))
            if(foundToken)
            { setShowAlert(true)
                setAlertMessage('Se ha efectuado el inicio de sesión correctamente')
                navigate('/users/getUser') }}, 1500)},
                [login])      
                /*
                useEffect(() => {
                    if (users === 'email already used') {
                        setShowAlert(true)
                        setAlertMessage('Email ya utilizado, escoge otro')
                    }
                }, [users])
                */

    let navigate = useNavigate()
    const onFinish = async(values) => 
    { console.log('Success', values)
        try {
        await login(values)
        setShowAlert(true)
        setAlertMessage('Ha iniciado sesión correctamente')  
        } catch (error) {
            console.log(error)
        }
    }       
        
    const onFinishFailed = (error) => { console.log("Failed:", error)}

    const handleAlert = () => {
        setShowAlert(false)
    }

    const alert = <Alert message={alertMessage} type="info" showIcon closable onClose={handleAlert}/>

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
        {showAlert && alert}
    </>
    )
    }    
export default Login