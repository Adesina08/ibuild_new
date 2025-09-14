import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ibuild-red font-semibold mb-4">
            <div className="w-8 h-px bg-ibuild-red"></div>
            Contact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's<span className="text-ibuild-red"> Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about iBUILD or want a personalized demo?
            Reach out — our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-ibuild-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Office Address</h4>
                    <p className="text-muted-foreground">
                      4960 13 Street SE <br />
                      Calgary AB, T2G 5M9, Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-ibuild-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">clientsupport@ibuildapplications.com </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-ibuild-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Support Hours</h4>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Mon–Fri: 9 AM – 6 PM (MST)</p>
                      <p className="text-muted-foreground">Sat: 10 AM – 4 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="youremail@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project and how we can help..."
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="ibuild-primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
