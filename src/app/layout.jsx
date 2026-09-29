import { Bebas_Neue, Rajdhani, Inter, Orbitron } from "next/font/google";
import ClientLayout from "./Components/ClientLayout";
import './globals.css'


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "VYRON ESPORTS",
  description: "Explore VYRON, know the team.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bebas.variable}
        ${rajdhani.variable}
        ${inter.variable}
        ${orbitron.variable}
        h-full antialiased`}
    >
      <body className="relative">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
