import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {

    const initialFormValues = {
        name: '',
        lastName: "",
        email: '',
        age:''
    }



    const submitedValue = (value) => {
        console.log('>>>>>>>>>>>>>.', value)
    }


    let schema = yup.object().shape({
        name: yup.string().required('rreuie').min(3).max(8),
        lastName: yup.string().required('lastNmae is required').min(2).max(4),
        email:yup.string().required('Required').email('invalid email'),
        age:yup.number().required('Required!').max(30)
    });


    return (<div>
        <Formik initialValues={initialFormValues}
            onSubmit={((value) => { submitedValue(value) })}
            validationSchema={schema}       >
            <Form>
                <div className="col-md-4">
                    <Field type="text"
                        name="name"
                        placeholder="Enter Your FirstNmae "
                        className='form-control' />
                    <p className="text-danger">
                        {<ErrorMessage name='name' />}
                    </p>

                </div>

                <div className="col-md-4">
                    <Field type="text"
                        name="lastName"
                        placeholder="Enter Your lastName "
                        className='form-control' />
                    <p className="text-danger">
                        {<ErrorMessage name='lastName' />}
                    </p>

                </div>

                <div className="col-md-4">
                    <Field type="text"
                        name="email"
                        placeholder="Enter Your email "
                        className='form-control' />
                    <p className="text-danger">
                        {<ErrorMessage name='email' />}
                    </p>

                </div>

                <div className="col-md-4">
                    <Field type="text"
                        name="age"
                        placeholder="Enter Your age "
                        className='form-control' />
                    <p className="text-danger">
                        {<ErrorMessage name='age' />}
                    </p>

                </div>

                <button type="submit" className="btn btn-primary">submit</button>



            </Form>
        </Formik>
    </div>
    )
}
export default SignUp