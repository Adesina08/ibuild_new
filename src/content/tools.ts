export interface BusinessTool {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const businessTools: BusinessTool[] = [
  {
    id: 'proforma-forecasting',
    name: 'Proforma Forecasting',
    description: 'AI-driven financial forecasting module for securing investment financing on major projects.',
    slug: 'proforma-forecasting'
  },
  {
    id: 'portal-views',
    name: 'Portal Views',
    description: 'Customizable dashboard views for different user roles and project perspectives.',
    slug: 'portal-views'
  },
  {
    id: 'crm',
    name: 'CRM',
    description: 'Customer relationship management tools for tracking leads and client interactions.',
    slug: 'crm'
  },
  {
    id: 'selections',
    name: 'Selections',
    description: 'Material and design selection management system for streamlined decision-making.',
    slug: 'selections'
  },
  {
    id: 'job-creation',
    name: 'Job Creation',
    description: 'Automated job creation and assignment tools for project management.',
    slug: 'job-creation'
  },
  {
    id: 'price-book',
    name: 'Price Book',  
    description: 'Comprehensive pricing database for materials, labor, and assembly costs.',
    slug: 'price-book'
  },
  {
    id: 'ctcs',
    name: 'CTCs',
    description: 'Change order and contract management system.',
    slug: 'ctcs'
  },
  {
    id: 'cos',
    name: 'COs',
    description: 'Change order processing and approval workflow management.',
    slug: 'cos'
  },
  {
    id: 'estimating-qrs',
    name: 'Estimating QRs',
    description: 'Quick response estimating tools for rapid project cost assessment.',
    slug: 'estimating-qrs'
  },
  {
    id: 'construction-scheduling',
    name: 'Construction Scheduling',
    description: 'Advanced scheduling tools for project timeline management.',
    slug: 'construction-scheduling'
  },
  {
    id: 'warranty',
    name: 'Warranty',
    description: 'Warranty tracking and management system for completed projects.',
    slug: 'warranty'
  },
  {
    id: 'soa',
    name: 'SOA',
    description: 'Statement of account generation and financial reporting tools.',
    slug: 'soa'
  },
  {
    id: 'widcast-notifications',
    name: 'WidCast Notifications',
    description: 'Real-time notification system for project updates and alerts.',
    slug: 'widcast-notifications'
  },
  {
    id: 'todo',
    name: 'To-Do',
    description: 'Task management and assignment system for team coordination.',
    slug: 'todo'
  },
  {
    id: 'discussion-feed',
    name: 'Discussion Feed',
    description: 'Team communication and collaboration platform.',
    slug: 'discussion-feed'
  }
];