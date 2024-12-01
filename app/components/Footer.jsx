import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Sajek-valley.png"
              alt="Sajek Valley"
              width={120}
              height={48}
              className="rounded-md"
            />
           
          </Link>
          <p className="text-center text-gray-400 max-w-md">
            Explore the breathtaking beauty of Sajek Valley with us. Book tours, find travel tips, and enjoy personalized travel experiences in the heart of the clouds.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            <FaFacebook size={24} />
          </Link>
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            <FaTwitter size={24} />
          </Link>
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            <FaInstagram size={24} />
          </Link>
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            <FaYoutube size={24} />
          </Link>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center text-sm text-gray-500 space-y-2">
          <p>&copy; 2024 Sajek Valley. All rights reserved.</p>
          <p>
            <Link href="/" className="hover:text-yellow-400 transition duration-300">Privacy Policy</Link> |
            <Link href="/" className="hover:text-yellow-400 transition duration-300"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
