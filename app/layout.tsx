import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const spaceMono = Space_Grotesk({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: "Buck's Card",
  description: 'Contact Buck Tower',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-black ${spaceMono.className} bg-white flex justify-center min-w-full`}
      >
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-255XMHQZ6B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-255XMHQZ6B');
        `}
      </Script>
      <Analytics />
    </html>
  );
}
