// TODO(Azizi): ganti nomor WhatsApp asli Bu Erni sebelum dipublikasikan
export const WA_NUMBER = "6281234567890";

export default function Footer() {
  return (
    <footer className="bg-orange-950 py-10 text-center text-orange-200">
      <div className="font-display text-xl font-bold text-white">LUMPIA BU ERNI</div>
      <p className="mt-2 text-sm">Lumpia & gorengan rumahan — dibuat dengan ❤️ dan sambal pedas.</p>
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-full bg-green-600 px-6 py-2.5 font-medium text-white transition hover:bg-green-700"
      >
        💬 Chat WhatsApp
      </a>
      <p className="mt-6 text-xs text-orange-300/70">
        © {new Date().getFullYear()} Lumpia Bu Erni. Semua hak dilindungi.
      </p>
    </footer>
  );
}