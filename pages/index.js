import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './index.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import SocialLink from '../components/socialLink'

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

      <div>
        <SocialLink
          href="https://twitter.com/GoBrandonNFT"
          imgSrc="/images/twitter.png"
        />
        <SocialLink
          href="https://discord.gg/S6F4cEurED"
          imgSrc="/images/discord.png"
        />
      </div>

    </Layout>
  )
}