import { ThemeProvider } from "@ui/components/theme-provider";
import { ModeToggle } from "@ui/components/theme-toggle";
import { cn } from "@ui/lib/utils";
import "@ui/styles/globals.css";

import { Toaster } from "@ui/components/toaster";
import { Metadata } from "next";
import { Public_Sans as FontSans } from "next/font/google";
import RootProviders from "./providers";
export const fontSans = FontSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashrat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.className
        )}
      >
        <RootProviders>
          <ThemeProvider attribute="class">
            <header className="flex justify-end container py-4">
              <ModeToggle></ModeToggle>
            </header>
            <main className="pb-6">{children}</main>
            <Toaster></Toaster>
          </ThemeProvider>
        </RootProviders>
      </body>
    </html>
  );
}
