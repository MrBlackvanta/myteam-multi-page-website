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

const siteName = "myteam";
const description =
  "myteam helps companies build dynamic, high-performing teams from a global network of experienced professionals.";
const siteUrl = "https://vanta-myteam-multi-page-website.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "myteam — Find the best talent",
    template: "%s | myteam",
  },
  description,
  openGraph: {
    title: "myteam — Find the best talent",
    description,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "myteam — Find the best talent",
    description,
  },
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
      <body>{children}</body>
    </html>
  );
}
