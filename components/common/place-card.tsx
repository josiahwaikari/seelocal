import Image from "next/image";
import { Separator } from "../ui/separator";
import { getIcon } from "@/lib/utils";
import { LucideIcon, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PlaceCardProps = {
  name: string;
  image: string;
  address: string;
  phone: string;
  category: string;
  reviews: number;
};

const PlaceCard = (props: PlaceCardProps) => {
  const Icon = getIcon(props.category) as LucideIcon;

  return (
    <div className="flex flex-col relative">
      <Image
        src={props.image}
        alt="Image"
        className="rounded-md object-cover mb-3 h-52 drop-shadow-md"
        width={440}
        height={240}
      />
      <span className="text-sm text-red-500">Closed Now</span>
      <h2>{props.name}</h2>
      <p className="text-muted-foreground text-sm mt-1">{props.address}</p>
      <p className="text-muted-foreground text-sm mt-1">{props.phone}</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
        {props.category && (
          <Button className="p-0 font-normal text-inherit" variant="link">
            <Icon className="w-4 mr-2" /> {props.category}
          </Button>
        )}
        <Separator orientation="vertical" />
        <Button className="p-0 font-normal text-inherit" variant="link">
          <Star className="w-4 mr-2 text-yellow-500" /> {props.reviews} Reviews
        </Button>
      </div>
      <Avatar className="absolute h-14 w-14 top-44 right-8">
        <AvatarImage src="/company.png" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default PlaceCard;
