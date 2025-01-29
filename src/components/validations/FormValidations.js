import { useFormik } from "formik"
import * as Yup from 'yup'

const loginValidation = () => useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required").min(6, "Password should be atleast 6 character long")
    })
})


export default loginValidation;