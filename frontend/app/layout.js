import localFont from 'next/font/local';

// تحميل الخطوط المحلية باستخدام next/font للأداء الأمثل
const dgGhayaty = localFont({
  src: '../src/assets/fonts/DG-Ghayaty-Regular-F.ttf',
  variable: '--font-dg-ghayaty',
  display: 'swap',
  weight: '400',
});

const alarabiya = localFont({
  src: '../src/assets/fonts/Alarabiya-Font.ttf',
  variable: '--font-alarabiya',
  display: 'swap',
  weight: '400',
});

const tajawal = localFont({
  src: [
    {
      path: '../src/assets/fonts/tajawal-400.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/tajawal-700.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tajawal',
  display: 'swap',
});

// Global CSS imports kept exactly as in CRA
import "../src/index.css";
import "../src/App.css";

export const metadata = {
  title: "الأسطورة أونلاين | الدفع الإلكتروني وشحن الرصيد",
  description: "الأسطورة أونلاين - حلول الدفع الإلكتروني وشحن الرصيد والألعاب والبرامج والبطاقات الإلكترونية بسرعة وأمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${dgGhayaty.variable} ${alarabiya.variable} ${tajawal.variable}`}>
      <body 
        suppressHydrationWarning={true}
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          backgroundColor: '#1a1a1a', // Dark background for desktop area
          overflowY: 'auto'
        }}
      >
        <div 
          id="mobile-viewport"
          style={{
            width: '100%',          // Fluid width to fit different phones
            maxWidth: '480px',      // Maximum width for large phones (stops before becoming tablet-like)
            minWidth: '320px',      // Minimum width for small phones
            minHeight: '100vh',
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            position: 'relative',
            overflowX: 'hidden',
            boxShadow: '0 0 50px rgba(0,0,0,0.5)',
            transform: 'translateZ(0)', // Traps fixed elements inside this container
            margin: '0 auto'
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
