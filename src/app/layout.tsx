import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw 'error message';
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center h-20">HEADER</header>
        <div className="flex-1 flex">
        {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center h-20">FOOTER</footer>
      </body>
    </html>
  );
}
