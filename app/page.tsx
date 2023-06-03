import Head from 'next/head';
import { Space_Grotesk, Hanken_Grotesk } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { IoDownload } from 'react-icons/io5';
import { ContactCard } from '@/components/ContactCard';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Buck&apos;s Contact</title>
        <meta
          name="description"
          content="Downloadable contact card for Buck Tower"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ContactCard />
        <a href="/vcard.vcf" className={styles.button}>
          <IoDownload />{' '}
          <span className={hankenGrotesk.className}>Download vCard</span>
        </a>
      </main>
    </>
  );
}
