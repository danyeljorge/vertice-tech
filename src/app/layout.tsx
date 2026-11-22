import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vértice Tech | Sistemas Inteligentes, Infraestrutura Sólida, Resultados Reais',
  description:
    'Desenvolvimento de software sob medida, automações com Inteligência Artificial, arquitetura cloud de alto desempenho e web design de alta conversão para empresas.',
  keywords: [
    'Vértice Tech',
    'Engenharia de Software',
    'Inteligência Artificial',
    'Agentes Autônomos',
    'Next.js',
    'Cloud',
    'DevOps',
    'Sistemas Web',
    'ERP',
  ],
  authors: [{ name: 'Vértice Tech' }],
  openGraph: {
    title: 'Vértice Tech | Engenharia de Software & IA',
    description:
      'Transformamos desafios operacionais em software sob medida, automações com IA e arquitetura em nuvem de alta disponibilidade.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Vértice Tech',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090c09] text-[#e1e3dd] antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full pt-20 relative overflow-hidden bg-[#090c09]">
          {/* Subtle Technical Grid Background Texture */}
          <div className="absolute inset-0 tech-grid-bg pointer-events-none z-0 opacity-40" />

          {/* Radial Glow Halos */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary-container/10 blur-[130px] pointer-events-none" />
          <div className="absolute top-[1800px] right-[-150px] w-[550px] h-[550px] rounded-full bg-primary-container/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[400px] left-[-100px] w-[600px] h-[600px] rounded-full bg-primary-container/8 blur-[160px] pointer-events-none" />

          <div className="relative z-10 w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
