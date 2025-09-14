export interface BusinessTool {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BusinessToolSection {
  id: string;
  title: string;
  tools: BusinessTool[];
}

export const toolSections: BusinessToolSection[] = [
  {
    id: 'third-party-associates-management',
    title:
      "Enhancing Your Company’s Professional Image & Relationships With Your Third-Party Associates Management",
    tools: [
      {
        id: 'project-proforma-financial-forecasting-management',
        name: 'Project Proforma Financial Forecasting Management',
        description:
          'iBUILD’s Project Proforma Financial Forecasting tool as a game-changer in real estate financing, particularly for multi-family developments. By eliminating manual spreadsheets and offering instant, digitally-powered cost projections, it not only accelerates decision-making but also enhances credibility with lenders—giving infrastructure leaders a strategic edge in securing capital faster with precision and confidence.',
        slug: 'project-proforma-financial-forecasting-management'
      },
      {
        id: 'associate-communication-portal-views-management',
        name: 'Associate Communication Portal Views Management',
        description:
          'iBUILD’s Associate Communication Portal Views gives trades, suppliers, and investors real-time access to project updates, documents, and interdependent communication portals between suppliers, trades, marketing, finance, as well as direct communication links to building, city planning, and construction services. It empowers your business by strengthening communication ties, boosting transparency, and providing critical control over your relationships across every stage of development.',
        slug: 'associate-communication-portal-views-management'
      },
      {
        id: 'sales-customer-relations-portal-views-management',
        name: 'Sales Customer Relations Management',
        description:
          'iBUILD’s Sales Customer Relations Management tool streamlines client engagement by enabling transparent communication, seamless contract handling, and efficient deposit management—all in one digital platform. With features like e-signature integration, real-time access to signed documents, and automated financial tracking, it fosters trust and delivers a frictionless experience from first contact to final transaction.',
        slug: 'sales-customer-relations-portal-views-management'
      },
      {
        id: 'client-interior-exterior-selections-management',
        name: 'Client Interior & Exterior Selections Management',
        description:
          'iBUILD’s Client Interior & Exterior Selections Management tool empowers homeowners to personalize every detail of their space—from paint colors to fixtures—ensuring their vision becomes reality. Whether managing interior selections for multi-family units or full customization for single-family homes, this module streamlines the process for a smooth, client-centered construction experience.',
        slug: 'client-interior-exterior-selections-management'
      }
    ]
  },
  {
    id: 'home-building-processes-management',
    title:
      'Simplifying Your Home Building Processes Management',
    tools: [
      {
        id: 'job-creation-management',
        name: 'Job Creation Management',
        description:
          'iBUILD’s Job Creation Management tool instantly generates job numbers and sets up all project components—whether for single-family homes, multi-family developments, or land ventures—saving hours of manual work. With built-in estimating checklists, construction schedules, and full administrative control, it empowers teams to launch projects the same day with precision and speed.',
        slug: 'job-creation-management'
      },
      {
        id: 'price-book-management',
        name: 'Price Book Management',
        description:
          'iBUILD’s Price Book Management tool equips your sales team with pre-approved pricing for materials, labor, and components—streamlining contract updates and change orders with real-time efficiency. By simplifying client interactions and document handling, it transforms pricing into a powerful driver of trust, speed, and satisfaction.',
        slug: 'price-book-management'
      },
      {
        id: 'changes-to-contract-management',
        name: 'Changes To Contract (CTCs) Management',
        description:
          'iBUILD’s Changes To Contract (CTCs) Management tool streamlines contract amendments by automatically importing client changes from the Price Book and preparing them for secure e-signature. With instant access to signed documents via the Client Portal, it ensures transparency, reduces disputes, and reinforces professional efficiency throughout the process.',
        slug: 'changes-to-contract-management'
      },
      {
        id: 'change-orders-management',
        name: 'Change Orders (COs) Management',
        description:
          'iBUILD’s Change Orders (COs) Management tool streamlines client change requests by integrating real-time updates from the Price Book and enabling fast, secure e-signatures. With instant access to signed COs via the Client Portal, it enhances transparency, reduces disputes, and strengthens contract flexibility.',
        slug: 'change-orders-management'
      },
      {
        id: 'vendor-master-file-management',
        name: 'Vendor Master File Management',
        description:
          'iBUILD’s Vendor Master File Management tool streamlines supply chain operations by automating procurement, quote requests, and purchase orders through preferred vendor linking and direct communication channels. With comprehensive logging of all interactions, it ensures transparency, dispute resolution, and timely access to materials and services.',
        slug: 'vendor-master-file-management'
      },
      {
        id: 'estimating-quote-requests-contract-bidding-management',
        name: 'Estimating Quote Requests (QR’s) Contract Bidding Management',
        description:
          'iBUILD’s Estimating Quote Requests (QRs) Contract Bidding Management tool automates every step of the bid process—from checklist creation and vendor communication to real-time budget updates and purchase orders—ensuring nothing is missed. By streamlining estimation and bidding, it transforms efficiency into a strategic advantage for successful project delivery.',
        slug: 'estimating-quote-requests-contract-bidding-management'
      },
      {
        id: 'purchasing-pos-management',
        name: 'Purchasing (POs) Management',
        description:
          'iBUILD’s Purchasing (POs) Management tool automates procurement by instantly converting winning bids into pre-coded purchase orders, which are emailed to vendors and seamlessly recorded in your online accounting system. With real-time notifications and vendor portal access, it eliminates manual data entry and enhances transparency across your supply chain.',
        slug: 'purchasing-pos-management'
      },
      {
        id: 'construction-scheduling-monitoring-management',
        name: 'Construction Scheduling & Monitoring Management',
        description:
          'iBUILD’s Construction Scheduling and Monitoring Management tool automates project timelines with customized schedules, real-time Gantt charts, and inspection forms—ensuring every phase runs smoothly and on budget. By equipping site supervisors with detailed scopes of work and proactive oversight tools, it transforms execution into a streamlined, high-performance process.',
        slug: 'construction-scheduling-monitoring-management'
      },
      {
        id: 'warranty-management',
        name: 'Warranty Management',
        description:
          'iBUILD’s Warranty Management tool empowers clients to submit service requests directly through their online portal, triggering prompt vendor coordination and transparent follow-up. By streamlining warranty handling and enhancing responsiveness, it builds trust, strengthens relationships, and turns satisfied clients into loyal advocates.',
        slug: 'warranty-management'
      }
    ]
  },
  {
    id: 'business-management-tools',
    title:
      'iBUILD’s Empowering Cutting-Edge Business Management Tools',
    tools: [
      {
        id: 'document-auto-file-task-assignments-management',
        name: 'Documental Employee Task Assignments Management',
        description:
          'iBUILD’s Departmental Employee Task Assignments Management tool automates daily task distribution and tracks progress in real time, ensuring smooth operations and timely execution. With built-in productivity reports, it empowers managers to monitor performance, resolve bottlenecks, and drive organizational efficiency.',
        slug: 'document-auto-file-task-assignments-management'
      },
      {
        id: 'industry-specific-document-templates-management',
        name: 'Industry-Specific Document Templates Management',
        description:
          'iBUILD’s Industry-Specific Document Templates tool offers over 150 customizable, legally reviewed templates that streamline client and vendor communications while aligning with your brand and business practices. By eliminating manual data entry and ensuring consistency across all documents, it accelerates processing and mitigates compliance risks with professional precision.',
        slug: 'industry-specific-document-templates-management'
      },
      {
        id: 'financial-management-reporting-management',
        name:
          'Financial Management (Corporate, Development Portfolio, Project & Individual Properties) Reporting Management',
        description:
          'iBUILD’s Robust Reporting Management tool delivers real-time financials, productivity metrics, and statistical insights across clients, vendors, and departments—empowering informed decisions and transparent project oversight. With automated comparisons, performance tracking, and visual reporting, it builds trust and drives accountability at every level.',
        slug: 'financial-management-reporting-management'
      },
      {
        id: 'online-accounting-integration-management',
        name:
          'On-line Accounting Integration Management',
        description:
          'iBUILD’s Online Accounting Integration Management tool automates financial processes by eliminating manual job cost coding and job cost posting, syncing transactions in real time with third-party accounting systems. This seamless integration boosts data accuracy, streamlines purchasing, and frees your team to focus on strategic priorities.',
        slug: 'online-accounting-integration-management'
      },
      {
        id: 'statement-of-adjustments-management',
        name: 'Statement Of Adjustments Management',
        description:
          'iBUILD’s Statement of Adjustments Management tool automates detailed financial reports for real estate transactions, ensuring every adjustment is clearly documented and lawyer ready. By identifying exact possession-day amounts and promoting full transparency, it builds confidence and precision into every sale closure.',
        slug: 'statement-of-adjustments-management'
      },
      {
        id: 'wildcast-individual-global-notifications-management',
        name: 'WildCast Individual & Global Notifications Management',
        description:
          'iBUILD’s WidCast Individual & Global Notifications Management tool ensures time-sensitive tasks and documents—like POs, change orders, and warranty requests—are never missed by delivering targeted reminders to individuals or company-wide. With built-in productivity tracking and automated alerts, it streamlines communication, boosts accountability, and keeps every stakeholder aligned and informed.',
        slug: 'wildcast-individual-global-notifications-management'
      },
      {
        id: 'category-cost-codes',
        name: 'Category / Cost Codes Master File Management Combined With Project Components Profiles Master File  Management',
        description:
          'iBUILD’s Category/Cost Codes and Project Components Profiles Master Files form the backbone of the entire system, driving instant project creation, estimating, scheduling, and document automation in the exact sequence of construction. With predefined, customizable profiles and seamless integration across all modules, they ensure consistency, accuracy, and operational speed from start to finish.',
        slug: 'category-cost-codes'
      },
            {
        id: 'system-admin-settings-command-centre-managment',
        name: 'System Administration / Settings Command Centre Management',
        description:
          'iBUILD’s System Administration and Settings Management tool acts as the central command hub, configuring and calibrating every module—from user roles and tax settings to notifications, accounting, and project profiles—for optimal performance. By aligning all operational tools with company-specific parameters, it ensures precision, consistency, and seamless execution across your entire platform.',
        slug: 'system-admin-settings-command-centre-managment'
      }
    ]
  }
];

