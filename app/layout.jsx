import React from "react";
import { Roboto } from "@next/font/google";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: "latin",
});
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Los Linces te guían</title>
      </head>
      <body className={font.className}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
