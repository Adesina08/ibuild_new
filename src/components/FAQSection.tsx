import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are iBUILD's monthly subscription fees negotiable?",
      answer: "Yes."
    },
    {
      question: "Can we lock in a subscription contract for a time-period suitable to our budget?",
      answer: "Yes."
    },
    {
      question: "How long does it take to install iBUILD?",
      answer: "iBUILD can have you fully up and running in just a matter of days."
    },
    {
      question: "Does iBUILD provide online training?",
      answer: "Yes."
    },
    {
      question: "Does iBUILD provide technical support via Email, Chat or Phone?",
      answer: "Yes."
    },
    {
      question: "Does iBUILD provide system customization if required?",
      answer: "Yes."
    }
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
              Everything you need to know about iBUILD's subscription, setup, support, and customization options.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-gray-200 bg-gray-50 px-6 dark:border-gray-700 dark:bg-gray-800 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left py-5 text-lg font-semibold text-gray-900 transition-colors hover:no-underline dark:text-gray-100 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;