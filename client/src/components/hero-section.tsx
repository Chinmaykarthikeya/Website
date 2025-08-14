import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import profileImage from "@assets/SAVE_20250708_071916_1754165389462.jpg";

export default function HeroSection() {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = async () => {
    try {
      // Open the Google Drive link in a new tab
      window.open("https://drive.google.com/file/d/1XOu8mQWJTgNUn4ZNB8x7JRV1VCU-upRl/view?usp=sharing", "_blank");

      // Show success toast message
      toast({
        title: "Resume Download",
        description: "Your resume download has started in a new tab.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Resume download will be available soon.",
        variant: "destructive",
      });
    }
  };


  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-data-primary to-data-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black drop-shadow-lg">
              Hi, I'm <span className="text-yellow-300 drop-shadow-md">Chinmay Karthikeya</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-black drop-shadow-md">
              Aspiring Data Analyst & ECE Engineer
            </h2>
            <p className="text-lg mb-8 text-black max-w-2xl drop-shadow-sm">
              Turning data into decisions, one visualization at a time. Passionate about transforming complex datasets into actionable insights that drive business growth.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={downloadResume}
                className="bg-data-secondary hover:bg-data-secondary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img
              src={profileImage}
              alt="Chinmay Karthikeya - Data Analyst"
              className="rounded-full shadow-2xl w-80 h-80 object-cover object-top mx-auto border-4 border-white"
            />
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/chinmaykarthikeya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/ChinmayKarthikeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Github size={32} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=karthikeyachinmay@gmail.com"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
