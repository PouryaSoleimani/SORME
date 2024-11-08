"use client"
//^ ROOT LAYOUT PAGE
import type { Metadata } from "next";
import "./../css/globals.css";
import RecoilRootWrapper from "@/Recoil/RecoilRootWrapper";
import { Providers } from "./providers";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <RecoilRootWrapper>
      <html lang="en" className="max-w-[1580px] mx-auto">
        <head>
          <title>SORME.IR</title>
          <link rel="shortcut icon" href="/Favicon_.jpg" type="image/x-icon" />
          <meta name="description" content="Cosmetic Products and Accessories Online-Shop , Created with Next.js and React.js" />
        </head>
        <body className="max-w-[1580px] mx-auto">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </RecoilRootWrapper>
  );

}

