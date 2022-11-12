import React from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Los Linces te guían</title>
      </head>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
        </body>
    </html>
  );
}
