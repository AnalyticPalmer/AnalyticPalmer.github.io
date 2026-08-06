export type ProjectCategory = "Data Analytics" | "Machine Learning" | "QA";

export type Project = {
  title: string;
  description: string;
  categories: ProjectCategory[];
  tools: string[];
  github: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { title: "Customer Churn Prediction System", description: "An end-to-end machine-learning system that predicts customer churn using Python, Scikit-learn, XGBoost, SHAP and Streamlit.", categories: ["Machine Learning"], tools: ["Python", "XGBoost", "SHAP", "Streamlit"], github: "https://github.com/AnalyticPalmer/customer-churn-prediction-system", live: "https://analyticpalmer-customer-churn-prediction-system-appapp-z0tzqn.streamlit.app/", featured: true },
  { title: "NYSC FAQ Chatbot", description: "An intelligent retrieval-based chatbot that answers common NYSC questions and achieved 90% accuracy during evaluation.", categories: ["Machine Learning", "QA"], tools: ["Python", "NLP", "Evaluation"], github: "https://github.com/AnalyticPalmer/nysc-faq-chatbot", featured: true },
  { title: "Credit Risk Prediction System", description: "A production-oriented machine-learning project for evaluating applicant credit risk using structured pipelines, model comparison, validation and MLflow.", categories: ["Machine Learning", "QA"], tools: ["Python", "MLflow", "Model Validation"], github: "https://github.com/AnalyticPalmer/credit-risk-prediction", featured: true },
  { title: "HR Analytics Dashboard", description: "An interactive analytics dashboard designed to help stakeholders understand workforce trends and support data-driven HR decisions.", categories: ["Data Analytics"], tools: ["Excel", "Dashboarding", "HR Analytics"], github: "https://github.com/AnalyticPalmer/HR-Analytics-Dashboard", image: "/projects/hr-analysis.png", featured: true },
  { title: "TikTok Engagement Pulse", description: "A social-media analytics project that investigates TikTok engagement patterns and communicates actionable performance insights.", categories: ["Data Analytics"], tools: ["Analytics", "Data Visualisation", "Reporting"], github: "https://github.com/AnalyticPalmer/TikTok-Engagement-Pulse", featured: true },
  { title: "Neural Network Cirrhosis Risk Diagnosis", description: "A neural-network classification project developed to evaluate cirrhosis risk from patient data.", categories: ["Machine Learning"], tools: ["Neural Networks", "Classification", "Python"], github: "https://github.com/AnalyticPalmer/Neural-Network-Cirrhosis-Risk-Diagnosis", featured: true },
  { title: "SQL Data Cleaning", description: "Cleaning and preparing raw housing data by removing duplicates, handling missing values and standardising formats.", categories: ["Data Analytics", "QA"], tools: ["SQL", "Data Cleaning", "SQL Server"], github: "https://github.com/AnalyticPalmer/PortfolioProject/blob/a110e8421adb0949d36618fac5c2310b4c56e2d1/NHDATA.sql" },
  { title: "COVID-19 Data Exploration", description: "SQL analysis of global infection, recovery and fatality trends to surface clear public-health insights.", categories: ["Data Analytics"], tools: ["SQL", "Exploratory Analysis"], github: "https://github.com/AnalyticPalmer/PortfolioProject/blob/a110e8421adb0949d36618fac5c2310b4c56e2d1/Covid-19%20Portfolio%20Project.sql" },
  { title: "Insurance Policies Analysis", description: "R analysis exploring claim frequency, claim amounts and customer demographics for better risk assessment.", categories: ["Data Analytics"], tools: ["R", "Data Analysis", "Visualisation"], github: "https://github.com/AnalyticPalmer/Insurance_Policies_Analysis" }
];
