import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#D4AF37] to-[#C79C2C] py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B3A57] mb-4">
          Ready to Indulge?
        </h2>
        <p className="text-lg md:text-xl text-[#1B3A57]/80 mb-8">
          Experience the taste of our Mediterranean delights. Order now or explore our menu!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/order"
            className="bg-[#1B3A57] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#1B3A57]/80 transition-all"
          >
            Order Now
          </Link>
          <Link
            href="/menu"
            className="bg-white text-[#1B3A57] rounded-full px-6 py-3 shadow-lg border border-[#1B3A57] hover:bg-[#D4AF37] transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;