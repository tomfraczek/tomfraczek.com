import { Roboto } from 'next/font/google';

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
