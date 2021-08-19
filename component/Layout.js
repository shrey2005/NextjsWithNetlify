import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <section>
                <Header></Header>
                <div>{children}</div>
            </section>
            <footer>Built by me!</footer>
        </>
    )
}