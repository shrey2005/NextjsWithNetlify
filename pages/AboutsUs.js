import Layout from "../component/Layout"
import Image from 'next/image'
import ProfileImage from '../assets/Images/P1.jpeg'

const AboutUs = ({ name, email, userName,title,street,suite,city,zipcode, ...props }) => {
    return (
        <>
            <Layout pageTitle={title}></Layout>
            <h1 className="title">
                Aboutus Page
            </h1>
            <Image src={ProfileImage} height="300" width="300"></Image>
            <li>Name: {"   " + name}</li>
            <li>Username: {"   " +userName}</li>
            <li>Email: {"    " +email}</li>
            <li>Address: {"    "+street + "," +suite + "," + city + "," + zipcode}</li>
            <p>
                I am a very exciting person to learn new things.
            </p>
        </>
    )
}
export default AboutUs;

export async function getServerSideProps() {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await userData.json();

    return {
        props: {
            title: "Aboutus Page",
            name: data.name,
            email: data.email,
            userName: data.username,
            street: data.address.street,
            suite:data.address.suite,
            city: data.address.city,
            zipcode: data.address.zipcode
        }
    }
}