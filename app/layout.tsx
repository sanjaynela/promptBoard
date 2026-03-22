import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "PromptBoard",
  description:
    "PromptBoard is a polished frontend demo showing image-guided design and browser-aware iteration for coding-agent workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--pb-background)] font-sans text-[var(--pb-foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
