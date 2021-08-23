import Head from 'next/head';
import Image from 'next/image'
import Profile2 from '../assets/Images/P2.jpeg';
import Profile1 from '../assets/Images/P1.jpeg';
import { attributes } from '../content/MyProfile.md';

const MyProfile = () => {
    let { username, company, devloper, designation, thumbnail, address } = attributes
    console.log("Image Url : ", thumbnail, address);
    return (
        <div className="MyProfile_Page">
            <Head>
                <title>My Profile Page</title>
            </Head>
            <div className="MyProfile_Section">
                <h1 className="title">Content of Profile Page</h1>
                <h2>{username}</h2>
                <p>{company}</p>
                <p>{devloper}</p>
                <p>{designation}</p>
                <Image src={thumbnail} className="thumbnail" height="300" width="300"></Image>
                <p>{address.streetNo + ", " + address.apartment + ", " + address.area + ", " + address.city + ", " + address.state}</p> 
                {/* <img className="thumbnail" width={80} height={100} src={thumbnail} alt=""/>  */}
            </div>
        </div>
    )
}
export default MyProfile