import Layout from "../component/Layout"
import LoginForm from "../component/LoginForm";

const Login = () => {
    return (
        <div className="Login_Page">
            <Layout pageTitle="Login Page"></Layout>
            <LoginForm></LoginForm>
        </div>
    );
}
export default Login