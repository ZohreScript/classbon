import "./globals.css";
import { Figtree} from 'next/font/google';
import localFont from 'next/font/local'

const figtree =  Figtree({
  display:'swap',
  subsets:["latin"],
  weight:['300','400','500','600','700','800','900'],
  variable:"--font-figtree"

})

const iranYekan = localFont({
  src: [
    {
      path:'../../public/fonts/iranYekan/IRANYekanWebThin.woff2',
      weight:'100',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranYekan/IRANYekanWebLight.woff2',
      weight:'300',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranYekan/IRANYekanWebRegular.woff2',
      weight:'400',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranYekan/IRANYekanWebMedium.woff2',
      weight:'500',
      style:'normal',
    },
    {
      path:'../../public/fonts/iranYekan/IRANYekanWebBold.woff2',
      weight:'700',
      style:'normal',
    },

  ]
  ,
  variable:'--font-iranYekan'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  dir="rtl" className={`dark${figtree.variable} ${iranYekan.variable}`}>
      <body className="flex flex-col min-h-screen font-bold uppercase bg-white text-base-100 dark:bg-base-100 dark:text-base-content" >
        <header className="bg-gray-200 flex items-center justify-center text-3xl h-20">HEADER</header>
        <div className="flex-1 flex  justify-center items-center">
        {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">FOOTER</footer>
      </body>
    </html>
  );
}