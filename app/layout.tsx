import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Daniel Sun - Portfolio",
  description: "MIT Computer Science graduate passionate about building impactful projects and solving interesting problems.",
  keywords: "Daniel Sun, MIT, Computer Science, Portfolio, Software Engineer, Web Developer",
  authors: [{ name: "Daniel Sun" }],
  openGraph: {
    title: "Daniel Sun - Portfolio",
    description: "MIT Computer Science graduate passionate about building impactful projects",
    url: "https://danieldsun.com",
    siteName: "Daniel Sun Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
