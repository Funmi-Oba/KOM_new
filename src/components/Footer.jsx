import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Ministry Info */}
        <div className="md:w-1/3 self-start">
          <Link href="/" className="flex items-center space-x-4 mb-4">
            <Image
              src="/images/logos/kom-logo.png"
              alt="Kayode Olawoye Ministries Logo"
              width={50}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
            <h2 className="text-[#6A00A3] ml-2 text-xl font-bold">
              Kayode Olawoye Ministries
            </h2>
          </Link>
          <p className="text-sm">
            A non-denominational Christian ministry focused on training believers
            for kingdom exploits in the five-fold ministries.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 self-start">
          <h3 className="text-xl text-[#6A00A3] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/#sermon" className="hover:text-gray-200">Sermons</Link></li>
            <li><Link href="/#about" className="hover:text-gray-200">About</Link></li>
            <li><Link href="/#donate" className="hover:text-gray-200">Partner with Us</Link></li>
            <li><Link href="/#contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div className="md:w-1/3 self-start">
          <h3 className="text-xl text-[#6A00A3] font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Mail className="w-4 h-4" /> kayodeolawoyeministries01@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <Phone className="w-4 h-4" /> +234 903 815 0147
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-gray-200 text-[#6A00A3] transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-gray-200 text-[#6A00A3] transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-gray-200 text-[#6A00A3] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Kayode Olawoye Ministries. All rights reserved.
      </div>
    </footer>
  );
}
