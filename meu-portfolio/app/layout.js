import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bento Guilherme",
  description: "Estudante de Ciência da Computação na Unicap. Back End e Front End.",
  openGraph: {
    title: "Bento Guilherme",
    description: "Estudante de Ciência da Computação na Unicap. Back End e Front End.",
    url: "https://bento-portfolio-umber-five.vercel.app/",
    siteName: "Bento Guilherme",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" data-theme='light'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
