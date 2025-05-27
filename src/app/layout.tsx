import { CartProvider } from "@/cart-context"; // Matches src/cart-context.ts
import "@/styles/globals.css";

export const metadata = {
  title: "Julie's Fuel Stop",
  description: "A market and deli experience",
  generator: "v0.dev"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
