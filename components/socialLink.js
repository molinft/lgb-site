import Image from 'next/image'
import Link from 'next/link'
import styles from './socialLink.module.css'

export default function SocialLink({ href, imgSrc }) {
    return (
        <div className={styles.socialLink}>
            <Link href={href}>
                <a target="_blank"><Image
                    src={imgSrc}
                    height={50}
                    width={50}
                    alt=""
                /></a>
            </Link>
        </div>
    )
}