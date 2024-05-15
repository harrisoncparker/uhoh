import Header from "@/components/header"
import Footer from "@/components/footer"

import "./globals.css";

export const metadata = {
  title: "Uh Oh",
  description: "An all new comedy short about the highs and woes of unethical tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wve7nip.css" />
      </head>
      <body className="bg-brand-light text-brand-dark text-xl sm:text-2xl font-body pt-1">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
