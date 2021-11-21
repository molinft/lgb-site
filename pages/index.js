import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/index.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className={styles.title}>
        Let&apos;s Go Brandon NFTs
      </header>

      <p className={styles.description}>
        A fun NFT project created to protect our freedoms
      </p>

      <Image
        src="/images/logo.png"
        height={250}
        width={250}
        className={utilStyles.roundedImage}
        alt=""
      />

      <p className={styles.description}>
        We have just started<br></br>
        Join the community and contribute to our project:
      </p>

      <div style={{ display: 'inline-block' }}>
        <div style={{ padding: 10, display: 'inline-block' }}>
          <Link href="https://twitter.com/GoBrandonNFT">
            <a target="_blank"><Image
              src="/images/twitter.png"
              height={50}
              width={50}
              alt=""
            /></a>
          </Link>
        </div>

        <div style={{ padding: 10, display: 'inline-block' }}>
          <Link href="https://discord.gg/S6F4cEurED">
            <a target="_blank"><Image
              src="/images/discord.png"
              height={50}
              width={50}
              alt=""
            /></a>
          </Link>
        </div>
      </div>

    </Layout>
  )
}