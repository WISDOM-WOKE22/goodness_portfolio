import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/themeProvider";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goodness Woke | Technical Writer | API Documentation | Product Documentation",
  description: "Experienced Technical and Documentation writer with a talent for simplifying complex ideas. Multiple publications credits and adaptable writing style. Let me help you create content that engages and informs your audience.",
  keywords: [
    "Web Development",
    "Technical Writing",
    "Technical Writer",
    "API Documentation",
    "Product Documentation",
    "Serverless",
    "SEO Writing",
    "Software Engineer",
    "Frontend Developer",
    "Backend developer"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Goodness Woke | Technical Writer | API Documentation | Product Documentation",
    description: "Experienced Technical and Documentation writer with a talent for simplifying complex ideas. Multiple publications credits and adaptable writing style. Let me help you create content that engages and informs your audience.",
    type: "website",
    locale: "en_US",
    siteName: "Goodness Woke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodness Woke | Technical Writer | API Documentation | Product Documentation",
    description: "Experienced Technical and Documentation writer with a talent for simplifying complex ideas. Multiple publications credits and adaptable writing style. Let me help you create content that engages and informs your audience.",
    creator: "@shutter_talesss"
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
