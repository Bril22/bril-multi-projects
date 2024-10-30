import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar1Component } from "@ui/components/navbar"
import { LayoutTemplate } from "@ui/components/layout"
import { Footer1Component } from "@ui/components/footer"
import { footerList, socialMedia } from "@/constants/footer";
import { mainMenu } from "@ui/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bernice Claresta",
  description: "Interior Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutTemplate title="Bernice Claresta" socialMedia={socialMedia}>
          <div className="flex-none hidden md:block">
            <Navbar1Component menu={mainMenu} />
          </div>
          {children}
          <Footer1Component
            title="Bernice Claresta"
            footerList={footerList}
            socialMedia={socialMedia}
            description="A descriptive paragraph that tells clients how good you are and proves that you are the best choice."
            copyright="2024 Bernice Claresta. All rights reserved."
          />
        </LayoutTemplate>
      </body>
    </html>
  );
}
