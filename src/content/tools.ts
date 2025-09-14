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
      "1. Enhancing Your Company’s Professional Image & Relationships With Your Third-Party Associates Management - Tools Section",
    tools: [
      {
        id: 'project-proforma-financial-forecasting-management',
        name: 'Project Proforma Financial Forecasting Management',
        description:
          'iBUILD’s Project Proforma Financial Forecasting tools remain a game changer in real estate financing, particularly for multi-family builds. By eliminating guesswork and streamlining strategies on investment projects’ cost projections, it not only fosters decision-making but also enhances credibility for third-party stakeholders. iBUILD gives project developers speed to securing capital they need with precision and confidence.',
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
        name: 'Sales Customer Relations Portal Views Management',
        description:
          'iBUILD’s Sales Customer Relations Portal Views Management makes managing your client experience seamless. By integrating client portal views into the system, sales representatives can easily keep track of leads, discussions, and communications, providing transparency and instilling trust throughout the lifecycle. As a result, it boosts client relationships, improves team efficiency, and transforms your communications from reactive to proactive management.',
        slug: 'sales-customer-relations-portal-views-management'
      },
      {
        id: 'client-interior-exterior-selections-management',
        name: 'Client Interior & Exterior Selections Management',
        description:
          'iBUILD’s Client Interior & Exterior Selections Management empowers homeowners to personalize every detail from exterior design, interior finishes, and amenities, to even selecting the foundation process. A smart, client-centered approach that removes your clients’ anxiety of full customization for their single-family or multi-family dream home.',
        slug: 'client-interior-exterior-selections-management'
      }
    ]
  },
  {
    id: 'home-building-processes-management',
    title:
      '2. Simplifying Your Home Building Processes Management - Tools Section',
    tools: [
      {
        id: 'job-creation-management',
        name: 'Job Creation Management',
        description:
          'iBUILD’s Job Creation Management tool instantly generates job numbers and sets up all project components—whether for single-family homes, multi-family developments, or land ventures—saving you hours of manual data entry. With simplified client instructions, smooth workflows, and built-in administrative control, it empowers teams to launch projects with ease and the confidence of precision.',
        slug: 'job-creation-management'
      },
      {
        id: 'price-book-management',
        name: 'Price Book Management',
        description:
          'iBUILD’s Price Book Management tool equips your sales team with pre-defined pricing for materials, labor, and components. It standardizes cost inputs, reduces errors, and enhances project budgeting efficiency. By simplifying client interaction and handling, it transforms pricing into a streamlined process of trust, speed, and satisfaction.',
        slug: 'price-book-management'
      },
      {
        id: 'changes-to-contract-management',
        name: 'Changes To Contract (CTCs) Management',
        description:
          'iBUILD’s Changes To Contract (CTCs) Management tool streamlines any optional or mandatory client changes from the base building process. The Change To Contract (CTC) Management tool also aligns and automates change logs updates via the Client Portal. It ensures transparency, reduces ambiguity, and strengthens accountability with clear documentation.',
        slug: 'changes-to-contract-management'
      },
      {
        id: 'change-orders-management',
        name: 'Change Orders (COs) Management',
        description:
          'iBUILD’s Change Orders (COs) Management tool streamlines client change requests by integrating real-time updates from the Price Book module and secure signature features. With instant access to signed COs via the Client Portal, it enhances transparency, reduces disputes, and strengthens contract flexibility.',
        slug: 'change-orders-management'
      },
      {
        id: 'vendor-master-file-management',
        name: 'Vendor Master File Management',
        description:
          'iBUILD’s Vendor Master File Management tool is central to your operational efficiency, allowing for seamless organization and tracking of vendors, trades, and suppliers. A comprehensive database ties each vendor to project requirements, keeping information accessible and up-to-date, enabling smarter, timely decisions.',
        slug: 'vendor-master-file-management'
      },
      {
        id: 'estimating-quote-requests-contract-bidding-management',
        name: 'Estimating Quote Requests (QR’s) Contract Bidding Management',
        description:
          'iBUILD’s Estimating Quote Requests (QRs) Contract Bidding Management tool automates every step of the quote management process—from bid creation to vendor evaluation—turning bid management into a quick, strategic advantage. It ensures accurate estimating, keeps projects on budget, and simplifies vendor comparisons, all within one cohesive system.',
        slug: 'estimating-quote-requests-contract-bidding-management'
      },
      {
        id: 'purchasing-pos-management',
        name: 'Purchasing (POs) Management',
        description:
          'iBUILD’s Purchasing (POs) Management tool automates procurement by instantly converting winning bids into pre-coded purchase orders, which are emailed to vendors and seamlessly recorded in your accounting system. With real-time notifications and vendor portal access, it eliminates manual data entry while bringing transparency across your supply chain.',
        slug: 'purchasing-pos-management'
      },
      {
        id: 'construction-scheduling-monitoring-management',
        name: 'Construction Scheduling & Monitoring Management',
        description:
          'iBUILD’s Construction Scheduling & Monitoring Management tools automate project timelines with customizable reports and schedules, real-time Gantt charts, and an integrated Task Management system for both on-site and remote teams. By equipping site supervisors with detailed scopes of work and proactive oversight tools, it transforms construction management into a streamlined, high-performance operation.',
        slug: 'construction-scheduling-monitoring-management'
      },
      {
        id: 'warranty-management',
        name: 'Warranty Management',
        description:
          'iBUILD’s Warranty Management tool streamlines client service requests by enabling clients to submit warranty issues directly through their online portal. With automated notifications, prioritization of urgent cases, and comprehensive tracking, it builds trust, strengthens relationships, and turns satisfied clients into devoted advocates.',
        slug: 'warranty-management'
      }
    ]
  },
  {
    id: 'business-management-tools',
    title:
      '3. iBUILD’s Empowering Cutting-Edge Business Management Tools - Tools Section',
    tools: [
      {
        id: 'document-auto-file-task-assignments-management',
        name: 'Document Auto File Task Assignments Management',
        description:
          'iBUILD’s Document Auto File Task Assignments Management tool allows you to automate document-based tasks with intelligent project integration, ensuring nothing is overlooked. Each uploaded document automatically triggers predefined task assignments, providing cohesive project coordination, reducing errors, and increasing overall team efficiency.',
        slug: 'document-auto-file-task-assignments-management'
      },
      {
        id: 'financial-management-reporting-management',
        name:
          'Financial Management (Corporate, Development Portfolio, Project & Individual Properties) Reporting Management',
        description:
          'iBUILD’s Financial Management (Corporate, Development Portfolio, Project & Individual Properties) Reporting Management tool gives your finance department unparalleled insight into financial performance. Real-time dashboards, customizable reporting, and robust financial controls transform decision-making, ensuring accurate forecasting, regulatory compliance, and stakeholder trust.',
        slug: 'financial-management-reporting-management'
      },
      {
        id: 'project-management-templates-auto-load-management',
        name: 'Project Management Templates with Auto Load Templates Management',
        description:
          'iBUILD’s Project Management Templates with Auto Load Templates Management tool provides over 150 customizable, industry-specific templates designed to streamline your project setup process. It saves time, enforces standardization, and enhances productivity across construction management phases—keeping every project consistent, compliant, and efficient.',
        slug: 'project-management-templates-auto-load-management'
      },
      {
        id: 'revenue-management-modules-tools-management',
        name:
          'iBuild’s Revenue Management Modules (including all Government Tax Collection Modules) Tools Management',
        description:
          'iBUILD’s Revenue Management Modules (including all Government Tax Collection Modules) Tools Management tool centralizes all revenue-related processes, integrating municipal, provincial/state, and federal tax collection modules. It ensures accurate billing, real-time auditing, and comprehensive revenue tracking—all within one secure, intuitive platform.',
        slug: 'revenue-management-modules-tools-management'
      },
      {
        id: 'statement-of-adjustments-management',
        name: 'Statement Of Adjustments Management',
        description:
          'iBUILD’s Statement Of Adjustments Management tool is an indispensable tool for managing financial adjustments in real estate possession transactions with clarity. The automated SOA report outlines all financial adjustments related to the purchase or sale of a property, ensuring transparency and accuracy.',
        slug: 'statement-of-adjustments-management'
      },
      {
        id: 'wildcast-individual-global-notifications-management',
        name: 'WildCast Individual & Global Notifications Management',
        description:
          'iBUILD’s WildCast Individual & Global Notifications Management is a powerful tool for managing internal notifications efficiently. Within the settings or administration area, you can assign departmental predefined task notifications to specific individuals within a department. This targeted approach ensures that relevant notifications reach the right staff members promptly.',
        slug: 'wildcast-individual-global-notifications-management'
      },
      {
        id: 'to-do',
        name: 'To-Do',
        description:
          'iBUILD’s To-Do tool makes it easy to create and assign tasks to your team and subcontractors. Keep them on track with automatic reminders, as well.',
        slug: 'to-do'
      },
      {
        id: 'discussion-feed',
        name: 'Discussion Feed',
        description:
          'iBUILD’s Discussion Feed is a vital tool for managing communication flows between one-on-one and group discussions on a task both internally and externally. Discussion Feed streamlines communication and keeps everyone informed and ensures that critical issues are discussed and brainstormed. It’s the heartbeat of efficient internal notifications! It also resolves all the He Said / She Said issues when they arise.',
        slug: 'discussion-feed'
      }
    ]
  }
];

