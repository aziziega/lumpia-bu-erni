export default function InfoSection() {
  return (
    <section id="tentang" className="border-b border-[#E8E1D5] bg-[#F4EFE6] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8422B]">
            Otentisitas Dapur
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#262220] sm:text-4xl">
            Catatan Dapur & Ketentuan Pemesanan
          </h2>
          <p className="mt-3 text-base text-[#615852]">
            Komitmen kami untuk selalu menyajikan kualitas hidangan terbaik, higienis, dan terpercaya.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {/* Pillar 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#A8422B] border border-[#E8E1D5]">
                {/* Pot / Kitchen icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 6.75a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25m-16.5 0v10.5A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25V6.75" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5v3m6-3v3" />
                </svg>
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-[#262220]">
                Resep Asli Tanpa Pengawet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#615852]">
                Rebung segar diolah bersih dengan perasan rempah khusus agar tidak langu. Daging ayam dan telur dipadu bumbu alami tanpa MSG berlebih atau bahan pengawet sintetis.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#F4EFE6] text-xs font-medium text-[#A8422B]">
              Higienis & 100% Halal
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#A8422B] border border-[#E8E1D5]">
                {/* Clock / Schedule icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-[#262220]">
                Jam Operasional & Pre-Order
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#615852]">
                Dapur siap menggoreng pesanan hangat setiap hari pukul <strong>08.00 – 17.00 WIB</strong>. Untuk pesanan snack box, rapat kantor, atau arisan keluarga, mohon konfirmasi H-1.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#F4EFE6] text-xs font-medium text-[#A8422B]">
              Buka Setiap Hari
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#A8422B] border border-[#E8E1D5]">
                {/* Delivery / Box icon */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.5a1.125 1.125 0 00-1.125-1.125H5.625A1.125 1.125 0 004.5 4.5v9.75" />
                </svg>
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-[#262220]">
                Pengambilan & Pengiriman
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#615852]">
                Pesanan dapat diambil langsung di dapur rumahan, atau dikirimkan hangat menggunakan kurir instan/ojek online. Kemasan boks rapi menjaga kerenyahan kulit lumpia sampai ke tangan Anda.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#F4EFE6] text-xs font-medium text-[#A8422B]">
              Kemasan Food-Grade & Rapi
            </div>
          </div>
        </div>

        {/* Manifesto Banner */}
        <div className="mt-12 rounded-2xl border border-[#E8E1D5] bg-white p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
          <p className="font-display text-lg italic text-[#262220] sm:text-xl">
            &ldquo;Bagi kami, lumpia bukan sekadar gorengan, melainkan kehangatan sajian rumah yang dimasak sepenuh hati untuk dinikmati bersama keluarga tercinta.&rdquo;
          </p>
          <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-[#A8422B]">
            — Bu Erni & Keluarga
          </span>
        </div>
      </div>
    </section>
  );
}
