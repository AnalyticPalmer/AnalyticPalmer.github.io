import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://analyticpalmer.github.io"),
  title: { default: "Palmer Ogiriki | Data Analyst & ML Engineer", template: "%s | Palmer Ogiriki" },
  description: "Portfolio of Palmer Ogiriki, a data analyst and machine learning engineer building clear analytics and reliable intelligent products.",
  keywords: ["Palmer Ogiriki", "AnalyticPalmer", "Data Analyst", "Machine Learning Engineer", "Power BI", "Python", "Nigeria"],
  authors: [{ name: "Palmer Ogiriki", url: "https://github.com/AnalyticPalmer" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Palmer Ogiriki | Data Analyst & ML Engineer", description: "Data analytics, AI and machine-learning projects by Palmer Ogiriki.", url: "https://analyticpalmer.github.io", siteName: "Palmer Ogiriki Portfolio", type: "website" },
  twitter: { card: "summary_large_image", title: "Palmer Ogiriki | Data Analyst & ML Engineer", description: "Data analytics, AI and machine-learning projects by Palmer Ogiriki." },
  icons: { icon: "/favicon.ico" }
};

const themeScript = `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>;
}
