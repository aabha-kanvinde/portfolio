import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aabha — Product Designer",
  description:
    "Portfolio of Aabha, a product designer at Adobe creating tools for other creatives.",
  openGraph: {
    title: "Aabha — Product Designer",
    description:
      "Portfolio of Aabha, a product designer at Adobe creating tools for other creatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1" style={{ paddingTop: "var(--space-8)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
