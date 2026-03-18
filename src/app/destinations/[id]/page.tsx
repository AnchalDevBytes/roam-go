import { notFound } from "next/navigation";
import destinations from "@/helpers/destination.json";
import FloatingDetailCard from "@/components/floating-detail-card";
import { ContactSection } from "@/components/landing-page/contact-section";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TravelDetails({ params }: PageProps) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-roam-go-bone">
        {/* Hero Banner */}
        <div className="relative h-[40vh] min-h-[400px] lg:h-[550px] w-full">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Floating Card */}
        <FloatingDetailCard destination={destination} />

        <div className="w-full max-w-4xl mx-auto px-5 sm:px-10 md:px-0">
          <div className="flex flex-col pb-40">
            <div className="space-y-12">
              <div className="flex flex-col text-start">
                <h3 className="text-3xl sm:text-5xl font-source-serif text-roam-go-forest mb-6">
                  {destination.extra_story.title}
                </h3>
                <h4 className="text-lg text-roam-go-subtext leading-relaxed">
                  {destination.extra_story.subtitle}
                </h4>
                <div className="h-px w-full bg-gray-200 my-8" />
                <p className="text-lg text-roam-go-subtext leading-relaxed">
                  {destination.extra_story.about}
                </p>
              </div>

              <div className="space-y-16">
                {/* Detailed Itinerary */}
                <div className="space-y-12">
                  {destination.extra_story.itinerary.map(
                    (item: any, index: number) => (
                      <div key={index} className="space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-source-serif text-roam-go-forest border-b border-gray-100 pb-4">
                          {item.day_range}: {item.title}
                        </h3>

                        <div className="space-y-10">
                          {item.activities?.map(
                            (activity: any, actIndex: number) => (
                              <div key={actIndex} className="space-y-3">
                                <h4 className="text-xl font-source-serif text-roam-go-forest">
                                  {activity.title}
                                </h4>
                                <p className="text-roam-go-subtext leading-relaxed">
                                  {activity.description}
                                </p>
                              </div>
                            ),
                          ) || (
                            <div className="space-y-3">
                              <p className="text-roam-go-subtext leading-relaxed">
                                {item.activity}
                              </p>
                            </div>
                          )}
                        </div>

                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-4">
                            <h4 className="text-xl font-source-serif text-roam-go-forest">
                              Highlights Include:
                            </h4>
                            <ul className="space-y-2 list-none">
                              {item.highlights.map(
                                (highlight: string, hIndex: number) => (
                                  <li
                                    key={hIndex}
                                    className="flex items-start gap-3 text-roam-go-subtext"
                                  >
                                    <span className="text-roam-go-forest mt-1.5 shrink-0 text-xs">
                                      •
                                    </span>
                                    {highlight}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    ),
                  )}
                </div>

                {/* Accommodations */}
                <div className="space-y-8 pt-6">
                  <h3 className="text-3xl font-source-serif text-roam-go-forest">
                    Accommodations
                  </h3>
                  <ul className="space-y-4 list-none">
                    {Array.isArray(destination.extra_story.accommodations) ? (
                      destination.extra_story.accommodations.map(
                        (acc: any, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-roam-go-forest mt-1.5 shrink-0 text-xs">
                              •
                            </span>
                            <div className="text-roam-go-subtext">
                              <strong className="text-roam-go-forest">
                                {acc.name}:
                              </strong>{" "}
                              {acc.description}
                            </div>
                          </li>
                        ),
                      )
                    ) : (
                      <li className="text-roam-go-subtext">
                        {destination.extra_story.accommodations}
                      </li>
                    )}
                  </ul>
                </div>

                {/* Whats Included */}
                <div className="space-y-8 pt-8">
                  <h3 className="text-3xl font-source-serif text-roam-go-forest">
                    What's Included
                  </h3>
                  <ul className="space-y-4 list-none">
                    {destination.extra_story.included.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-roam-go-subtext"
                        >
                          <span className="text-roam-go-forest mt-1.5 shrink-0 text-xs">
                            •
                          </span>
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Packing List */}
                {destination.extra_story.packing_list && (
                  <div className="space-y-8 pt-8">
                    <h3 className="text-3xl font-source-serif text-roam-go-forest">
                      Packing List
                    </h3>
                    <ul className="space-y-4 list-none">
                      {destination.extra_story.packing_list.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-roam-go-subtext"
                          >
                            <span className="text-roam-go-forest mt-1.5 shrink-0 text-xs">
                              •
                            </span>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

                {/* Pricing & Discounts */}
                {destination.extra_story.pricing_details && (
                  <div className="space-y-8 pt-8">
                    <h3 className="text-3xl font-source-serif text-roam-go-forest">
                      Pricing & Discounts
                    </h3>
                    <ul className="space-y-4 list-none">
                      {destination.extra_story.pricing_details.map(
                        (detail: string, index: number) => {
                          const [label, ...valueParts] = detail.split(":");
                          const value = valueParts.join(":").trim();
                          return (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-roam-go-forest mt-1.5 shrink-0 text-xs">
                                •
                              </span>
                              <div className="text-roam-go-subtext">
                                <strong className="text-roam-go-forest">
                                  {label}:
                                </strong>{" "}
                                {value}
                              </div>
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}
