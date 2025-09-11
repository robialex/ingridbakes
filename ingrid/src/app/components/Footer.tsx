import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="text-sm">123 Mediterranean St, Foodie City, CA 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@ingridbakes.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm hover:underline">Menu</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <a
              href="https://wa.me/1234567890"
              className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              aria-label="Contact us on WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Ingrid Bakes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;