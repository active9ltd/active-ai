import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Active Ai — Your AI marketing team, in one place.',
  description: 'Turn your product into ads, videos, content and complete campaigns with AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
