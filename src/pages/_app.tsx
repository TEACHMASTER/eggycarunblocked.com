import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Script from 'next/script'
import Head from 'next/head';
import { useRouter } from 'next/router';

    
  const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',') || ['en']; // 默认语言为 'en'
  
  const getCanonicalUrl = (router:any) => {
  const { asPath } = router;
    return `${process.env.NEXT_PUBLIC_HOST}${asPath.split('?')[0]}`; // 获取完整路径，不带查询参数
  };

  const getAlternateLinks = (router:any) => {
    const { asPath, locale } = router;

    return locales.map((lang) => ({
      hreflang: lang,
      href: `${process.env.NEXT_PUBLIC_HOST}/${lang}${asPath.split('?')[0]}`,
    }));
};


export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();

  const canonicalUrl = getCanonicalUrl(router);
  const alternateLinks = getAlternateLinks(router);


  return (
    <Layout>
      <Head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST}/icon.svg`} />

        {/* Canonical 标签 */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang 标签 */}
        {alternateLinks.map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
        ))}

      </Head>
      <Component {...pageProps} />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B4P7XCJTG6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B4P7XCJTG6');
        `}
      </Script>
    </Layout>
  );
}
