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
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Antonio. I’m a software developer from Brazil.</p>
        <p>You can send me an email at <Link href="mailto:antonio@dottori.in"><a>antonio@dottori.in</a></Link>.</p>
        <p>Check out my résume <Link href="https://drive.google.com/file/d/1baFXHyGdhQ00zt6VYqNjcL81ID7trJzk/view?usp=sharing"><a>here</a></Link>.</p>
      </section>
    </Layout>
  )
}