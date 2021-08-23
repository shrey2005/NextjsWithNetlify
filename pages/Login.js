import Layout from "../component/Layout"
import LoginForm from "../component/LoginForm";

const Login = () => {
    return (
        <div className="Login_Page">
             <h1 className="title">Login Page</h1>
            <Layout pageTitle="Login Page"></Layout>
            <LoginForm></LoginForm>
        </div>
    );
}
export default Login