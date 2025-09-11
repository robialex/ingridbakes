import Image from "next/image";

const GalleryPage = () => {
  const images = Array(9).fill("/placeholder.svg");

  return (
    <div className="container py-20">
      <h1 className="text-center font-serif text-4xl font-bold">Gallery</h1>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
