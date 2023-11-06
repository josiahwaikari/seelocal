import { Utensils } from "lucide-react";

const Categories = () => {
  return (
    <div className="container flex flex-col py-20">
      <h2 className="text-4xl text-center font-medium">Popular Categories</h2>
      <h3 className="text-muted-foreground mt-1 text-center">
        Find places by choosing the category
      </h3>
      <div className="flex justify-between mt-12">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#F6F6F6] p-14 rounded-lg w-40 h-40 flex justify-center items-center">
            <Utensils className="w-full h-full text-muted-foreground" />
          </div>
          <p className="mt-2 text-sm">Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
