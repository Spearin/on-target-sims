import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Users, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter. Stay tuned for updates!",
    });

    setNewsletterEmail("");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | On Target Simulations</title>
        <meta
          name="description"
          content="Get in touch with On Target Simulations. Contact us for inquiries, support, or to join our community."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 tactical-grid" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Get In Touch
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-4 mb-6">
                  Contact <span className="text-gradient-olive">Us</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Have questions about our games? Want to discuss professional services? We'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="card-tactical p-8">
                  <h2 className="font-display text-2xl font-bold uppercase mb-6 text-foreground">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs uppercase tracking-wider">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background border-border focus:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs uppercase tracking-wider">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background border-border focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs uppercase tracking-wider">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase tracking-wider">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background border-border focus:border-primary resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-tactical w-full inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Info Cards */}
                <div className="space-y-6">
                  
                  {/* Community */}
                  <div className="card-tactical p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold uppercase mb-2 text-foreground">
                          Join Our Community
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connect with other commanders, share strategies, and get support.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href="https://forums.matrixgames.com/viewforum.php?f=12037"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/50 hover:bg-primary/10 inline-flex items-center gap-2"
                            >
                              Matrix Forums <ExternalLink className="w-3 h-3" />
                            </Button>
                          </a>
                          <a
                            href="https://discord.gg/9MgZgrutGY"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/50 hover:bg-primary/10 inline-flex items-center gap-2"
                            >
                              Discord <ExternalLink className="w-3 h-3" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="card-tactical p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold uppercase mb-2 text-foreground">
                          Technical Support
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          For technical issues and game support, please visit our official forums or contact Matrix Games support.
                        </p>
                        <a
                          href="https://www.matrixgames.com/contacts"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                        >
                          Matrix Games Support <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Direct Email */}
                  <div className="bg-card border border-border p-6">
                    <h3 className="font-display text-sm font-bold uppercase mb-2 text-muted-foreground">
                      Direct Contact
                    </h3>
                    <a
                      href="mailto:support@ontargetsimulations.com"
                      className="text-primary hover:underline text-lg"
                    >
                      support@ontargetsimulations.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
