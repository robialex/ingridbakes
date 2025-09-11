import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Ingrid Bakes
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button asChild>
            <a href="https://wa.me/35799127455" target="_blank">Order a Cake</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
