import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/home.css" />
        <link rel="stylesheet" href="/assets/css/footer.css  " />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7LL8LV"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
