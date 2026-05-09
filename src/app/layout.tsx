import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import { Provider } from "@/components/chakra-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VDL Group | Ecommerce POS",
  description: "Tienda especializada en Captura de Datos y Punto de Venta",
};

const fontVars = `${inter.variable} ${barlow.variable}`;

const bodyClass =
  "min-h-full flex flex-col overflow-x-hidden bg-zinc-100 text-zinc-900 antialiased [font-family:var(--font-inter)]";

const htmlClass = `${fontVars} h-full`;

const headingStyle = "[&_*:is(h1,h2,h3,h4)]:[font-family:var(--font-barlow)]";

const trackingFix = "[text-rendering:optimizeLegibility]";

const smoothing = "[-webkit-font-smoothing:antialiased]";

const finalBodyClass = `${bodyClass} ${headingStyle} ${trackingFix} ${smoothing}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={htmlClass} suppressHydrationWarning>
      <body className={finalBodyClass}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
