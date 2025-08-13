import { Github, ExternalLink, PieChart, Video, ShoppingCart, Fan, BarChart, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vendor Sales Analysis",
      description: "I developed a dynamic dashboard to track sales, purchases, vendor, and brand performance in real-time. This project gave me practical experience in transforming raw data into actionable business insights through rich visualizations and statistical analysis.",
image:"https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/10113936-5ede-4069-96c6-c287573c78b6.png",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Sci-Py", "Power BI", "SQL"],
      githubUrl: "https://github.com/Chinmaykarthikeya/Vendor-sales-Project",
      category: "Data Analysis",
      icon: <PieChart className="mr-2" size={20} />
    },{
      title: "Diwali Sales Analysis",
      description: "Comprehensive analysis of Diwali festival sales data to identify customer behavior patterns, top-selling products, and regional preferences using Python and visualization libraries.",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/2a5ac160-2312-4156-8e55-6cbdaabb7986.png",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/ChinmayKarthikeya/ChinmayKarthikeya/tree/main/Diwali_Sales_Analysis",
      category: "Data Analysis",
      icon: <BarChart className="mr-2" size={20} />
    },
    {
      title: "Netflix Content Analysis", 
      description: "Deep dive into Netflix's content library analyzing genres, release patterns, ratings, and regional content distribution to understand streaming platform strategies.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "NumPy", "Visualization"],
      githubUrl: "https://github.com/ChinmayKarthikeya/ChinmayKarthikeya/tree/main/Netflix-Content-Data%20Analysis",
      category: "Content Analytics",
      icon: <Video className="mr-2 text-red-600" size={20} />
    },
    {
      title: "Zepto Project Analysis",
      description: "Analysis of quick commerce delivery patterns, customer ordering behavior, and operational efficiency metrics for the fast-growing grocery delivery platform.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Streamlit", "Power BI", "Business Analytics"],
      githubUrl: "https://github.com/ChinmayKarthikeya/ChinmayKarthikeya/tree/main/Zepto_project",
      category: "Business Intelligence",
      icon: <ShoppingCart className="mr-2 text-data-green" size={20} />
    },
    {
      title: "Data Cleaning & EDA",
      description: "Comprehensive data cleaning and exploratory data analysis project showcasing techniques for handling missing values, outliers, and data quality issues.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["NumPy", "Pandas", "EDA", "Data Quality"],
      githubUrl: "https://github.com/ChinmayKarthikeya/ChinmayKarthikeya/blob/main/DataCleaningProject1.ipynb",
      category: "Data Preprocessing",
      icon: <Fan className="mr-2 text-purple-600" size={20} />
    }, {
      title: "Personal Finance Tracker",
      description: "Developed a comprehensive personal finance management tool that helps users track income, expenses, and budgeting goals effectively. This project focuses on simplifying financial planning with clear visualizations and easy-to-use interfaces.",
      image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/65d71be5-8cff-4278-81fb-0101b7cb9d2b.png",
      technologies: ["NumPy", "Pandas", "EDA", "Data Quality", "Stream lit"],
      githubUrl: "https://github.com/Chinmaykarthikeya/ChinmayKarthikeya/tree/main/Personal_Finance_Tracker",
      category: "Data Preprocessing and visualising",
      icon: <CreditCard className="mr-2 text-purple-600" size={20} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real-world data analysis projects showcasing end-to-end analytical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-2">
                  {project.icon}
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-data-primary hover:text-data-primary-dark font-semibold flex items-center"
                  >
                    <Github className="mr-1" size={16} />
                    View Code
                  </a>
                  <span className="text-gray-500 text-sm">{project.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-data-primary hover:bg-data-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <a
              href="https://github.com/ChinmayKarthikeya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
