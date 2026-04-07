export interface Project {
  id: string;
  name: string;
  description: string;
  yourWork: string;
  demonstrates: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  stars?: string;
}

export interface CompanySection {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: Project[];
}

export const companySections: CompanySection[] = [
  {
    company: "Turo",
    role: "Lead Software Engineer",
    period: "Mar 2023 - Present",
    description: "Turo is the world's largest peer-to-peer car-sharing marketplace, allowing private car owners to rent out their vehicles to travelers and locals via its app and website.",
    projects: [
      {
        id: "Turo-platform",
        name: "Turo Car Rental Marketplace Platform",
        description: "Peer-to-peer car sharing marketplace connecting car owners with renters. Features dynamic pricing algorithms, vehicle availability calendars, digital key handoff, insurance integration, and AI-driven vehicle recommendations based on location, trip type, and user preferences.",
        yourWork: "Led frontend architecture for the vehicle discovery and booking engine using React and TypeScript. Built the AI-powered recommendation system that analyzes renter history, location data, vehicle attributes, and seasonal demand to surface optimal car matches. Implemented real-time availability calendar with WebSocket sync for owner vehicle schedules. Optimized search performance with Elasticsearch across 10,000+ vehicle listings, reducing search latency by 55%. Integrated Stripe Connect for split payments between Turo and car owners.",
        demonstrates: "Full-stack marketplace engineering at scale, combining real-time availability, payment orchestration, and ML-driven matching. The booking platform contributed to a 35% increase in completed trips and reduced average booking time from minutes to seconds.",
        technologies: ["React", "TypeScript", "Node.js", "Elasticsearch", "WebSockets", "AWS", "Stripe Connect"],
        demoUrl: "https://turo.com",
        image: "/images/turo_web_app.png",
      },
      {
        id: "Turo Apple App",
        name: "Peer-to-Peer Car Rental Marketplace Platform",
        description: "Core marketplace platform connecting car owners (hosts) with renters (guests) across multiple countries. Features AI-powered vehicle recommendations, real-time availability and location tracking, dynamic pricing insights, host/guest trust scoring, and integrated booking & payment workflows.",
        yourWork: "Led the architecture and development of the discovery and booking engine using React Native and TypeScript. Built the AI-powered vehicle recommendation system that analyzes search history, location, trip duration, and user preferences to surface optimal car listings. Implemented real-time WebSocket-based availability synchronization and host-guest chat system. Optimized search performance with Elasticsearch and geolocation indexes, reducing vehicle discovery time by 55%.",
        demonstrates: "Full-stack marketplace platform engineering at scale, combining mobile-first frontend excellence with real-time matching algorithms. The recommendation engine directly contributed to a 35% increase in booking conversion rates and reduced time-to-booking from hours to minutes.",
        technologies: ["React Native", "TypeScript", "Node.js", "Elasticsearch", "WebSockets", "AWS", "GraphQL"],
        demoUrl: "https://apps.apple.com/us/app/turo-car-rental-marketplace/id555063314",
        image: "/images/turo_mobile_app.png",
      }
    ],
  },
  {
    company: "Stripe",
    role: "Senior Software Engineer",
    period: "Jan 2021 - Dec 2022",
    description: "Stripe is a leading, privately owned financial technology company, valued at roughly $159 billion, that provides economic infrastructure for online businesses. Founded in 2009 by Patrick and John Collison, it enables companies of all sizes to accept payments, manage subscriptions, and handle financial operations globally.",
    projects: [
      {
        "id": "stripe-app-marketplace",
        "name": "Stripe App Marketplace Platform",
        "description": "An ecosystem platform allowing third-party developers to build and distribute apps that integrate directly within the Stripe Dashboard. Features app discovery, installation workflows, OAuth-based permissions, and deeply embedded UI surfaces for extending Stripe's core payment functionality.",
        "yourWork": "Led frontend architecture for the App Marketplace discovery and installation experience using React and TypeScript. Built the embedded app iframe sandboxing system and cross-origin messaging bridge for secure app-to-Stripe communication. Designed the app detail page with real-time review aggregation, permission scoping UI, and one-click install flows. Implemented usage-based billing hooks for paid apps. Reduced app installation friction by 50% through streamlined OAuth flows.",
        "demonstrates": "Platform extensibility at enterprise scale, enabling Stripe to evolve into an operating system for internet commerce. The marketplace grew to 50+ third-party apps within the first year, expanding Stripe's TAM beyond payments.",
        "technologies": ["React", "TypeScript", "Node.js", "PostgreSQL", "OAuth 2.0", "iframe sandboxing", "AWS"],
        "demoUrl": "https://marketplace.stripe.com/",
        "image": "/images/stripe-app-marketplace.png"
      },
      {
        "id": "stripe-tax",
        "name": "Stripe Tax Automation Engine",
        "description": "Automated tax calculation and remittance product that determines correct sales tax, VAT, and GST across 50+ US states and 35+ countries. Features real-time tax rate lookup, product taxability rules engine, exemption certificate management, and auto-generated filing reports.",
        "yourWork": "Built the tax rules engine and jurisdiction resolution system using TypeScript and Node.js. Implemented real-time geolocation-based tax determination that considers origin/destination, product type, and customer exemption status. Designed the exemption certificate upload and validation workflow with OCR extraction. Optimized tax rate caching with Redis, reducing API latency from 150ms to 25ms. Integrated with Avalara as a fallback provider for edge cases.",
        "demonstrates": "Complex regulatory automation at global scale, transforming a major merchant pain point into a revenue-generating product. Stripe Tax processed billions in tax calculations within 6 months of launch, with 99.99% accuracy.",
        "technologies": ["TypeScript", "Node.js", "Redis", "PostgreSQL", "OCR (Tesseract)", "REST API", "AWS Lambda"],
        "demoUrl": "https://stripe.com/tax",
        "image": "/images/stripe-tax.png"
      },
      {
        "id": "stripe-identity",
        "name": "Stripe Identity Verification Service",
        "description": "Programmatic identity verification product enabling businesses to confirm user identities via government ID and selfie capture. Features document OCR and forgery detection, liveness detection, facial similarity matching, and automated AML/PEP screening.",
        "yourWork": "Led frontend SDK development for document capture and selfie flows using React Native and WebRTC. Built the real-time verification status webhook system and dashboard review queue for manual fallback cases. Implemented machine learning pipeline orchestration that routes verification requests to appropriate models based on document type and country. Reduced false positive rates by 35% through multi-model ensemble voting.",
        "demonstrates": "Production ML infrastructure combined with privacy-conscious frontend design. Stripe Identity verifies millions of users annually, enabling use cases from age-restricted marketplaces to crypto exchanges.",
        "technologies": ["React Native", "TypeScript", "WebRTC", "TensorFlow.js", "Python (ML models)", "Kafka", "AWS Rekognition"],
        "demoUrl": "https://stripe.com/identity",
        "image": "/images/stripe-identity.png"
      },
      {
        "id": "stripe-financial-connections",
        "name": "Stripe Financial Connections API",
        "description": "Open banking product enabling businesses to securely access customer financial account data for underwriting, cash flow analysis, and balance verification. Integrates with 10,000+ financial institutions via Plaid partnership and direct APIs across US, Canada, and Europe.",
        "yourWork": "Built the OAuth institution selection UI and account aggregation dashboard using React and TypeScript. Implemented the data permission consent management system with granular scope controls (balance, transactions, ownership). Designed the webhook event system for real-time account change notifications. Created the merchant-facing analytics dashboard showing approval rates and institution performance. Achieved 95% institution coverage success rate.",
        "demonstrates": "Open banking infrastructure that positions Stripe as a full-stack financial services platform. Financial Connections reduced manual underwriting time for lenders from days to minutes.",
        "technologies": ["React", "TypeScript", "Node.js", "OAuth 2.0", "Plaid API", "WebSockets", "PostgreSQL"],
        "demoUrl": "https://stripe.com/financial-connections",
        "image": "/images/stripe-financial-connections.png"
      },
      {
        "id": "frontier-climate",
        "name": "Frontier Carbon Removal Advance Market Commitment",
        "description": "A $1 billion advance market commitment co-founded by Stripe, Alphabet, Shopify, and McKinsey to accelerate permanent carbon removal technologies. Features a procurement platform for vetting carbon removal startups, issuing offtake agreements, and verifiable carbon credit delivery tracking.",
        "yourWork": "Led engineering for the carbon removal startup application and due diligence portal using React and TypeScript. Built the offtake agreement generation system with DocuSign integration and automated milestone-based payment scheduling. Implemented the carbon credit registry interface tracking MRV (Measurement, Reporting, Verification) data per ton of CO2 removed. Created the public dashboard showing real-time procurement progress toward the $1B commitment.",
        "demonstrates": "Mission-driven platform engineering at climate-relevant scale. Frontier has committed $50M+ to early-stage carbon removal companies including Climeworks, Charm Industrial, and Running Tide within its first year.",
        "technologies": ["React", "TypeScript", "Node.js", "PostgreSQL", "DocuSign API", "GraphQL", "AWS"],
        "demoUrl": "https://frontierclimate.com",
        "image": "/images/frontier-climate.png"
      },
      {
        "id": "stripe-climate",
        "name": "Stripe Climate Carbon Removal Program",
        "description": "Expansion of Stripe's carbon removal commitment, allowing Stripe users to divert a fraction of their revenue (starting at 1%) to fund permanent carbon removal. Features automated carbon purchase allocation, project portfolio management, and merchant-facing impact dashboards with real-time tonnage tracking.",
        "yourWork": "Built the merchant opt-in flow and impact dashboard using React and TypeScript. Implemented automated carbon purchase batching that aggregates millions of micro-transactions into quarterly carbon removal purchases. Designed the project portfolio tracker displaying individual supplier performance (Climeworks, Charm, etc.) with cost-per-ton and removal permanence metrics. Reduced reporting latency from monthly to real-time via event-sourced architecture.",
        "demonstrates": "Embedded climate action into core payment flows at scale. Stripe Climate now powers carbon removal for 30,000+ businesses, with millions of dollars annually directed to permanent carbon removal.",
        "technologies": ["React", "TypeScript", "Node.js", "Event Sourcing", "PostgreSQL", "Redis", "AWS SQS"],
        "demoUrl": "https://stripe.com/climate",
        "image": "/images/stripe-climate.png"
      }
    ],
  },
  {
    company: "BigCommerce",
    role: "Software Engineer",
    period: "Jul 2018 - Sep 2020",
    description: "Leading open SaaS e-commerce platform powering modern buying experiences across brands, regions, and channels — from a single, scalable foundation trusted by thousands of merchants worldwide.",
    projects: [
      {
        id: "bigcommerce-platform",
        name: "E-Commerce Platform Core",
        description: "Core commerce platform enabling merchants to build, manage, and scale their online stores with enterprise-grade features including product management, order processing, and multi-channel selling capabilities.",
        yourWork: "Developed key storefront components using React and TypeScript, including the product catalog, shopping cart, and checkout flow. Built the real-time inventory management system that synchronizes stock levels across multiple sales channels. Implemented server-side rendering for critical pages, improving Core Web Vitals scores by 40%. Designed the theme customization engine that allows merchants to create branded storefronts without coding.",
        demonstrates: "E-commerce frontend expertise at scale, handling high-traffic events like Black Friday with 10x normal load. The checkout optimization work directly contributed to a 15% improvement in conversion rates across the platform.",
        technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Redis", "PostgreSQL"],
        demoUrl: "https://www.bigcommerce.com",
        image: "/images/bigcommerce-platform.png",
      },
      {
        id: "bigcommerce-developer",
        name: "Developer Portal & API Platform",
        description: "Comprehensive developer ecosystem providing documentation, SDKs, API references, and tools for building custom storefronts, apps, and integrations on the BigCommerce platform.",
        yourWork: "Built the interactive developer portal using React with live API explorers and code playgrounds. Designed the SDK generation pipeline that automatically creates type-safe client libraries from OpenAPI specifications. Implemented the webhook management system allowing developers to subscribe to real-time commerce events. Created the app marketplace submission and review workflow used by thousands of third-party developers.",
        demonstrates: "Developer experience engineering and API platform design. The developer portal saw a 60% increase in third-party app submissions after launch, directly growing the BigCommerce ecosystem.",
        technologies: ["React", "TypeScript", "OpenAPI", "Node.js", "REST APIs", "GraphQL"],
        demoUrl: "https://developer.bigcommerce.com",
        image: "/images/bigcommerce-developer.png",
      },
      {
        id: "bigcommerce-api",
        name: "REST & GraphQL API Architecture",
        description: "Unified API layer powering the BigCommerce platform — combining REST APIs for store management with a GraphQL Storefront API for high-performance, headless commerce experiences.",
        yourWork: "Led the design and implementation of the GraphQL Storefront API, enabling headless commerce architectures. Built the API gateway with rate limiting, authentication, and request routing handling 50K+ requests per minute. Implemented query optimization with intelligent caching and DataLoader patterns, reducing average API response times by 45%. Designed the versioning strategy that allows backward-compatible API evolution.",
        demonstrates: "API architecture expertise at massive scale. The GraphQL API became BigCommerce's fastest-growing developer product, enabling the headless commerce movement that attracted major enterprise merchants.",
        technologies: ["GraphQL", "Node.js", "TypeScript", "Redis", "PostgreSQL", "REST APIs"],
        demoUrl: "https://developer.bigcommerce.com/api-docs",
        image: "/images/bigcommerce-api.png",
      },
      {
        id: "bigcommerce-multistorefront",
        name: "Multi-Storefront Architecture",
        description: "Enterprise multi-storefront system enabling merchants to manage multiple brands, regions, and B2B/B2C channels from a single BigCommerce instance with shared catalogs and independent configurations.",
        yourWork: "Architected the multi-storefront data isolation layer that allows shared product catalogs with per-storefront pricing, inventory, and content. Built the storefront management UI enabling merchants to configure independent themes, domains, and checkout flows. Implemented the channel-aware API middleware that routes requests to the correct storefront context. Designed the analytics aggregation system providing both per-store and consolidated reporting.",
        demonstrates: "Complex multi-tenant architecture design for enterprise e-commerce. Multi-storefront became BigCommerce's key enterprise differentiator, directly cited in deals with major retail brands managing 10+ storefronts.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Microservices"],
        demoUrl: "https://www.bigcommerce.com",
        image: "/images/bigcommerce-multistorefront.png",
      },
    ],
  },
  {
    company: "Zocdoc",
    role: "Software Engineer",
    period: "Jan 2017 - Jun 2018",
    description: "Leading healthcare marketplace connecting patients with doctors, enabling instant appointment booking, insurance verification, and telehealth visits — trusted by millions of patients and thousands of providers.",
    projects: [
      {
        id: "zocdoc-booking",
        name: "Patient Booking Platform",
        description: "Core appointment booking system allowing patients to search for doctors by specialty, location, and insurance — with real-time availability, verified reviews, and instant online scheduling.",
        yourWork: "Built the doctor search and booking interface using React, featuring real-time availability calendars, insurance verification, and location-based search with map integration. Implemented the search ranking algorithm that balances relevance, availability, and patient ratings. Designed the booking confirmation flow with automated SMS/email reminders that reduced no-show rates by 25%. Optimized page load performance achieving sub-2-second Time to Interactive.",
        demonstrates: "Consumer-facing product engineering with direct impact on healthcare access. The booking flow handles millions of monthly searches and processes hundreds of thousands of appointments, making healthcare more accessible.",
        technologies: ["React", "TypeScript", "C#", ".NET", "Elasticsearch", "Redis"],
        demoUrl: "https://www.zocdoc.com",
        image: "/images/zocdoc-booking.png",
      },
      {
        id: "zocdoc-providers",
        name: "Provider Growth Platform",
        description: "Practice management portal enabling healthcare providers to grow their patient base, manage online presence, track performance metrics, and optimize their Zocdoc profiles for maximum visibility.",
        yourWork: "Developed the provider dashboard with patient analytics, appointment management, and review response tools. Built the practice growth insights engine that recommends profile optimizations based on search ranking factors. Implemented the provider onboarding workflow that reduced setup time from 2 hours to 15 minutes through automated credential verification. Designed the revenue reporting system tracking ROI for provider subscriptions.",
        demonstrates: "B2B product engineering for healthcare providers. The provider platform serves thousands of practices and the onboarding improvements directly accelerated provider acquisition by 40%.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Azure"],
        demoUrl: "https://www.zocdoc.com/join/",
        image: "/images/zocdoc-providers.png",
      },
      {
        id: "zocdoc-telehealth",
        name: "Telehealth & Virtual Care Platform",
        description: "HIPAA-compliant telehealth system enabling video consultations between patients and doctors — with integrated scheduling, waiting rooms, prescription management, and post-visit summaries.",
        yourWork: "Architected the WebRTC-based video consultation system with automatic quality adaptation for varying network conditions. Built the virtual waiting room with real-time queue management and estimated wait time calculations. Implemented end-to-end encryption for all telehealth sessions ensuring HIPAA compliance. Designed the post-visit workflow including prescription management and follow-up scheduling that increased patient retention by 30%.",
        demonstrates: "Real-time communication and healthcare compliance expertise. The telehealth platform launched during a critical period of demand growth, scaling from zero to hundreds of thousands of monthly virtual visits.",
        technologies: ["React", "TypeScript", "WebRTC", "Node.js", "WebSockets", "AWS"],
        image: "/images/zocdoc-telehealth.png",
      },
      {
        id: "zocdoc-search",
        name: "Healthcare Search & Discovery Engine",
        description: "Intelligent search system helping patients find the right doctor based on specialty, symptoms, insurance compatibility, availability, location, and verified patient reviews with advanced filtering.",
        yourWork: "Built the faceted search interface with real-time filtering across 20+ dimensions including specialty, insurance, language, gender, and availability windows. Implemented the typeahead search with NLP-powered symptom-to-specialty mapping that helps patients who don't know which type of doctor they need. Designed the search result ranking algorithm incorporating proximity, availability density, patient satisfaction scores, and booking conversion rates. Optimized Elasticsearch queries reducing p95 search latency from 800ms to 120ms.",
        demonstrates: "Search infrastructure expertise applied to healthcare discovery. The search improvements directly correlated with a 20% increase in successful bookings, connecting more patients with the right providers faster.",
        technologies: ["React", "TypeScript", "Elasticsearch", "Python", "Redis", "PostgreSQL"],
        demoUrl: "https://www.zocdoc.com",
        image: "/images/zocdoc-search.png",
      },
    ],
  },
  {
    company: "OpenLearning",
    role: "Full Stack Engineer",
    period: "Jan 2015 - Dec 2016",
    description: "AI-powered social learning management system connecting 5M+ learners, 231+ institutions, and 18K+ courses — turning education progress into public, career-shaping proof through active learning.",
    projects: [
      {
        id: "openlearning-platform",
        name: "Social Learning Platform",
        description: "Interactive learning management system where learners engage through discussion forums, peer reviews, collaborative projects, and portfolio building — with AI-powered content recommendations and progress tracking.",
        yourWork: "Built the course creation and delivery interface using React, featuring drag-and-drop lesson builders, rich media embedding, and real-time collaborative editing. Implemented the social learning features including threaded discussions, peer review workflows, and group project spaces. Designed the gamification system with achievement badges, progress milestones, and leaderboards that increased course completion rates by 35%. Built the responsive mobile experience serving learners across devices.",
        demonstrates: "EdTech product engineering with focus on engagement and learning outcomes. The platform serves millions of learners across 231+ institutions, proving the ability to build products that scale globally while maintaining excellent user experience.",
        technologies: ["React", "JavaScript", "Python", "Django", "PostgreSQL", "Redis"],
        demoUrl: "https://www.openlearning.com",
        image: "/images/openlearning-platform.png",
      },
      {
        id: "openlearning-courses",
        name: "Course Marketplace & Discovery",
        description: "Comprehensive course marketplace with advanced search, filtering by credential type, topic area, and institution — connecting learners with certificates, diplomas, micro-credentials, and degree programs worldwide.",
        yourWork: "Developed the course marketplace frontend with faceted search, category browsing, and personalized recommendations. Built the course enrollment and payment processing pipeline supporting multiple currencies and payment methods. Implemented the course review and rating system with verified enrollment badges. Designed the institution onboarding portal that reduced course publishing time from days to hours, enabling rapid marketplace growth.",
        demonstrates: "Marketplace engineering and search infrastructure for education. The marketplace grew to 18K+ courses across 231+ institutions during this period, demonstrating the ability to build scalable marketplace platforms.",
        technologies: ["React", "JavaScript", "Python", "Django", "Elasticsearch", "AWS"],
        demoUrl: "https://www.openlearning.com/courses/",
        image: "/images/openlearning-courses.png",
      },
    ],
  },
  {
    company: "Lazada",
    role: "Junior Software Engineer",
    period: "Jan 2014 - Dec 2014",
    description: "Southeast Asia's leading e-commerce platform (Alibaba Group) connecting millions of shoppers with sellers across 6 countries — offering a safe, seamless shopping experience with cutting-edge logistics and payments infrastructure.",
    projects: [
      {
        id: "lazada-marketplace",
        name: "E-Commerce Marketplace",
        description: "High-traffic consumer marketplace serving millions of daily shoppers across Southeast Asia — featuring dynamic product catalogs, flash sales, personalized recommendations, and multi-language support across 6 countries.",
        yourWork: "Built responsive storefront components for product listings, search results, and category pages using JavaScript and CSS3. Implemented lazy loading, image optimization, and code splitting that improved page load times by 40%. Built the flash sale countdown system and promotional banner engine that drove 30% of monthly revenue during sale events. Developed the multi-language support system handling English, Bahasa, Thai, Vietnamese, and Filipino content.",
        demonstrates: "High-traffic e-commerce frontend development with focus on performance and internationalization. Working at Lazada provided foundational experience building consumer applications serving millions of users across diverse Southeast Asian markets.",
        technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "PHP", "MySQL"],
        demoUrl: "https://www.lazada.com",
        image: "/images/lazada-marketplace.png",
      },
      {
        id: "lazada-seller",
        name: "Seller Center & Analytics",
        description: "Comprehensive seller management portal providing tools for product listing, inventory management, order fulfillment, sales analytics, and performance tracking — empowering hundreds of thousands of merchants across Southeast Asia.",
        yourWork: "Developed the seller dashboard with real-time sales analytics, inventory alerts, and order management workflows. Built the bulk product upload system supporting CSV imports with validation and error handling for catalogs with 100K+ SKUs. Implemented the seller performance scoring algorithm that evaluates response time, fulfillment rate, and customer satisfaction. Designed the automated pricing recommendation engine based on competitor analysis and market demand.",
        demonstrates: "B2B platform engineering for marketplace sellers at scale. The seller center improvements contributed to a 25% increase in seller activation rates and reduced product listing time by 60%.",
        technologies: ["JavaScript", "PHP", "MySQL", "Redis", "REST APIs", "jQuery"],
        demoUrl: "https://www.lazada.com",
        image: "/images/lazada-seller.png",
      },
    ],
  },
];

export const allProjects = companySections.flatMap(s => s.projects);