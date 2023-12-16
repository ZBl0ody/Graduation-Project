import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/component/NavBar/NavBar";
import Foot from "@/component/Foot/Foot";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CFP Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <div className="flex flex-col justify-between">
          <NavBar />
          {children}
          <Foot />
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}