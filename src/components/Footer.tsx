export default function Footer() {
  return (
    <footer className="bg-primary text-muted dark:bg-[#222] dark:text-gray-200 py-3 border-t border-secondary dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
        <div className="font-semibold">SPECTRA Assistive Technologies Limited</div>
        <div>
          &copy; {new Date().getFullYear()} SPECTRA Conference. All Rights Reserved.
        </div>
        <div className="flex gap-3">
          <a href="/about" className="hover:text-heading dark:hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-heading dark:hover:text-white transition">Contact</a>
          <a href="/donate" className="hover:text-heading dark:hover:text-white transition">Donate</a>
        </div>
      </div>
    </footer>
  );
}
