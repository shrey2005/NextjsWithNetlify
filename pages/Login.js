import { Form, Input, Button, Checkbox } from 'antd';
import Layout from "../component/Layout"

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="Login_Page">
            <Layout pageTitle="Login Page"></Layout>
            <h1 className="title">Login Page</h1>
            <form name="simpleContactForm" method="POST" data-netlify="true" id="simple-contact-form" className="contact-form">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    );
}
export default Login