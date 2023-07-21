import Head from "next/head";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // console.log = () => {}
    console.log("version : 230523.01");
  }, []);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="TnojistZrc4xW12vknTWHjW2pUuaUQo7U9MY4r5YfI0"
        />
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="708f6971-e88a-4c35-a633-40de29c26d4a"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: ` (function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3465332,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7LL8LV');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
