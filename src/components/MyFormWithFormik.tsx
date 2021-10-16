import { withFormik, Form, Field } from "formik";

const MyFormWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    address: {
      city: {
        name: '',
      }
    }
  }),
  handleSubmit: values => {
    console.log(values);
  }
})

const Form1 = () => (
  <Form>
    <Field type="email" name="email" />
    <Field type="password" name="password" />
    <Field type="address.city.name" name="address.city.name" />
    <button>
      Submit
    </button>
  </Form>
)

export default MyFormWithFormik(Form1);