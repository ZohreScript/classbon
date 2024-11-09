import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-200 h-10 flex justify-center items-center"> HEADER</header>
        <div className="flex-1">{children}</div>
        <footer className="bg-gray-200 h-10 flex justify-center items-center"> FOOTER</footer>
      </body>
    </html>
  );
}
