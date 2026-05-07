import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";

import cert1 from "@/assets/cert-1.png";
import cert2 from "@/assets/cert-2.png";
import cert3 from "@/assets/cert-3.png";
import cert4 from "@/assets/cert-4.png";
import resumePreview from "@/assets/resume-preview.png";

export const profile = {
  name: "Bandla Hari Prasanth",
  role: "Data Engineering & Analytics Enthusiast",
  tagline: "Architecting scalable data pipelines and transforming complex datasets into actionable business intelligence.",
  location: "Hyderabad, India",
  email: "bandlahariprasanth@gmail.com",
  phone: "+91 97040 29036",
  image: profileImg,
  summary: " I’m a Data Analyst and Data Engineer passionate about building scalable data systems and transforming raw information into meaningful insights. My work spans ETL pipeline development, cloud-based data engineering, SQL optimization, and interactive analytics dashboards using technologies like Azure, Databricks, Snowflake, Python, and Power BI. I enjoy designing efficient data workflows, solving complex data problems, and creating solutions that help businesses make smarter, data-driven decisions. I care about clean architecture, reliable pipelines, and turning complex datasets into clear and impactful stories."
}
export const socials = [
  { label: "LinkedIn", handle: "/in/yourname", url: "https://www.linkedin.com/in/hariprasanthbandla/", icon: "linkedin" },
  { label: "GitHub", handle: "@yourname", url: " https://github.com/hariprasanth02", icon: "github" },
  { label: "LeetCode", handle: "@yourname", url: "https://leetcode.com/u/Hariprasanth03/", icon: "code2" },
  { label: "HackerRank", handle: "@yourname", url: "https://www.hackerrank.com/profile/prasanthbandla03", icon: "terminal" },
  // { label: "CodeChef", handle: "@yourname", url: "https://codechef.com", icon: "trophy" },
  // { label: "X / Twitter", handle: "@yourname", url: "https://x.com", icon: "twitter" },
  // { label: "Dribbble", handle: "@yourname", url: "https://dribbble.com", icon: "dribbble" },
  // { label: "Medium", handle: "@yourname", url: "https://medium.com", icon: "feather" },
] as const;

export const projects = [
  {
    title: "End-to-End E-Commerce Data Pipeline",
    description:
      "Built a scalable ETL pipeline using Azure Data Factory and Databricks to process 500K+ e-commerce transaction records with Bronze-Silver-Gold architecture and Power BI reporting.",
    image: project1,
    tags: ["Azure Data Factory", "Databricks", "Delta Lake", "Snowflake", "Power BI"],
    // demo: "https://example.com",
    repo: "https://github.com/hariprasanth02/E-commerce-Databricks-project",
  },

  {
    title: "Telecom Customer Churn Analysis",
    description:
      "Analyzed 6K+ telecom customer records to identify churn patterns and high-risk customer segments using Power BI, Python, and machine learning techniques.",
    image: project2,
    tags: ["Power BI", "Python", "Pandas", "Scikit-learn", "DAX"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNmI4YjI5NjItMGZhYS00Y2VmLTgxNzMtNmM4YWVmMTU1YWE2IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    repo: "https://github.com/hariprasanth02/Telecom-Churn-Analysis-and-Prediction",
  },


  {
    title: "Car Sales Dashboard Analysis",
    description:
      "Created an interactive Power BI dashboard analyzing $371M+ sales data with KPI tracking, YoY growth analysis, and regional performance insights.",
    image: project3,
    tags: ["Power BI", "DAX", "Excel", "Data Analytics"],
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNWI0Zjg2YTEtODljYS00NTk4LWE3ZDAtMTQ3YmY1ODQ4NmZiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    repo: "https://github.com/hariprasanth02/Car-Sales-Dashboard-Analysis",
  },

  {
  title: "Credit Card Report Analysis",
  description:
    "Developed an interactive Power BI dashboard analyzing customer transactions, revenue trends, spending behavior, and credit card usage patterns to uncover business insights and support data-driven decision making.",
  image: project4,
  tags: ["Power BI", "DAX", "Data Analytics", "Business Intelligence", "SQL"],
  demo: "https://app.powerbi.com/view?r=eyJrIjoiZjU4NjFjNDEtYTk2Ni00Mzg0LWI0ZTMtYzZiNjMwZmU3MjdiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
  repo: "https://github.com/hariprasanth02/Credit-Card-Report-Analysis",
},

  {
    title: "QuickStay Hotel Booking Application",
    description:
      "Developed a responsive hotel booking web application with modern UI components and booking functionality using JavaScript technologies.",
    image: project5,
    tags: ["JavaScript", "React", "Node.js", "Web Development"],
    demo: "stayzy-six.vercel.app",
    repo: "https://github.com/hariprasanth02/QuickStay---A-hotel-booking-application",
  },

  // {
  //   title: "Workout Buddy",
  //   description:
  //     "Built a responsive fitness tracking web application focused on workout management and user-friendly UI design.",
  //   // image: project6,
  //   tags: ["JavaScript", "React", "CSS", "Frontend"],
  //   // demo: "https://example.com",
  //   repo: "https://github.com/hariprasanth02/Workout-Buddy",
  // },
];
export const certifications = [
  {
    title: "Databricks Accredited AI Agent Fundamentals",
    issuer: "Databricks Academy",
    year: "2026",
    image: cert1,
    url: "#",
  },

  {
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    year: "2023",
    image: cert2,
    url: "#",
  },

  {
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL - IIT Kharagpur",
    year: "2024",
    image: cert3,
    url: "#",
  },

  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2025",
    image: cert4,
    url: "#",
  },
];
export const resume = {
  preview: resumePreview,
  file: "/files/resume.pdf",
};

export const skills = [
  "SQL "," Python"," Azure Data Factory "," Databricks "," PySpark ",
  " Snowflake" ," Power BI "," DAX "," ETL Pipelines "," Data Modeling "," Data Analytics"
];