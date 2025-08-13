import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Academic Supervisor", 
      initials: "DR",
      quote: "Chinmay demonstrates exceptional analytical thinking and attention to detail in data projects. His ability to translate complex data into actionable insights is remarkable.",
      bgColor: "bg-data-primary"
    },
    {
      name: "Priya Sharma",
      role: "Project Collaborator",
      initials: "PS", 
      quote: "Working with Chinmay on data visualization projects has been incredibly productive. His Python skills and dashboard creation abilities are outstanding.",
      bgColor: "bg-data-secondary"
    },
    {
      name: "Arun Singh",
      role: "Industry Mentor",
      initials: "AS",
      quote: "Chinmay's approach to data cleaning and EDA is methodical and thorough. He would be a valuable addition to any data analytics team.",
      bgColor: "bg-data-accent"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Impact</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Recognition for analytical excellence and data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
