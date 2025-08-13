import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Chinmay Karthikeya</h3>
            <p className="text-gray-300 mb-4">
              Data Analytics-Focused  Engineer passionate about turning data into actionable insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/chinmaykarthikeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/ChinmayKarthikeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:karthikeyachinmay@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Professional Quote</h4>
            <blockquote className="text-gray-300 italic">
              "Without data, you're just another person with an opinion."
              <br />
              <span className="text-sm">– W. Edwards Deming</span>
            </blockquote>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        </div>
      </div>
    </footer>
  );
}
