import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Team Monsrow | Full-lifecycle identity & fraud intelligence platform',
  description: 'Team Monsrow is the AI-powered identity and fraud decision platform that accelerates onboarding, stops fraud, and simplifies compliance across the customer lifecycle.',
};

import { GlobalAudioListener } from '@/components/ui';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#F5F4F0] text-[#1C1D21] antialiased selection:bg-[#FF5A60] selection:text-white">
        <GlobalAudioListener />
        {children}
      </body>
    </html>
  );
}
