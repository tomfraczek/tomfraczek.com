import { Roboto } from 'next/font/google';
import { Header } from '@/app/components/header';
import { HamburgerMenuProvider } from '@/app/context';
import StyledComponentsRegistry from '@/lib/registry';

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
        <HamburgerMenuProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </HamburgerMenuProvider>
      </body>
    </html>
  );
}
