import { EventImage } from "@/components/EventImage";
import { Title } from "../../../../components/Title";
import { EventModel } from "../../../../models";

export async function getEvent(eventId: string): Promise<EventModel> {
  const response = await fetch(`${process.env.GOLANG_API_URL}/events/${eventId}`, {
    headers: {
      apikey: process.env.GOLANG_API_TOKEN as string,
    },
    cache: "no-store",
    next: {
      tags: [`events/${eventId}`],
    },
  });

  return response.json();
}

export default async function CheckoutSuccessPage({
  params,
  searchParams,
}: {
  params: { eventId: string };
  searchParams: string;
}) {
  const event = await getEvent(params.eventId);

  let spotsArray;
  try {
    const paramsObj = new URLSearchParams(searchParams);

    const spots = paramsObj.get("spots");
    if (spots) {
      spotsArray = JSON.parse(decodeURIComponent(spots));
    } else {
      throw new Error("Spots parameter not found");
    }
  } catch (error) {
    console.error("Error decoding and parsing spots:", error);
    spotsArray = [];
  }

  console.log(event.image_url);

  return (
    <main className="mt-10 flex flex-col items-center justify-center">
      <Title>Purchase Successful!</Title>
      <div className="mt-10 mb-4 flex w-full max-w-[478px] flex-col items-center rounded-2xl bg-secondary p-4">
        <Title>Purchase Summary</Title>
        <div className="mt-5">
          <EventImage src={event.image_url} alt={event.name} />
        </div>
        <div className="mt-5 flex flex-col items-center gap-y-6">
          <p className="font-semibold text-center">
            Event: {event.name}
            <br />
            Location: {event.location}
            <br />
            Date:{" "}
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="font-semibold text-white text-center">
            Selected Seats: {Array.isArray(spotsArray) ? spotsArray.join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </main>
  );
}
