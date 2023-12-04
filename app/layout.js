// import { Inter } from "next/font/google";
import "./globals.css";
// import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-b from-red-100 to-orange-100">
                {children}
                {/* <BottomNavbar /> */}
            </body>
        </html>
    );
}