import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Fashion Designer",
      department: "Design",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Lead the design direction for our premium sweatpants collection. Drive innovation in comfort-focused athletic wear."
    },
    {
      title: "E-commerce Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Develop and execute digital marketing strategies to grow our online presence and drive sales."
    },
    {
      title: "Quality Assurance Specialist",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Ensure every Kovari product meets our exacting standards for quality and craftsmanship."
    },
    {
      title: "Customer Experience Associate",
      department: "Customer Service",
      location: "Remote",
      type: "Part-time",
      description: "Provide exceptional customer support and help customers find their perfect fit."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} onCartClick={() => {}} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join the Kovari Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're building the future of premium athleisure. Join a team that values innovation, 
              quality, and the perfect balance between comfort and style.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Kovari?</h2>
              <p className="text-lg text-muted-foreground">
                We believe great products come from great people. Our team is passionate, 
                creative, and committed to redefining what premium comfort means.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with cutting-edge materials and design processes to create 
                    the next generation of premium athleisure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Flexible schedules, remote work options, and a culture that 
                    values your personal well-being.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous learning, mentorship programs, and clear paths 
                    for career advancement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground text-center mb-12">
                Current Openings
              </h2>

              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {job.department}
                          </CardDescription>
                        </div>
                        <Button variant="outline">Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-8">Ready to Apply?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Send us your resume and a brief note about why you'd love to join the Kovari team. 
                We review all applications and will get back to you within 48 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = 'mailto:careers@kovari.com'}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  careers@kovari.com
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;