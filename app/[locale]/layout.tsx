import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import TranslationsProvider from "@/lib/TranslationsProviders";
import initTranslations from "../i18n";

export const metadata = {
  title: "Dex",
};

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
    <html lang="en">
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
