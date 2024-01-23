import { Metadata } from "next";
import "../styles/global.css";


export const metadata: Metadata = {
  title: "INS",
  description: "INS Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
