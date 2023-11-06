import PlaceCard from "@/components/common/place-card";
import Categories from "@/components/home/Categories";
import Header from "@/components/home/Header";
import InfoSection from "@/components/home/InfoSection";

const places = [
  {
    name: "Portofino Restaurant",
    address: "2 Clive Square East, Napier South, Napier 4110",
    phone: "06 835 8821",
    image:
      "https://www.portofino.co.nz/wp-content/uploads/2021/11/Rectangle-107-1.jpg",
    category: "Restaurant",
    reviews: 485,
  },
  {
    name: "Portofino Restaurant",
    address: "2 Clive Square East, Napier South, Napier 4110",
    phone: "06 835 8821",
    image:
      "https://www.portofino.co.nz/wp-content/uploads/2021/11/Rectangle-107-1.jpg",
    category: "Restaurant",
    reviews: 485,
  },
  {
    name: "Portofino Restaurant",
    address: "2 Clive Square East, Napier South, Napier 4110",
    phone: "06 835 8821",
    image:
      "https://www.portofino.co.nz/wp-content/uploads/2021/11/Rectangle-107-1.jpg",
    category: "Restaurant",
    reviews: 485,
  },
];

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <InfoSection />
      <div className="container flex flex-col py-20">
        <h2 className="text-4xl text-center font-medium">
          Discover New Places
        </h2>
        <h3 className="text-muted-foreground mt-1 text-center">
          Explore the greatest places in the city.
        </h3>
        <div className="flex gap-8 mt-12">
          {places.map((place) => (
            <PlaceCard {...place} />
          ))}
        </div>
      </div>
    </div>
  );
}
