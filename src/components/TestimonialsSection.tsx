import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "After 35+ years as a builder, I can say iBUILD is the best thing to happen to construction management since the PC.",
      author: "Ralph Tiegen",
      position: "President, Rocky Mountain Properties",
      avatar: "/placeholder.svg",
      initials: "RT"
    },
    {
      quote: "The iBUILD team was responsive and patient. The platform is intuitive, affordable, and now embraced across all departments at Avalon.",
      author: "Chris Williams",
      position: "President, Avalon Master Builder",
      avatar: "/placeholder.svg",
      initials: "CW"
    },
    {
      quote: "iBUILD finally gave us the integration we've been searching for—accounting, construction, and sales in one system.",
      author: "Tom Heuver",
      position: "Purchasing Manager, Avalon Master Builder",
      avatar: "/placeholder.svg",
      initials: "TH"
    },
    {
      quote: "Unlike rigid systems, iBUILD adapts to our business. Real-time cost control and fast PO approvals keep everyone accountable.",
      author: "Neil Hawkins",
      position: "Construction Manager, Avalon Master Builder",
      avatar: "/placeholder.svg",
      initials: "NH"
    },
    {
      quote: "iBUILD is functional, user-friendly, and customizable. It helps streamline sales and customer processes while staying builder-focused.",
      author: "Marni Chenier",
      position: "Marketing & Sales Manager, Avalon Master Builder",
      avatar: "/placeholder.svg",
      initials: "MC"
    },
    {
      quote: "iBUILD is designed by builders for builders. It integrates financials, operations, and reporting into one powerful tool.",
      author: "Dennis Little",
      position: "Industry Expert & Advisor",
      avatar: "/placeholder.svg",
      initials: "DL"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say About Us
          </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto space-y-4">
                <span className="block">
                  At iBUILD – We Develop Relationships and Business Solutions, Not Just Software.
                </span>
                <span className="block">
                  At iBUILD, we don’t just deliver digital tools, we co-create solutions that strengthen partnerships, drive performance, and earn trust. Our clients value us not only for what we build, but for how we help them build faster and better.
                </span>
              </p>
          
        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Quote className="h-12 w-12 text-ibuild-red mx-auto" />
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic text-justify max-w-3xl mx-auto">
                "{testimonials[currentSlide].quote}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].author} />
                  <AvatarFallback className="bg-ibuild-red text-primary-foreground font-semibold text-lg">
                    {testimonials[currentSlide].initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h6 className="font-bold text-foreground text-lg">{testimonials[currentSlide].author}</h6>
                  <p className="text-muted-foreground">{testimonials[currentSlide].position}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="default"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full bg-ibuild-red text-primary-foreground hover:bg-ibuild-red/90 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="default"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-ibuild-red text-primary-foreground hover:bg-ibuild-red/90 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-ibuild-red' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
