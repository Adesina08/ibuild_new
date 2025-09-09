export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is iBUILD?',
    answer: 'iBUILD is a comprehensive construction management software that provides cloud-based solutions for single-family, multi-family, and land development projects.'
  },
  {
    id: 'faq-2',
    question: 'How does the Proforma Forecasting work?',
    answer: 'Our AI-driven Proforma Forecasting Module uses predictive analytics to create accurate financial projections for your construction projects, helping secure investment financing.'
  },
  {
    id: 'faq-3',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free consultation and demo. Contact us to schedule a demonstration of our platform.'
  },
  {
    id: 'faq-4',
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive support including installation, training, customization, and ongoing technical assistance.'
  },
  {
    id: 'faq-5',
    question: 'Can the system be customized?',
    answer: 'Yes, system customization and custom reports are available at additional cost. All terms are negotiable based on your specific needs.'
  }
];