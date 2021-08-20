import Head from 'next/head';
import { attributes } from '../content/MyProfile.md';

const MyProfile = () => {
    const { username, company, devloper } = attributes
    return (
        <div className="MyProfile_Page">
            <Head>
                <title>My Profile Page</title>
                <div className="MyProfile_Section">
                    <h2>{username}</h2>
                    <p>{company}</p>
                    <p>{devloper}</p>
                </div>
            </Head>
        </div>
    )
}
export default MyProfile