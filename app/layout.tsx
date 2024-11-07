//^ ROOT LAYOUT PAGE
import type { Metadata } from "next";
import "./../css/globals.css";
import RecoilRootWrapper from "./Recoil/RecoilRootWrapper";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SORME.IR",
  description: "Cosmetic Products and Accessories Online-Shop , Created with Next.js and React.js",
  icons: {
    icon: '/Favicon_.jpg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <RecoilRootWrapper>
      <html lang="en" className="max-w-[1580px] mx-auto">
        <body className="max-w-[1580px] mx-auto">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </RecoilRootWrapper>
  );

}

