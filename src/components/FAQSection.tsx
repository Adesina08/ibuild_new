import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are iBUILD's monthly subscription fees negotiable?",
      answer: "Yes.",
    },
    {
      question:
        "Can we lock in a subscription contract for a time-period suitable to our budget?",
      answer: "Yes.",
    },
    {
      question: "How long does it take to install iBUILD?",
      answer:
        "iBUILD can have you fully up and running in just a matter of days.",
    },
    { question: "Does iBUILD provide online training?", answer: "Yes." },
    {
      question:
        "Does iBUILD provide technical support via Email, Chat or Phone?",
      answer: "Yes.",
    },
    {
      question: "Does iBUILD provide system customization if required?",
      answer: "Yes.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-screen-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about iBUILD's subscription, setup,
              support, and customization options.
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left text-lg font-semibold text-gray-900 transition-colors hover:no-underline dark:text-gray-100">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 text-gray-500 transition-transform group-data-[state=open]:rotate-90" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

