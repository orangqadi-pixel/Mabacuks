import { Caveat, Lobster, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Foooter from "@/components/Foooter";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-oswald",
});
const caveat = Caveat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-caveat",
});
const lobster = Lobster({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-lobster",
});

export const metadata = {
	title: "Happy Birthday beibb",
	description: "A web page to celebrate visianty birthday",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${oswald.variable} ${lobster.variable} ${caveat.variable}  antialiased overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}
