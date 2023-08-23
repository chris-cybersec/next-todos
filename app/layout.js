import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-todo-with-mongodb || chris-cybersec.dev",
  description:
    "This is a simple dockerized todos App using nextjs 13 and mongodb.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Suspense fallback={"Loading ..."}>
            <Header />
          </Suspense>
        </header>
        <main>{children}</main>
        <footer>&copy;{new Date().getFullYear()} All rights reserved.</footer>
      </body>
    </html>
  );
}
