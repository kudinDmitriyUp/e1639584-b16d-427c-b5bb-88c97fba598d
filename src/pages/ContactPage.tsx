import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered"; // Corrected import path
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";

const ContactPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavbarCentered
        logo="Brand"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      <main className="flex-grow">
        <ContactSplitForm
          title="Get in touch"
          description="We'd love to hear from you! Send us a message and we'll respond as soon as possible."
          form={{
            nameLabel: "Your Name",
            emailLabel: "Your Email",
            messageLabel: "Your Message",
            submitButtonText: "Send Message",
            namePlaceholder: "John Doe",
            emailPlaceholder: "john.doe@example.com",
            messagePlaceholder: "How can we help you?",
          }}
          contactInfo={{
            email: "hello@example.com",
            phone: "+1 (555) 123-4567",
            address: "123 Main St, Anytown, USA",
          }}
          socialLinks={[
            { name: "Twitter", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "Facebook", href: "#" },
          ]}
        />
      </main>
      <FooterSimple
        logo="Brand"
        description="Building the future, one pixel at a time."
        socialLinks={[
          { name: "Twitter", href: "#" },
          { name: "LinkedIn", href: "#" },
          { name: "Facebook", href: "#" },
        ]}
        links={[
          {
            title: "Product",
            items: [
              { name: "Features", href: "#" },
              { name: "Pricing", href: "#" },
              { name: "Integrations", href: "#" },
            ],
          },
          {
            title: "Company",
            items: [
              { name: "About Us", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Blog", href: "#" },
            ],
          },
          {
            title: "Legal",
            items: [
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
            ],
          },
        ]}
        copyright="© 2024 Brand. All rights reserved."
      />
    </div>
  );
};

export default ContactPage;