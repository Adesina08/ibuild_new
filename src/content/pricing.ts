export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  subscribeUrl: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter Plan',
    price: '$11',
    period: 'month',
    features: [
      '20,000 Visitors', 
      'Create Unlimited Widgets', 
      'CMS Integration'
    ],
    subscribeUrl: 'https://mobulous.co.in/ibuilt_admin/ibuilt_construction/plan_screen.html'
  },
  {
    name: 'Starter Plan',
    price: '$36', 
    period: 'month',
    features: [
      '50,000 Visitors',
      'Create Unlimited Widgets', 
      'CMS Integration',
      'All Widgets Types'
    ],
    subscribeUrl: 'https://mobulous.co.in/ibuilt_admin/ibuilt_construction/plan_screen.html'
  }
];

export const allPlansFeatures = [
  'Project Management Tools',
  'Financial Forecasting',
  'Team Collaboration',
  'Mobile Access',
  'Cloud Storage',
  'Customer Support'
];