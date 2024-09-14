// pages/_app.tsx

import '../styles/globals.css'; // Make sure you have your global styles
import { Poppins } from 'next/font/google';
import type { AppProps } from 'next/app';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700'], // You can choose the weights you need
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  );
}
