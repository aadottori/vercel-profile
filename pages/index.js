import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="container">
        <Link href="https://github.com/aadottori"><a><img src="images/icon_github.jpg" width="40" height="40" /></a></Link>
        <div className="space"></div>
        <Link href="https://www.linkedin.com/in/antoniodottori/"><a><img src="images/icon_linkedin.jpg" width="40" height="40" /></a></Link>
        <div className="space"></div>
        <Link href="mailto:antonio@dottori.in"><a><img src="images/icon_email.jpg" width="40" height="40" /></a></Link>

      </div>

      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Antonio. I’m a Python and JS back-end developer. Currently pursuing a degree in Electrical Engineering at Universidade Federal do Rio de Janeiro and working at an asset management company, Navi Capital.</p>
        <p>You can send me an email at <Link href="mailto:antonio@dottori.in"><a>antonio@dottori.in</a></Link>.</p>
        <p>Check out my résume <Link href="https://drive.google.com/file/d/1baFXHyGdhQ00zt6VYqNjcL81ID7trJzk/view?usp=sharing"><a>here</a></Link>.</p>
      </section>
    </Layout>
  )
}