import { cn } from "@ui/lib/utils";
import { ThemeProvider } from "@ui/components/theme-provider";
import { ModeToggle } from "@ui/components/theme-toggle";
import "@ui/styles/globals.css";

import { Public_Sans as FontSans } from "next/font/google";
import SessionProvider from "./providers/session-provider";
export const fontSans = FontSans({
  subsets: ["latin"],
});
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
        <SessionProvider>
          <ThemeProvider attribute="class">
            <header className="flex justify-end container py-4">
              <ModeToggle></ModeToggle>
            </header>
            <main className="pb-6">{children}</main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
