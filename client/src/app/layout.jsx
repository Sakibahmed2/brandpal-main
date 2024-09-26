import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Providers from "@/libs/providers/Providers";

// const inter = Inter({ subsets: ["latin"] });

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["cyrillic"] });

export const metadata = {
  title: "BRANDPAL",
  description:
    "Make your marketing something show off. And effective strategies your need and branding goal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={ubuntu.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
