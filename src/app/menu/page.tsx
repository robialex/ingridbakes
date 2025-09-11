import Image from "next/image";

const MenuPage = () => {
  const menu = {
    cakes: [
      {
        name: "Basque Cheesecake",
        description: "Our signature creamy, crustless cheesecake with a caramelized top.",
        image: "/placeholder.svg",
      },
      {
        name: "Pistachio Cake",
        description: "A rich and nutty cake layered with pistachio cream.",
        image: "/placeholder.svg",
      },
      {
        name: "Raspberry-Pistachio Birthday Cake",
        description: "A festive cake perfect for celebrations.",
        image: "/placeholder.svg",
      },
    ],
    pastries: [
        {
            name: "Croissant",
            description: "Buttery and flaky, baked fresh daily.",
            image: "/placeholder.svg",
        },
        {
            name: "Pain au Chocolat",
            description: "A classic French pastry with dark chocolate.",
            image: "/placeholder.svg",
        },
    ],
    drinks: [
        {
            name: "Artisan Coffee",
            description: "Freshly brewed coffee from local roasters.",
            image: "/placeholder.svg",
        },
        {
            name: "Fresh Juice",
            description: "A selection of seasonal fresh juices.",
            image: "/placeholder.svg",
        },
    ],
    iceCream: [
        {
            name: "Homemade Ice Cream",
            description: "Creamy, artisanal ice cream in various flavors.",
            image: "/placeholder.svg",
        },
    ]
  };

  return (
    <div className="container py-20">
      <h1 className="text-center font-serif text-4xl font-bold">Our Menu</h1>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="mt-12">
          <h2 className="font-serif text-3xl font-bold capitalize">{category}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.name} className="border rounded-lg p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-48"
                />
                <h3 className="mt-4 font-serif text-xl">{item.name}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
