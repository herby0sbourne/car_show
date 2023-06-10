import { Footer, NavBar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Cars Smart',
  description: 'Smart Cart At a Touch',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
