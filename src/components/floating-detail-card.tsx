import { Location04Icon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const FloatingDetailCard = ({ destination }: { destination: any }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[99%] sm:max-w-[95%] lg:max-w-7xl -mt-32 sm:-mt-48 relative z-10 pb-16">
      <div className="bg-white px-6 py-8 sm:px-12 sm:py-14 w-full rounded-lg shadow-md mb-12 sm:mb-16 relative overflow-hidden">
        {/* Square pattern background */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1B2D29 1.5px, transparent 1.5px), linear-gradient(90deg, #1B2D29 1.5px, transparent 1.5px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />

        <div className="flex flex-col xl:flex-row justify-between gap-10 lg:gap-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 font-light text-base">
              <HugeiconsIcon
                icon={Location04Icon}
                className="w-5 h-5 text-roam-go-sand"
              />
              {destination.location}
            </div>

            <h1 className="text-4xl sm:text-5xl font-source-serif mb-4 text-roam-go-forest">
              {destination.title}
            </h1>
            <p className="max-w-2xl font-figtree sm:text-lg text-base font-light leading-relaxed text-roam-go-subtext">
              {destination.description}
            </p>

            <div className="flex flex-wrap items-center max-w-2xl gap-4 pt-10">
              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Type:{" "}
                </span>
                {destination.category}
              </div>

              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Available Slot:{" "}
                </span>
                {destination.slots_available}
              </div>

              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Price:{" "}
                </span>
                {destination.price}
              </div>

              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Next Date:{" "}
                </span>
                {destination.next_date}
              </div>

              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Duration:{" "}
                </span>
                {destination.extra_story.itinerary.length} Days
              </div>

              <div className="bg-roam-go-bone text-sm px-4 py-1.5 rounded-full">
                <span className="font-medium font-source-serif text-base">
                  Discount:{" "}
                </span>
                {destination.discount}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[500px] h-[300px] sm:h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-lg relative group xl:ml-auto mt-6 xl:mt-0">
            <img
              src={destination.extra_story.itinerary[0].image}
              alt={destination.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-125 duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white text-sm font-semibold z-10 pointer-events-none">
              <HugeiconsIcon
                icon={StarIcon}
                className="w-4 h-4 text-yellow-500 fill-yellow-500"
              />
              {destination.rating}
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <h3 className="text-white text-3xl font-bold font-source-serif leading-tight">
                {destination.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingDetailCard;
