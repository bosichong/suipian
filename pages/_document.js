import { Html, Head, Main, NextScript } from "next/document";
import SiteNav from '@/components/siteNav';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <SiteNav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
