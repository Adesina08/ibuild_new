import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Mail, Phone, Clock } from "lucide-react";
import supportAgent from "@/assets/support-agent.png";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/layout/DemoModal";

export default function Support() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <AppLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container max-w-screen-2xl px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Customer Support</h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              We’re here to make sure you get the most out of iBUILD.
            </p>
            <p className="text-muted-foreground mt-3 max-w-xl">
              At iBUILD, we believe great construction doesn’t just come from solid foundations and
              quality materials — it also comes from strong support. Whether you are a project manager
              coordinating multiple sites, a contractor tracking expenses, or a client reviewing progress
              reports, our dedicated support team is here to make sure you never feel stuck.
            </p>
            <p className="text-muted-foreground mt-3 max-w-xl">
              We understand the unique challenges in construction: tight deadlines, budget constraints,
              safety standards, and the need for seamless collaboration across teams. That’s why our
              support goes beyond simply answering questions. We aim to:
            </p>
            <ul className="list-disc pl-4 mt-3 space-y-2 text-muted-foreground max-w-xl">
              <li>Solve problems quickly so your projects don’t experience costly delays.</li>
              <li>
                Provide clear step-by-step guidance so every team member, regardless of technical
                skill, can use our tools confidently.
              </li>
              <li>Offer proactive advice on best practices, compliance, and workflow improvements.</li>
              <li>Be available when you need us, through live chat, email, or scheduled calls.</li>
            </ul>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Our goal is simple: to help you build without roadblocks. From the very first time you log
              in to iBUILD to the successful completion of your projects, we’re by your side with
              answers, resources, and real humans ready to assist.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -right-16 -top-16 w-[380px] h-[380px] rounded-3xl rotate-12 bg-[#ffd9d4] opacity-70" />
              <img
                src={supportAgent}
                alt="Support agent"
                className="relative rounded-xl shadow-xl border border-border/50 w-full object-cover"
              />
            </div>
            <Button
              variant="ibuild-primary"
              size="sm"
              className="mt-6 w-full sm:w-auto"
              onClick={() => setIsDemoOpen(true)}
            >
              Book an appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-gradient-to-b from-transparent to-rose-50/50 dark:to-[#161a22]">
        <div className="container max-w-screen-2xl px-4 pb-10">
          <h2 className="text-xl font-semibold mb-3">Documentation Library</h2>
          <p className="text-sm text-muted-foreground leading-6">
            Our Documentation Library is designed to give construction professionals everything they
            need in one place. Whether you’re managing large projects or handling day-to-day site tasks,
            you’ll find practical, easy-to-follow resources to guide you.
          </p>

          <p className="text-sm text-muted-foreground leading-6 mt-4">Here’s what you’ll discover:</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-6">
            <li>
              📘 Getting Started Guides – Step-by-step instructions to set up your iBUILD account,
              onboard your team, and start managing projects in minutes.
            </li>
            <li>
              🎥 Video Tutorials – Short, practical videos covering core features like creating projects,
              assigning tasks, tracking budgets, and generating reports.
            </li>
            <li>
              🏗️ Construction Best Practices – Safety checklists, quality control workflows, and
              compliance guidelines to keep your projects on track.
            </li>
            <li>
              📂 Templates &amp; Forms – Ready-made site diaries, inspection forms, progress report
              formats, and budgeting sheets.
            </li>
            <li>
              🔧 Troubleshooting Articles – Quick fixes for common issues, with clear instructions and
              screenshots.
            </li>
            <li>
              🔒 Regulations &amp; Compliance – Resources to help you align with industry standards, safety
              codes, and reporting requirements.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground leading-6 mt-4">
            Our library is constantly updated with real use cases and field-tested solutions, so you’ll
            always have the right information at your fingertips.
          </p>
        </div>
      </section>

      {/* Team Support: map + contact inline, aligned to the top */}
      <section>
        <div className="container max-w-screen-2xl px-4 py-10">
          {/* Keep the heading above the columns */}
          <h2 className="text-2xl font-semibold">Team Support</h2>
          <p className="text-muted-foreground">Talk to a specialist</p>

          <div className="mt-4 grid lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden border border-border/60">
                <iframe
                  title="map"
                  className="w-full h-[260px] md:h-[300px]"
                  src="https://www.google.com/maps?q=Calgary,Canada&output=embed"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact card (aligned to top; no lg:mt-16) */}
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
                <a
                  href="mailto:info@ibuildresidential.com"
                  className="text-sm font-medium hover:underline"
                >
                  info@ibuildresidential.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </AppLayout>
  );
}
