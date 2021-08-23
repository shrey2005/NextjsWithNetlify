import Layout from "../component/Layout";
import Head from 'next/head';
import Image from 'next/image'
import Profile2 from '../assets/Images/P2.jpeg';
import Profile1 from '../assets/Images/P1.jpeg';
import { attributes } from '../content/MyProfile.md';

const MyProfile = () => {
    let { username, company, devloper, designation, thumbnail, address, signin, todaydate, comment } = attributes
    return (
        <div className="MyProfile_Page">
            <Layout pageTitle="Profile Page"></Layout>
            <div className="MyProfile_Section">
                <h1 className="title">Profile Page</h1>
                <p>SignIn {signin}</p>
                <p>Date {todaydate}</p>
                <p>{username}</p>
                <p>{company}</p>
                <p>{devloper}</p>
                <p>{designation}</p>
                <p>{address.streetNo + ", " + address.apartment + ", " + address.area + ", " + address.city + ", " + address.state}</p>
                <p>{comment && comment}</p>
                <Image src={thumbnail} className="thumbnail" height="300" width="300"></Image>
            </div>
        </div>
    )
}
export default MyProfile