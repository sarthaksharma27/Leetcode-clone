import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Create Next App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.png' />
        <meta name='description' content='web application that contains LeetCode problems and video solutions' />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
