'use client'; // Mark as a Client Component

import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import { Provider } from "react-redux"; // Import Provider
import {store} from "./store/store"; // Import Redux store
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Provider store={store}>
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
