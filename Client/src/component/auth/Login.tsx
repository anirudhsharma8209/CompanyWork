import { Fragment } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {AUTH} from '../../constant/constant';
import { loginUserAuth } from '../../api/authApi';

const Login = (props: any) => {    
    const schema = yup.object().shape({
        username : yup.string().required().trim(),        
        password: yup.string().min(4).max(32).required("Required ").trim(),
    })
    let { register, formState: { errors }, handleSubmit } = useForm({ resolver : yupResolver(schema)});
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        try {
            let response = await axios.post(AUTH.LOGINUSER, data);              
            Cookie.set("token", response.data.token);              
            props.setGiveAccess(true);
            navigate('/');
        } catch (error) {
            alert("User Not found......");
            props.setGiveAccess(false);
        }
    }
    // const onSubmit = (data : any) => {
    //     // if(loginUserAuth(data)){
    //     //     props.setGiveAccess(false)
    //     //     }else {
    //     //     navigate("/")
    //     //     props.setGiveAccess(true);
    //     // }
    //     console.log(loginUserAuth(data));
    // }
    return (
        <Fragment>
            <Container className='w-75 mt-32'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <h1>Login Form : </h1>
                    <button className='bg-blue-700 p-2 rounded-lg w-50' >
                        <Link to="/register" className="text-decoration-none text-white  fw-bold">Signup</Link>
                    </button>
                </Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mt-3'>
                        <Form.Label>User Name : </Form.Label>
                        <Form.Control type='text' aria-invalid={errors.username ? "true" : "false"} placeholder='Enter Your User Name ' {...register('username', { required: true })} />
                        {errors.username?.type === "required" && (
                            <p role="alert" className='text-red-600'>User name is required</p>
                        )}
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>User Password :</Form.Label>
                        <Form.Control type="password" aria-invalid={errors.password ? "true" : "false"} placeholder='Enter Your Password : ' {...register("password", { required: true })} />
                        {errors.password?.type === "required" && (
                            <p role="alert" className='text-red-600'>Password is required</p>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Container className='d-flex justify-content-start mt-3'>
                            <button className='bg-indigo-700 p-2 rounded-lg w-50'>Submit</button>
                        </Container>
                    </Form.Group>
                </Form>
            </Container>
        </Fragment>
    )
}

export default Login