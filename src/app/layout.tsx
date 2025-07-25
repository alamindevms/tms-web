import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import "./assets/style/main.css";
import Header from './components/Header';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}