import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F4F0] flex flex-col items-center justify-center p-6 text-center text-[#1C1D21]">
      <h1 className="text-6xl font-extrabold text-[#FF5A60] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="bg-[#1C1D21] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#FF5A60] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
