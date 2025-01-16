import { Html, Head, Main, NextScript } from "next/document";
import SiteNav from '@/components/siteNav';
import Footer from '@/components/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js?id=3KxgU3iEpBHdRBHl&ck=3KxgU3iEpBHdRBHl"></script>
      </Head>
      <body className="antialiased">
        <SiteNav />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
