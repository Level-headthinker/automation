import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tapzero — Zero Friction. Total Automation.",
    template: "%s | Tapzero",
  },
  description:
    "AI-powered operating systems for service businesses. Automate operations, capture every lead, and grow faster with AI agents built for clinics, restaurants, real estate, and more.",
  keywords: [
    "AI chatbot",
    "clinic automation",
    "WhatsApp AI",
    "AI appointment booking",
    "business automation Pakistan",
    "AI receptionist",
    "ClinicBot",
  ],
  authors: [{ name: "Tapzero" }],
  creator: "Tapzero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tapzero.ai",
    title: "Tapzero — Zero Friction. Total Automation.",
    description:
      "AI-powered operating systems for clinics, restaurants, and service businesses.",
    siteName: "Tapzero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapzero — Zero Friction. Total Automation.",
    description:
      "AI-powered operating systems for clinics, restaurants, and service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
