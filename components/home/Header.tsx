import {
  Clapperboard,
  Dumbbell,
  Landmark,
  Martini,
  PlusCircle,
  Search,
  User,
  Utensils,
} from "lucide-react";
import { Button } from "../ui/button";
import { InputWithIcon } from "../ui/input-with-icon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Header = () => {
  return (
    <div className="container">
      <div
        className="absolute h-[800px] inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url(/queenstreet.jpg)",
        }}
      >
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50"></div>
      </div>
      <div className="relative h-[800px] flex items-center" id="relative">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-semibold drop-shadow-2xl ">
            Explore
          </h1>
          <h1 className="text-white text-4xl md:text-6xl font-semibold mt-6 drop-shadow-2xl">
            Around Your City
          </h1>
          <p className="text-base md:text-lg text-[#d1d1d1] mt-6 drop-shadow-2xl">
            Find the best places to visit, hotel, spa, cafe, and many more from
            local experts.
          </p>
          <div className="flex flex-col gap-2 mt-10 md:flex-row">
            <InputWithIcon
              title="What"
              placeholder="Ex: food, service, barber, hotel, bar, shopping..."
              className="w-full md:w-96"
            />
            <InputWithIcon
              title="Where"
              placeholder="Ex: enter your location"
              icon="locate"
            />
            <Button className="h-16 px-8 space-x-2">
              <Search className="w-5 h-5" /> <span>Search</span>
            </Button>
          </div>
          <ScrollArea className="max-w-96 whitespace-nowrap mt-3">
            <div className="flex space-x-8 text-white text-sm">
              <Button className="p-0 text-white" variant="link">
                <Landmark className="w-4 mr-2" /> Art's & History
              </Button>
              <Button className="p-0 text-white" variant="link">
                <Utensils className="w-4 mr-2" /> Restaurant
              </Button>
              <Button className="p-0 text-white" variant="link">
                <Martini className="w-4 mr-2" /> Club & Bar
              </Button>
              <Button className="p-0 text-white" variant="link">
                <Dumbbell className="w-4 mr-2" /> Gym & Fitness
              </Button>
              <Button className="p-0 text-white" variant="link">
                <Clapperboard className="w-4 mr-2" /> Entertainment
              </Button>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Header;
