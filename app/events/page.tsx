import EventCard from "../../components/EventCard";
import events from "../../data/events.json";

export const metadata = { title: "Events • Silverados Dog Park" };

export default function EventsPage() {
  return (
    <main className="section">
      <h1 className="h2">Live Music & Events</h1>
      <p className="muted mt-2">Upcoming shows at our outdoor stage.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {events.map(e => <EventCard key={e.id} e={e} />)}
      </div>
    </main>
  );
}
