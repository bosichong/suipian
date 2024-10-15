import { Html, Head, Main, NextScript } from "next/document";
import SiteNav from '@/components/siteNav';
import Footer from '@/components/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <SiteNav />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
