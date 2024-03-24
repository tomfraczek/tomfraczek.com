import { Roboto } from 'next/font/google';
import { Header } from '@/app/components/header';

const roboto = Roboto({
  weight: ['400', '700'],
  preload: false,
});

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
