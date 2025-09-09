
import AppLayout from "@/components/layout/AppLayout";
import { Mail, Phone, Clock } from "lucide-react";
import supportAgent from "@/assets/support-agent.png";

export default function Support() {
  return (
    <AppLayout>
      {/* Hero-like section with image on right and pink rounded diagonal */}
      <section className="relative overflow-hidden">
        <div className="container max-w-screen-2xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Customer Support</h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              iBUILD has an extensive library of documentation and video tutorials to help our customers.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-16 -top-16 w-[420px] h-[420px] rounded-3xl rotate-12 bg-[#ffd9d4] opacity-70" />
            <img
              src={supportAgent}
              alt="Support agent"
              className="relative rounded-xl shadow-xl border border-border/50 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Documentation & learn section */}
      <section className="bg-gradient-to-b from-transparent to-rose-50/50 dark:to-[#161a22]">
        <div className="container max-w-screen-2xl px-4 pb-14">
          <h2 className="text-xl font-semibold mb-3">Documentation Library</h2>
          <p className="text-sm text-muted-foreground leading-6">
            A thorough knowledge base with step-by-step guides, videos and answers for common workflows.
            Because space and place affect a variety of topics, our library spans estimating, scheduling,
            accounting integrations, project management and communications.
          </p>

          <h3 className="text-lg font-semibold mt-8">Learn how easy it is to excel online</h3>
          <p className="text-sm text-muted-foreground leading-6">
            Watch quick tutorials and explore best practices to get your team productive fast.
            Our content is created by builders, for builders.
          </p>
        </div>
      </section>

      {/* Team Support section with map + contact info (no training section per request) */}
      <section>
        <div className="container max-w-screen-2xl px-4 py-14 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">Team Support</h2>
            <p className="text-muted-foreground">Talk to a specialist</p>
            <div className="mt-4 rounded-xl overflow-hidden border border-border/60">
              <iframe
                title="map"
                className="w-full h-[320px]"
                src="https://www.google.com/maps?q=London,UK&output=embed"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full p-2 bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Monday - Friday</div>
                <div className="text-sm text-muted-foreground">07:00 AM - 05:00 PM</div>
                <div className="text-xs text-muted-foreground">Mountain Time (MT)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-sm font-medium">(587)-555-5555</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:info@ibuildresidential.com" className="text-sm font-medium hover:underline">
                info@ibuildresidential.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
