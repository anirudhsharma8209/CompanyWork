import { Fragment } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AUTH } from '../../constant/constant'

const Register = () => {
    const schema = yup.object().shape({
        username: yup.string().required().trim(),
        email: yup.string().email("Should be in email format").required(),
        password: yup.string().min(4).max(32).trim(),
    })
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        try {
            await axios.post(AUTH.REGISTERUSER, data);
            alert("Data successfully inserted");
            navigate('/login')
        } catch (error) {
            alert("Username or mail alread exisit");
        }
    }
    return (
        <Fragment>
            <Container className='bg-zinc-800 text-white mt-32 w-75'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <h1>Register Form : </h1>
                    <button className='bg-indigo-700 hover:bg-indigo-800 p-2 w-50 rounded-lg' >
                        <Link to="/login" className="text-decoration-none text-white  fw-bold">Login : </Link>
                    </button>
                </Container>
                <Form className='bg-white-400' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mt-3'>
                        <Form.Label>User Name : </Form.Label>
                        <Form.Control type="text" aria-invalid={errors.username ? "true" : "false"} placeholder='Enter User Name' {...register("username", { required: true })} />
                        {errors.username?.type === "required" && (
                            <p role="alert" className='text-red-600'>Username is required</p>
                        )}
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>User Email : </Form.Label>
                        <Form.Control type='text' aria-invalid={errors.email ? "true" : "false"} placeholder='Enter Email : ' {...register("email", { required: true })} />
                        {errors.email?.type === "required" && (
                            <p role="alert" className='text-red-600'>Email is required</p>
                        )}
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>User Password : </Form.Label>
                        <Form.Control type="password" aria-invalid={errors.password ? "true" : "false"} placeholder='Enter Password : ' {...register("password", { required: true })} />
                        {errors.password?.type === "required" && (
                            <p role="alert" className='text-red-600'>Password is required</p>
                        )}
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Container className='d-flex justify-content-start'>
                            <button className='bg-blue-600 rounded-lg p-2 w-50'>Submit</button>
                        </Container>
                    </Form.Group>
                </Form>
            </Container>
        </Fragment>
    )
}

export default Register