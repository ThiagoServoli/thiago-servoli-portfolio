import "./globals.css";

/**
 * 404 de reserva, fora de qualquer idioma (o middleware normalmente leva
 * tudo para app/[locale], onde fica o 404 completo e traduzido).
 */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen items-center justify-center bg-page px-6 font-body text-fg">
        <main className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em]">Página não encontrada</h1>
          <a href="/" className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white">
            Voltar ao início
          </a>
        </main>
      </body>
    </html>
  );
}
