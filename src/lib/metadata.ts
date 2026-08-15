import type { Metadata } from "next";

const siteName = "myteam";

const images = [
  {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "The myteam homepage, headlined “Find the best talent”.",
  },
];

type PageMetadata = {
  title: string;
  shareTitle: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  shareTitle,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images,
    },
  };
}
