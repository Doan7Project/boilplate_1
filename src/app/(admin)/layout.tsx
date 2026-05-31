
export default function RootAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-auto">
            <p className="text-center">&copy; 2024 My Application. All rights reserved.</p>
        </footer>
        </body>
    </html>
  );
}
