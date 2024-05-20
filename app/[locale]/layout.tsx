import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import TranslationsProvider from "@/lib/TranslationsProviders";
import initTranslations from "../i18n";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

export const metadata = {
  title: "Dex",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18nNamespaces = ["common"];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="min-h-screen bg-background ">
        <Providers>
          <TranslationsProvider
            locale={locale}
            resources={resources}
            namespaces={i18nNamespaces}
          >
            <Navbar />
            {children}
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}
