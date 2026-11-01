"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E1D5] bg-[#FAF7F2]/95 backdrop-blur-sm transition">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A8422B] text-white shadow-sm">
            {/* Minimalist culinary seal SVG */}
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <div>
            <span className="font-display block text-lg font-bold tracking-tight text-[#262220]">
              Lumpia Bu Erni
            </span>
            <span className="block text-[11px] font-medium tracking-wider uppercase text-[#8C827A]">
              Dapur Rumahan Sejak 2021
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#menu"
            className="text-sm font-medium text-[#615852] transition hover:text-[#A8422B]"
          >
            Pilihan Menu
          </a>
          <a
            href="#tentang"
            className="text-sm font-medium text-[#615852] transition hover:text-[#A8422B]"
          >
            Catatan Dapur
          </a>
          <a
            href="#ulasan"
            className="text-sm font-medium text-[#615852] transition hover:text-[#A8422B]"
          >
            Kata Pelanggan
          </a>
          <a
            href="#pesan"
            className="text-sm font-medium text-[#615852] transition hover:text-[#A8422B]"
          >
            Pesan & Antar
          </a>
        </nav>

        {/* Desktop Action */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#E8E1D5] bg-white px-3 py-1 text-xs font-medium text-[#615852]">
            <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
            Buka Hari Ini 08.00–17.00
          </div>
          <a
            href="#pesan"
            className="rounded-full bg-[#A8422B] px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#913621]"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#262220] hover:bg-[#F3EDE2] md:hidden"
          aria-label="Buka menu navigasi"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E8E1D5] bg-[#FAF7F2] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[#262220] hover:bg-[#F3EDE2]"
            >
              Pilihan Menu
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[#262220] hover:bg-[#F3EDE2]"
            >
              Catatan Dapur
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[#262220] hover:bg-[#F3EDE2]"
            >
              Kata Pelanggan
            </a>
            <a
              href="#pesan"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[#262220] hover:bg-[#F3EDE2]"
            >
              Pesan & Antar
            </a>
            <div className="mt-2 pt-2 border-t border-[#E8E1D5] flex items-center justify-between">
              <span className="text-xs text-[#8C827A]">Buka 08.00–17.00 WIB</span>
              <a
                href="#pesan"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-[#A8422B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#913621]"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
