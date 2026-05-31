import Footer from "@/src/presentation/layouts/footer";
import Header from "@/src/presentation/layouts/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
