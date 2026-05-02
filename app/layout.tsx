import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import PageLoader from "@/components/PageLoader/PageLoader";

const oppoSans = localFont({
  src: [
    {
      path: "../public/fonts/OPPOSans-VN-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/OPPOSans-VN-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OPPOSans-VN-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-oppo-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "HocGia | Tổng Thầu Xây Dựng Công Nghiệp & Dân Dụng",
    template: "%s | HocGia Construction",
  },
  description:
    "HocGia – Tổng thầu xây dựng uy tín hàng đầu với hơn 20 năm kinh nghiệm. Chuyên thi công công trình công nghiệp, dân dụng, hạ tầng và nội thất cao cấp trên toàn quốc.",
  keywords: [
    "tổng thầu xây dựng",
    "xây dựng công nghiệp",
    "xây dựng dân dụng",
    "nhà thầu uy tín",
    "HocGia construction",
  ],
  authors: [{ name: "HocGia Construction" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "HocGia Construction",
    title: "HocGia | Tổng Thầu Xây Dựng Công Nghiệp & Dân Dụng",
    description:
      "Tổng thầu xây dựng uy tín hàng đầu với hơn 20 năm kinh nghiệm thi công công trình công nghiệp và dân dụng.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HocGia | Tổng Thầu Xây Dựng Công Nghiệp & Dân Dụng",
    description:
      "Tổng thầu xây dựng uy tín hàng đầu với hơn 20 năm kinh nghiệm.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HocGia Construction",
  url: "https://hocgia.vn",
  logo: "https://hocgia.vn/images/logo.png",
  description:
    "Tổng thầu xây dựng công nghiệp và dân dụng uy tín hàng đầu Việt Nam.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Đường Xây Dựng",
    addressLocality: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-28-1234-5678",
    contactType: "customer service",
    availableLanguage: "Vietnamese",
  },
  sameAs: [
    "https://facebook.com/hocgia",
    "https://linkedin.com/company/hocgia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={oppoSans.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PageLoader />
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
