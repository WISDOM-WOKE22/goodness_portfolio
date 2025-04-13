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
  description: "Technical/Documentation Writer, has experience creating content and materials that ease onboarding into software development for beginners and enthusiasts.",
  keywords: [
    "Web Development",
    "Technical Writing",
    "Technical Writer",
    "API Documentation",
    "Product Documentation",
    "Serverless",
    "Software Engineer",
    "Frontend Developer",
    "Backend developer"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Goodness Woke | Technical Writer | API Documentation | Product Documentation",
    description: "Technical/Documentation Writer, has experience creating content and materials that ease onboarding into software development for beginners and enthusiasts.",
    type: "website",
    locale: "en_US",
    siteName: "Goodness Woke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodness Woke | Technical Writer | API Documentation | Product Documentation",
    description: "Technical/Documentation Writer, has experience creating content and materials that ease onboarding into software development for beginners and enthusiasts.",
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
