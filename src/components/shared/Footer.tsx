import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Ingrid Bakes
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p>51 Archbishop Makarios III Ave, Nicosia, Cyprus</p>
          <p>+357 99 127455</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
