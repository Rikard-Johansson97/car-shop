import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-bg '>
        <div className='max-w-[1400px] mx-auto'>
          <Header />
        </div>

        {children}
      </body>
    </html>
  );
}
