import { MapPin, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Data Analytics-Focused  Engineer with a passion for extracting meaningful insights from complex datasets
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Data Analytics Workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Electronics & Communication Engineering Graduate
            </h3>
            <p className="text-secondary leading-relaxed">
              I am an Electronics and Communication Engineering (ECE) graduate based in Hyderabad with a keen interest in data analytics. My journey combines technical engineering expertise with the power of data science to solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-data-primary mb-2">
                  <MapPin size={24} />
                </div>
                <h4 className="font-semibold text-primary">Location</h4>
                <p className="text-secondary">Hyderabad, India</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-data-secondary mb-2">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-semibold text-primary">Education</h4>
                <p className="text-secondary"> B.Tech E.C.E</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-data-primary shadow-sm">
              <h4 className="font-semibold text-primary mb-2">Career Goal</h4>
              <p className="text-secondary">
                Actively seeking roles as a <strong className="text-primary">Data Analyst</strong> where I can create impact through data-driven strategies and help organizations make smarter decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
