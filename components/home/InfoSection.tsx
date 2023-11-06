import { Map, Mountain, Signpost } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="container flex justify-between py-16">
        <div className="flex max-w-sm">
          <Signpost className="h-16 w-32 text-primary mr-6" />
          <div className="flex flex-col">
            <h2 className="mb-1.5 font-medium">Choose What to Do</h2>
            <p className="text-muted-foreground text-sm">
              Looking for a cozy hotel to stay, a restaurant to eat, a musuem to
              visit or a mall to do some shopping?
            </p>
          </div>
        </div>

        <div className="flex max-w-sm">
          <Map className="h-16 w-32 text-primary mr-6" />
          <div className="flex flex-col">
            <h2 className="mb-1.5 font-medium">Find What You Want</h2>
            <p className="text-muted-foreground text-sm">
              Making a decision to do something this is the first step. We all
              know that nothing moves until.
            </p>
          </div>
        </div>

        <div className="flex max-w-sm">
          <Mountain className="h-16 w-32 text-primary mr-6" />
          <div className="flex flex-col">
            <h2 className="mb-1.5 font-medium">Explore Amazing Places</h2>
            <p className="text-muted-foreground text-sm">
              So, make the decision to move forward. Commit your decision to
              paper, just to bring it into focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
