import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteUrl } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";

const livvic = Livvic({
  variable: "--font-livvic",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const livvicItalic = Livvic({
  variable: "--font-livvic-italic",
  weight: ["500", "700"],
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const homeTitle = "myteam — Find the best talent";
const description =
  "myteam helps companies build dynamic, high-performing teams from a global network of experienced professionals.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: "%s | myteam" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#014E56",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${livvic.variable} ${livvicItalic.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
