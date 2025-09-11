import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-serif text-4xl font-bold">About Ingrid</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ingrid’s journey began in her home kitchen, armed with a passion for
            baking and a dream to create desserts that weren’t just delicious,
            but also beautiful and authentic. Her philosophy is simple: use
            high-quality, fresh ingredients to craft artisanal pastries that
            bring joy. At Ingrid Bakes, every cake tells a story of dedication
            and love for the craft.
          </p>
          <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-lg">
            “So delicious they might just leave you speechless.”
          </blockquote>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/placeholder.svg"
            alt="Ingrid in the kitchen"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <Image
            src="/placeholder.svg"
            alt="Close-up of a cake"
            width={300}
            height={400}
            className="rounded-lg object-cover mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
