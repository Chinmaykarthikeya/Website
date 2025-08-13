import { Code, BarChart3, Database, Fan, TrendingUp, AreaChart, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      icon: <Code className="text-4xl" />,
      color: "text-data-primary",
      skills: ["Python", "Pandas", "NumPy", "Scipy"]
    },
    {
      title: "Data Visualization", 
      icon: <BarChart3 className="text-4xl" />,
      color: "text-data-secondary",
      skills: ["Seaborn", "Matplotlib", "Streamlit", "Plotly"]
    },
    {
      title: "Business Intelligence",
      icon: <Database className="text-4xl" />,
      color: "text-data-accent", 
      skills: ["Power BI", "Excel", "SQL", "MongoDB"]
    }
  ];

  const capabilities = [
    {
      title: "Data Cleaning",
      description: "Clean and preprocess data for better clarity and insights",
      icon: <Fan className="text-2xl" />,
      color: "text-data-primary"
    },
    {
      title: "Dashboard Creation", 
      description: "Build interactive dashboards using Power BI and Streamlit",
      icon: <TrendingUp className="text-2xl" />,
      color: "text-data-secondary"
    },
    {
      title: "Data Visualization",
      description: "Visualize trends with Seaborn and Matplotlib", 
      icon: <AreaChart className="text-2xl" />,
      color: "text-data-accent"
    },
    {
      title: "Insights Generation",
      description: "Derive meaningful insights for smarter decisions",
      icon: <Brain className="text-2xl" />,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Tech Toolbox</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Comprehensive skill set spanning data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className={`${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center p-4">
                <div className={`${capability.color} mb-3`}>
                  {capability.icon}
                </div>
                <h4 className="font-semibold text-primary mb-2">{capability.title}</h4>
                <p className="text-secondary text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
