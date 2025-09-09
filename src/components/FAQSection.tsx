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
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:shadow-medium transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-ibuild-red transition-colors hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </p>
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