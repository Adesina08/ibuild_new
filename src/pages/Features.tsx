
import AppLayout from "@/components/layout/AppLayout";

export default function FeaturesPage() {
  return (
    <AppLayout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold">Communication Features</h1>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
            <li id="todo" className="rounded-lg border bg-card/50 p-4">To‑Do — assign, track, and complete tasks quickly.</li>
            <li id="itinerary" className="rounded-lg border bg-card/50 p-4">Itinerary — plan and communicate schedules with clarity.</li>
            <li id="discussion" className="rounded-lg border bg-card/50 p-4">Discussion — threaded conversations across jobs and tools.</li>
            <li id="notifications" className="rounded-lg border bg-card/50 p-4">WidCast Notifications — timely alerts to teams and customers.</li>
          </ul>
        </div>
      </section>
    </AppLayout>
  );
}
