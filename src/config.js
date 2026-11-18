/**
 * AI Care site content. Keep real business details and project descriptions here.
 * Update contact details/social links here; the rest of the site reads from this file.
 */
const config = {
  business: {
    name: "aicareio",
    tagline: "AI-powered products and software built for real business operations.",
    metaTitle: "aicareio — AI Products, Automation & Software for Businesses",
    metaDescription:
      "aicareio helps businesses modernize operations with AI products, automation, custom software, RAG and data solutions. 100+ clients served across business needs.",
    city: "Jaipur",
    region: "Rajasthan",
    country: "India",
    serviceArea: "Jaipur, India and international remote engagements",
  },
  contact: {
    phoneDisplay: "+91 82098 18868",
    phoneLink: "+918209818868",
    whatsappNumber: "918209818868",
    whatsappDefaultMessage: "Hi AI Care, I'd like to discuss a project.",
    email: "designerstudio597@gmail.com",
    address: "Jaipur, Rajasthan, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jaipur%2C%20Rajasthan%2C%20India",
  },
  social: {
    linkedin: "",
    instagram: "",
    twitter: "",
    github: "",
  },
  // Business proof points supplied by the company.
  stats: [
    { value: "100+", label: "Clients served" },
    { value: "Hospitality", label: "Hotel-focused product experience" },
    { value: "End to End", label: "From problem discovery to delivery" },
  ],
  serviceGroups: [
    {
      category: "Generative AI & LLM Development",
      short: "Useful language-model experiences designed around your workflow.",
      blurb: "Build assistants and LLM-powered tools that do more than produce a demo response.",
      items: ["Generative AI applications", "LLM applications", "Prompt engineering", "Model integration", "AI chatbots", "Document intelligence"],
    },
    {
      category: "RAG Systems & AI Agents",
      short: "Connect AI to your own knowledge, tools and business processes.",
      blurb: "Make answers more grounded and workflows more capable with retrieval and tool use.",
      items: ["Retrieval-augmented generation (RAG)", "Semantic and hybrid search", "Vector databases", "Reranking", "AI agents", "Knowledge assistants", "RAG evaluation"],
    },
    {
      category: "Machine Learning",
      short: "Models for prediction, classification and decision support.",
      blurb: "Turn structured data into tested models and understandable outputs.",
      items: ["Machine learning solutions", "Deep learning solutions", "Predictive analytics", "Model training and fine-tuning", "Feature engineering", "Model evaluation"],
    },
    {
      category: "Computer Vision & OCR",
      short: "Extract information and meaning from images and documents.",
      blurb: "Automate visual inspection and convert scanned material into usable data.",
      items: ["Computer vision applications", "Image classification", "Object detection", "OCR applications", "Document image processing", "Visual inspection systems"],
    },
    {
      category: "Web Development & APIs",
      short: "Reliable interfaces and backend services that make products usable.",
      blurb: "Build database-backed applications, integrations and business dashboards.",
      items: ["React applications", "Web applications", "REST APIs", "FastAPI development", "Business dashboards", "Database-backed applications", "Software integration"],
    },
    {
      category: "Data Analytics",
      short: "Clear analysis and visualisation for better-informed decisions.",
      blurb: "Prepare, explore and communicate data with a repeatable analytical workflow.",
      items: ["Data analysis", "Data cleaning", "Exploratory data analysis", "Predictive analytics", "Data visualisation", "SQL and data solutions"],
    },
    {
      category: "IT & Technical Support",
      short: "Practical support for everyday computer and software problems.",
      blurb: "On-the-ground technology help for individuals and local businesses.",
      items: ["Computer and laptop troubleshooting", "Software installation", "Windows troubleshooting", "System optimisation", "Technical support", "Computer maintenance"],
    },
  ],
  techStack: [
    { group: "Programming & Core", items: ["Python", "SQL", "Bash", "Git", "Data Structures & Algorithms", "JavaScript"] },
    { group: "AI & Machine Learning", items: ["Scikit-learn", "XGBoost", "PyTorch", "Hugging Face", "Transformers", "OpenCV", "SHAP"] },
    { group: "Generative AI & LLMs", items: ["LLMs", "Gemini API", "Groq API", "LangChain", "Prompt Engineering", "Function Calling"] },
    { group: "Retrieval & Evaluation", items: ["FAISS", "ChromaDB", "BM25", "Hybrid Retrieval (RRF)", "Cross-Encoders", "Sentence Transformers", "RAGAS", "Langfuse"] },
    { group: "Backend & Application Development", items: ["FastAPI", "React", "Streamlit", "HTML", "CSS", "JavaScript"] },
    { group: "Database & Infrastructure", items: ["PostgreSQL", "SQLite", "Docker", "Docker Compose", "MLflow"] },
    { group: "Document Intelligence & OCR", items: ["Tesseract OCR", "PaddleOCR", "OpenCV", "Deskew & Denoising", "Otsu Binarization", "Semantic Search"] },
  ],
  featuredProjects: [
    {
      name: "EnterpriseDoc AI",
      tag: "Enterprise document intelligence · RAG",
      description: "A document question-answering application that lets users upload files and ask questions in natural language, with answers grounded in retrieved document content.",
      problem: "Finding a reliable answer across long documents is time-consuming, especially when information is spread across multiple files.",
      features: ["Document upload and text extraction", "Document chunking and embeddings", "FAISS vector retrieval", "Gemini-powered answers grounded in retrieved context", "Source references to verify answers", "FastAPI application backend"],
      tech: ["Python", "FastAPI", "Gemini API", "FAISS", "RAG"],
    },
    {
      name: "Voice AI Booking Assistant",
      tag: "Voice interface · Booking workflow automation",
      description: "A hosted voice-enabled assistant that interprets booking requests and turns them into structured booking details through an AI conversation and function-calling workflow.",
      problem: "Collecting appointment or booking details manually can interrupt teams and create repetitive back-and-forth with customers.",
      features: ["Voice input and request understanding", "Conversion of speech into booking details", "LLM function calling for booking operations", "Updates to date, time and customer information", "Browser interface with a FastAPI backend"],
      tech: ["Python", "Groq API", "Function Calling", "FastAPI", "HTML", "CSS", "JavaScript"],
    },
  ],
  additionalProjects: [],
  whyChooseUs: [
    { title: "Understand before building", description: "Start with the actual problem, users and constraints before choosing a technology." },
    { title: "Built around your workflow", description: "Shape the solution around your data, processes and operating needs instead of forcing a generic package." },
    { title: "Technology with a purpose", description: "Use AI and modern software where they add practical value—not simply because they are fashionable." },
    { title: "End-to-end thinking", description: "Consider the complete journey from requirements and architecture to testing, deployment and handover." },
    { title: "Clear communication", description: "Keep scope, decisions, progress and deliverables understandable throughout the engagement." },
    { title: "Local and remote support", description: "Work with AI Care in Jaipur or collaborate remotely from elsewhere in India." },
  ],
  process: [
    { step: "01", title: "Understand", description: "Discuss the problem, users, current workflow and what success should look like." },
    { step: "02", title: "Plan", description: "Agree on scope, technical direction, priorities and a practical delivery path." },
    { step: "03", title: "Design & build", description: "Create the experience and implement the required software, data or AI components." },
    { step: "04", title: "Test & refine", description: "Validate key flows, address edge cases and refine the solution with feedback." },
    { step: "05", title: "Deploy & hand over", description: "Prepare the release, share the required handover and clarify the next steps." },
  ],
};

export default config;
