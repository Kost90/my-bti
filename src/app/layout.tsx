import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: "My BTI",
  description: "Created technical documents",
};

export const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CssBaseline/>
        <div className="layout">
          <Header />
          <main className="main">
            {children}
            <Footer/>
          </main>
        </div>
      </body>
    </html>
  );
}
