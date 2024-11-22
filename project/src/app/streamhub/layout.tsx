import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "StreamHub",
    description: "Best streaming platform in the world",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{metadata.title}</title>
            <link rel="icon" href="/images/LogoStreamHub.png"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
