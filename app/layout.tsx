//^ ROOT LAYOUT PAGE
import type { Metadata } from "next";
import "./../css/globals.css";
import PrelineScript from "./Components/PrelineScript";
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
      <html lang="en">
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </RecoilRootWrapper>
  );

}

