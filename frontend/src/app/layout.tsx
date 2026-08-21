import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StatusPulse",
  description: "StatusPulse is a lightweight, self-hosted API health monitoring platform and status page engine. It continuously checks endpoint availability, tracks response latency, and generates real-time dashboards to ensure service reliability.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
