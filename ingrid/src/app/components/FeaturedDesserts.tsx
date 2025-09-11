import Image from "next/image";
import Link from "next/link";

const desserts = [
  {
    id: 1,
    name: "Chocolate Mousse",
    description: "Rich and creamy chocolate mousse topped with whipped cream.",
    image: "/imgs/chocolate-mousse.jpg",
  },
  {
    id: 2,
    name: "Lemon Tart",
    description: "Zesty lemon tart with a buttery crust and fresh berries.",
    image: "/imgs/lemon-tart.jpg",
  },
  {
    id: 3,
    name: "Baklava",
    description: "Layers of filo pastry filled with nuts and honey syrup.",
    image: "/imgs/baklava.jpg",
  },
  {
    id: 4,
    name: "Pistachio Cake",
    description: "Moist pistachio cake with a creamy frosting.",
    image: "/imgs/pistachio-cake.jpg",
  },
];

function FeaturedDesserts() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Desserts</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {desserts.map((dessert) => (
          <div key={dessert.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image
              src={dessert.image}
              alt={dessert.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dessert.name}</h3>
              <p className="text-gray-600">{dessert.description}</p>
              <Link href={`/desserts/${dessert.id}`} className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C79C2C] text-white rounded-full hover:shadow-lg transition-shadow">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDesserts;