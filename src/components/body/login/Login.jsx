import './Login.css'
import { useFormik } from "formik"
import * as Yup from 'yup'

const Login = () => {
    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required").min(6, "Password should be at least 6 characters long")
        }),
        onSubmit: values => {
            console.log('Form data', values);
        }
    });

    return <div id="login-container">
        <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="Login Image" class="figure-img img-fluid rounded" />
        </div>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username" className='form form-label'>Username</label>
                    <input type="text" id="username" className={`form form-control ${formik.errors.username && 'is-invalid'}`} placeholder='UserName' onChange={formik.handleChange} />
                    {
                        formik.errors.username && <p className='text text-danger'>{formik.errors.username}</p>
                    }
                </div>
                <div className='mb-3'>
                    <label htmlFor="password" className='form form-label'>Password</label>
                    <input type="password" id="password" className={`form form-control ${formik.errors.password && 'is-invalid'}`} placeholder='Password' onChange={formik.handleChange} />
                    {
                        formik.errors.password && <p className='text text-danger'>{formik.errors.password}</p>
                    }
                </div>
                <p>Not a User? <a href="/register">Register</a> </p>

                <div className='mb-3'>
                    <button className='btn btn-dark'>Login</button>
                </div>
            </form>
        </div>
    </div>
}

export default Login