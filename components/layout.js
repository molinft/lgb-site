import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Let\'s Go Brandon NFTs'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="The NFT project that finally did it!" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/logo.png" />
                <meta property="og:url" content="https://www.letsgobrandonnft.xyz" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}