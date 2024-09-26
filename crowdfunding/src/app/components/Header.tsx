import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo on the far left */}
        <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span className="text-xl font-bold text-primary">Crowd Founded</span>
        </Link>

        {/* Menu list on the far right */}
        <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>

          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
