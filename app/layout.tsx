'use client';

import '@/app/global.css'
import Header from "@/app/components/header";
import Footer from './components/footer';

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
    </html>
  );
}
