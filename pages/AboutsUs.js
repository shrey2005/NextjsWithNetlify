import Layout from "../component/Layout"

const AboutUs = ({ title, description, ...props }) => {
    return (
        <>
            <Layout pageTitle={title} description={description}></Layout>
            <h1 className="title">Content of about us Page</h1>
            <p>
                I am a very exciting person.
            </p>
        </>
    )
}
export default AboutUs;

export async function getStaticProps() {
    const configData = await import('../siteconfig.json')

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description
        }
    }
}