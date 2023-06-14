import styles from './ContactCard.module.css';
import { Space_Grotesk, Hanken_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export function ContactCard() {
  return (
    <div
      className={styles.card}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img alt="QR code" src="frame.png" style={{ width: 120 }} />
        <div style={{ textAlign: 'right' }}>
          <h1 className={[spaceGrotesk.className, styles.name].join(' ')}>
            Buck Tower
          </h1>
          <p className={hankenGrotesk.className}>Software Engineer</p>
          <a
            href="https://bucktower.net"
            className={[hankenGrotesk.className, styles.website].join(' ')}
          >
            bucktower.net
          </a>
          <br />
          <a
            href="https://twitter.com/bucktower"
            className={[hankenGrotesk.className, styles.website].join(' ')}
          >
            @bucktower
          </a>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end'
        }}
      >
        <div>
          <p className={hankenGrotesk.className}>832-358-5916</p>
          <p className={hankenGrotesk.className}>buck@bucktower.net</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p className={hankenGrotesk.className}>San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
}
