export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  useCases: string[];
  deliverables: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureWorkflow: string[];
  technologies: string[];
  keyHighlights: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  location: string;
  positioning: string;
  clientsServed: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  address: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "aicareio",
  tagline: "AI Solutions for Real-World Businesses",
  location: "Jaipur, Rajasthan, India",
  positioning: "AI consulting, enterprise AI products, intelligent automation and software engineering.",
  clientsServed: "100+ clients served across diverse business domains",
  email: "designerstudio597@gmail.com",
  phone: "+91 82098 18868",
  whatsappNumber: "918209818868",
  address: "Jaipur, Rajasthan, India",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-workflow-automation",
    category: "Workflow Automation",
    title: "AI & Workflow Automation",
    tagline: "Transform high-friction, repetitive business processes into intelligent, event-driven automated workflows.",
    problem: "Operational bottlenecks, slow manual handoffs between teams, and redundant back-office workflows restrict business agility and inflate operational overhead.",
    solution: "We build custom AI agents and event-triggered pipeline automations that integrate with your internal CRM, ERP, databases, and communication channels to execute complex business tasks autonomously.",
    howItWorks: [
      "Process Discovery: Mapping human touchpoints, data sources, and operational rules.",
      "Event Ingestion & Routing: Webhooks and event streams capture incoming customer actions or system triggers.",
      "Intelligent Decision Engine: LLMs and decision trees parse, classify, and validate incoming data.",
      "System Execution: Executing actions via verified APIs, webhooks, and database updates with audit logs.",
    ],
    useCases: [
      "Lead triage and immediate client qualification pipelines.",
      "Multi-system booking, cancellation, and reschedule workflows.",
      "Automated cross-departmental incident escalation and resolution.",
    ],
    deliverables: [
      "End-to-end automated pipelines with retry and fallback logic.",
      "Operational health dashboards and real-time execution logs.",
      "Secure webhook integrations with enterprise security standards.",
    ],
    icon: "Cpu",
  },
  {
    id: "custom-ai-ml",
    category: "Machine Learning",
    title: "Custom AI/ML Solutions",
    tagline: "Domain-specific predictive modeling, classification, and ranking systems engineered for real operational decisions.",
    problem: "Generic off-the-shelf models fail to capture industry-specific nuances, edge cases, and proprietary business heuristics.",
    solution: "We design, train, evaluate, and deploy tailored Machine Learning models utilizing your historical data, benchmarked against rigorous business KPIs.",
    howItWorks: [
      "Data Pipeline Engineering: Data cleansing, deduplication, imputation, and feature store design.",
      "Model Selection & Training: Benchmarking Gradient Boosting (XGBoost/LightGBM), Random Forests, and Deep Neural Networks.",
      "Model Explainability: Integrating SHAP and feature attribution to ensure transparent decisions.",
      "Scalable Inference: Deploying high-throughput, low-latency microservices with automated model monitoring.",
    ],
    useCases: [
      "Predictive customer churn and lifetime value forecasting.",
      "Intelligent demand forecasting and inventory replenishment.",
      "Dynamic pricing and real-time risk assessment scoring.",
    ],
    deliverables: [
      "Production-ready serialized models with inference APIs.",
      "Model training pipelines with versioning and validation metrics.",
      "Comprehensive evaluation reports and explainability visualizers.",
    ],
    icon: "BrainCircuit",
  },
  {
    id: "gen-ai-rag",
    category: "Generative AI",
    title: "Generative AI, LLM and RAG Applications",
    tagline: "Enterprise-grade Retrieval-Augmented Generation that grounds generative intelligence in your authoritative enterprise data.",
    problem: "Raw LLMs hallucinate facts, lack internal company context, and expose organizations to compliance and accuracy risks.",
    solution: "We construct secure, production-grade RAG systems with semantic chunking, hybrid retrieval, re-ranking, and strict attribution checks.",
    howItWorks: [
      "Ingestion & Semantic Chunking: Parsing internal PDFs, knowledge bases, manuals, and databases.",
      "Vector Embeddings & Indexing: Generating dense embeddings stored in FAISS/ChromaDB with metadata indexing.",
      "Hybrid Retrieval & Reranking: Combining BM25 keyword matching with dense vector search (RRF) and Cross-Encoder re-ranking.",
      "Grounded Generation: System prompts and citation-grounded synthesis with RAGAS evaluation safeguards.",
    ],
    useCases: [
      "Internal enterprise knowledge bots for compliance, SOPs, and technical docs.",
      "Executive query engines extracting actionable metrics from internal archives.",
      "Automated customer query synthesis with mandatory source citations.",
    ],
    deliverables: [
      "Production RAG microservice with vector storage integration.",
      "Citation-verified conversational interface and API endpoints.",
      "Evaluation benchmarks testing retrieval precision and answer grounding.",
    ],
    icon: "Sparkles",
  },
  {
    id: "nlp-idp",
    category: "NLP & Documents",
    title: "NLP and Intelligent Document Processing",
    tagline: "Extract structured intelligence from contracts, invoices, financial sheets, and messy unstructured text.",
    problem: "Organizations spend thousands of hours manually reading, transcribing, and validating information locked in paper scans and PDFs.",
    solution: "Our Intelligent Document Processing (IDP) pipelines unite advanced OCR, layout analysis, named entity recognition (NER), and LLM-driven structured JSON schemas.",
    howItWorks: [
      "Document Pre-processing: Deskewing, denoising, contrast optimization, and binarization via OpenCV.",
      "OCR & Spatial Extraction: Reading textual coordinates and table topologies with high accuracy.",
      "Information Extraction: Applying fine-tuned NER models and zero-shot schema extraction.",
      "Confidence Scoring & Validation: Algorithmic checks against business rules with human-in-the-loop triggers.",
    ],
    useCases: [
      "Automated vendor invoice and purchase order reconciliation.",
      "Contract clause extraction, risk assessment, and metadata indexing.",
      "KYC document parsing and automated customer onboarding.",
    ],
    deliverables: [
      "Automated ingestion pipeline accepting multi-format files (PDF, TIFF, JPEG).",
      "Normalized JSON data feeds connected directly to your core ERP.",
      "Audit trail records verifying confidence scores per extracted entity.",
    ],
    icon: "FileText",
  },
  {
    id: "computer-vision-ocr",
    category: "Computer Vision",
    title: "Computer Vision and OCR",
    tagline: "High-precision visual inspection, automated object recognition, and specialized document scanning engines.",
    problem: "Physical operations, quality control, and physical asset verification suffer from human fatigue and inconsistent manual oversight.",
    solution: "We develop computer vision models capable of real-time image and video frame analysis, object detection, and edge-deployable OCR.",
    howItWorks: [
      "Image Normalization: Pre-processing optical streams with OpenCV for lighting and angle invariance.",
      "Deep Vision Architectures: Implementing YOLO, Faster R-CNN, and custom vision transformers.",
      "High-Accuracy Text OCR: Utilizing PaddleOCR and Tesseract engines tuned for dense technical characters.",
      "Edge & Cloud Inference: Optimized execution utilizing TensorRT, ONNX, and Docker containers.",
    ],
    useCases: [
      "Industrial visual quality inspection and defect detection.",
      "Physical asset tagging, license plate recognition, and packaging inspection.",
      "Scanned utility bill and identity document digitisation.",
    ],
    deliverables: [
      "Containerized computer vision microservice with REST and WebSocket feeds.",
      "Annotated dataset validation protocols and precision-recall reports.",
      "Edge deployment packages optimized for low-latency hardware.",
    ],
    icon: "ScanFace",
  },
  {
    id: "web-apps-api",
    category: "Engineering",
    title: "Web Application and API Development",
    tagline: "High-performance React/Node.js web applications, resilient FastAPI backends, and scalable cloud architectures.",
    problem: "Powerful AI algorithms provide zero enterprise value if wrapped in unstable, slow, or poorly structured web interfaces.",
    solution: "We build enterprise-grade full-stack web platforms using React, TypeScript, Node.js, Express, and FastAPI with robust security and responsiveness.",
    howItWorks: [
      "Modern Frontend Architecture: Component-driven, responsive UI built with React, TypeScript, and modern styling.",
      "Resilient Microservices: High-speed asynchronous endpoints powered by Node.js and Python FastAPI.",
      "Data Architecture: Schema-enforced MongoDB and relational databases with indexing and caching.",
      "Production CI/CD: Automated containerization, testing pipelines, and cloud-ready configurations.",
    ],
    useCases: [
      "Internal analytics portals and enterprise business dashboards.",
      "B2B SaaS customer portals with role-based access control.",
      "High-throughput API gateways unifying disparate enterprise systems.",
    ],
    deliverables: [
      "Full source code repository with comprehensive TypeScript typings.",
      "Interactive API documentation (Swagger/OpenAPI).",
      "Production build configurations and deployment documentation.",
    ],
    icon: "Code2",
  },
  {
    id: "data-science-analytics",
    category: "Analytics",
    title: "Data Science and Analytics",
    tagline: "Transform fragmented enterprise data into structured metrics, interactive executive dashboards, and strategic foresight.",
    problem: "Data silos and disparate reporting spreadsheets prevent leadership from identifying underlying trends and operational waste.",
    solution: "We engineer end-to-end data pipelines, exploratory data analyses, and business intelligence dashboards that deliver immediate clarity.",
    howItWorks: [
      "Data Aggregation & Cleaning: Ingesting transactional logs, SQL databases, and flat files.",
      "Statistical Exploration: Identifying anomalies, correlations, cohort behaviors, and distributions.",
      "Metric Standardization: Establishing uniform business definitions across organizational departments.",
      "Interactive Visualizations: Building intuitive dashboards that translate numbers into clear actions.",
    ],
    useCases: [
      "Multi-channel operational performance tracking and margin analysis.",
      "Customer segment behavior profiling and cohort retention mapping.",
      "Automated management reports replacing manual weekly compilation.",
    ],
    deliverables: [
      "Automated data extraction and aggregation scripts.",
      "Interactive executive dashboards with drill-down filtering.",
      "Methodology documentation and analytical findings summary.",
    ],
    icon: "BarChart3",
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "hotel-hospitality-platform",
    badge: "Market Experience · Hospitality Product",
    title: "Hotel Operational Workflow & Guest Communication System",
    subtitle: "Taking a hospitality-focused operational product to market to solve real-world front-desk coordination and guest communication challenges.",
    summary: "Hotels face persistent coordination friction between front-desk teams, housekeeping, maintenance, and guest enquiries. This case study details our hands-on market experience designing, structuring, and launching a digital workflow product engineered specifically for hotel operations.",
    challenge: "In hotel environments, guest requests arrive simultaneously through phone calls, messaging channels, and front-desk visits. Front-desk staff are frequently overwhelmed, resulting in delayed room service, lost maintenance tickets, and inconsistent guest communication. Traditional hotel software is often clunky, desktop-bound, and detached from the mobile realities of operational staff.",
    solution: "We conceptualized and developed a consolidated digital workflow platform that unifies incoming guest requests into prioritized, trackable operational tasks. The platform routes service requests directly to the responsible department, tracks fulfillment timestamps, and maintains visibility for hotel management.",
    architectureWorkflow: [
      "Guest Request Ingestion: Capturing guest enquiries from digital interfaces and front-desk input.",
      "Operational Classification: Categorizing tickets into Housekeeping, Maintenance, Front Desk, or Concierge.",
      "Dynamic Task Routing: Assigning tasks to active on-duty personnel based on departmental load.",
      "SLA Tracking & Escalation: Real-time countdown timers monitoring response times against hotel standards.",
      "Management Visibility: Centralized overview giving supervisors full transparency over pending and completed requests.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "RESTful Web APIs", "State Management", "Responsive UI"],
    keyHighlights: [
      "Built from direct market research into daily hotel operational bottlenecks.",
      "Designed specifically for high-stress, fast-paced front-desk workflows.",
      "Clear visual hierarchy allowing staff to prioritize critical guest needs in seconds.",
      "Illustrative dashboard architecture demonstrating scalable enterprise software engineering.",
    ],
  },
  {
    id: "enterprisedoc-ai",
    badge: "Enterprise RAG · Document Intelligence",
    title: "EnterpriseDoc AI: High-Accuracy RAG Document System",
    subtitle: "Production-grade question-answering architecture grounding generative responses in enterprise document repositories with verified citations.",
    summary: "Finding reliable answers across vast corporate document archives, compliance manuals, and technical binders is time-intensive and error-prone. EnterpriseDoc AI is a production application engineered to extract, vectorize, retrieve, and synthesize verifiable answers grounded in client files.",
    challenge: "Traditional keyword search returns endless documents without answering the specific question. Conversely, standard public LLMs suffer from hallucinations and lack access to confidential internal documents. The enterprise required an architecture that delivers precise answers along with exact document page citations.",
    solution: "We engineered a modular Retrieval-Augmented Generation (RAG) platform using Python, FastAPI, FAISS, and the Gemini API. The system enforces strict grounding: answers are derived exclusively from retrieved document chunks, with exact source references provided for human verification.",
    architectureWorkflow: [
      "Document Ingestion: Multi-format file parsing (PDF, DOCX, TXT) with OCR text extraction.",
      "Semantic Chunking: Recursive splitting preserving paragraph boundaries, table semantics, and headers.",
      "Dense Vector Embedding: Generating high-dimensional vector representations stored in a FAISS vector index.",
      "Semantic Retrieval: Query vectorization with top-K cosine similarity matching and metadata filtering.",
      "Grounded Synthesis: Constrained LLM prompting instructing the model to synthesize answers with strict citation tags.",
      "Citation Verification: Displaying matching text excerpts and document page numbers in the user interface.",
    ],
    technologies: ["Python", "FastAPI", "Gemini API", "FAISS Vector DB", "Embeddings", "RAG Pipeline", "React", "TypeScript"],
    keyHighlights: [
      "Zero-hallucination guardrails: model explicitly states when information is absent from documents.",
      "Interactive page-level source references allowing instantaneous auditability.",
      "FastAPI asynchronous backend ensuring sub-second retrieval times across thousands of pages.",
      "Decoupled architecture enabling seamless integration into existing enterprise intranets.",
    ],
  },
  {
    id: "voice-ai-booking-assistant",
    badge: "Voice Automation · Real-Time LLM Function Calling",
    title: "Voice AI Booking Assistant: Conversational Appointment Automation",
    subtitle: "Real-time conversational voice assistant converting spontaneous spoken dialogue into structured booking operations and calendar updates.",
    summary: "Customer phone bookings consume valuable staff time and lead to scheduling mistakes, especially during peak hours. The Voice AI Booking Assistant provides an automated conversational agent capable of understanding caller intent and executing booking transactions via API function calls.",
    challenge: "Handling appointment scheduling over the phone requires understanding natural spoken language, managing multi-turn dialogue, clarifying scheduling conflicts, and executing accurate database operations without human intervention.",
    solution: "We built a voice-driven scheduling pipeline combining Groq API for ultra-low latency LLM inference, structured function calling, a Python FastAPI backend, and a modern Express and React management dashboard.",
    architectureWorkflow: [
      "Voice Audio Streaming: Capturing browser or telephony voice input with low-latency audio streaming.",
      "Speech-to-Text & Intent Extraction: Converting speech to text and parsing booking intents using ultra-fast Groq LLM inference.",
      "Dynamic Function Calling: The LLM triggers structured tool functions (e.g., check_availability, reserve_slot, update_details).",
      "API Execution: Backend FastAPI and Express Node.js services validate availability and record the appointment.",
      "Audio Response Synthesis: Generating immediate verbal confirmation while updating the management portal in real time.",
    ],
    technologies: ["Python", "Groq API", "LLM Function Calling", "FastAPI", "Node.js", "Express", "React", "TypeScript"],
    keyHighlights: [
      "Sub-second conversational latency enabling natural verbal pacing without awkward pauses.",
      "Structured JSON schema enforcement ensuring zero booking parameter errors.",
      "Full synchronization with enterprise scheduling calendars and customer databases.",
      "Interactive administrative dashboard providing live monitoring of active booking dialogues.",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Problem-First Engineering",
    description: "We thoroughly diagnose your actual operational bottlenecks, team workflows, and technical constraints before writing a single line of code.",
  },
  {
    title: "Strict Business Grounding",
    description: "We avoid speculative AI hype. Every AI and automation system we design is directly tied to measurable operational efficiencies and ROI.",
  },
  {
    title: "Production Architecture",
    description: "We build enterprise systems designed for scalability, complete with automated fallback mechanisms, error handling, and clean code standards.",
  },
  {
    title: "End-to-End Delivery",
    description: "From data ingestion and model benchmarking to backend APIs, responsive frontends, and cloud deployment, we handle the complete lifecycle.",
  },
  {
    title: "Data Privacy & Security",
    description: "We prioritize security best practices, ensuring your proprietary company data and client records remain protected and segregated.",
  },
  {
    title: "Dedicated Technical Support",
    description: "We provide comprehensive operational handovers, technical documentation, and ongoing maintenance to keep your systems running reliably.",
  },
];

export const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    phase: "Discovery & Requirements",
    description: "In-depth consultation to map business processes, existing software stacks, data sources, and target operational outcomes.",
  },
  {
    step: "02",
    phase: "Architecture & Technical Scope",
    description: "Defining system specifications, model selection, API contracts, security parameters, and an agile delivery roadmap.",
  },
  {
    step: "03",
    phase: "Iterative Engineering",
    description: "Building the AI models, backend microservices, database schemas, and frontend interfaces in focused development milestones.",
  },
  {
    step: "04",
    phase: "Rigorous Testing & Benchmarking",
    description: "Evaluating model accuracy, RAG retrieval precision, latency, security compliance, and edge case resilience.",
  },
  {
    step: "05",
    phase: "Deployment & Production Handover",
    description: "Containerized deployment, cloud infrastructure provisioning, team training, and handover of complete documentation.",
  },
];
