import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickPal | AI Customer Support Chatbot for Any Website",
  description:
    "QuickPal is an embeddable AI customer support chatbot that helps businesses automate conversations, resolve queries instantly, and provide seamless 24/7 support.",
  keywords: [
    "QuickPal",
    "AI customer support",
    "AI chatbot",
    "website chatbot",
    "customer support automation",
    "embeddable chatbot",
    "SaaS support tool",
    "Next.js AI chatbot",
    "customer service AI"
  ],
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://soumojitbanerjee.com",
    },
  ],
  creator: "Soumojit Banerjee",
  publisher: "QuickPal",
  icons: {
    icon: "/logo.svg",
  },
  other: {
    github: "https://github.com/yourusername/quickpal",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={font.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
