'use client';

import { IoMdMenu } from "react-icons/io";
import Header from "@/app/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
            <title>Aomori Local Guide</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
        <Header />
        {children}
        
        </body>
    </html>
  );
}
