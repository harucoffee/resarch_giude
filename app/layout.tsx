'use client';

import '@/app/global.css'
import Header from "@/app/components/header";
import Footer from './components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-12VGDNHVEC"/>
    </html>
  );
}
