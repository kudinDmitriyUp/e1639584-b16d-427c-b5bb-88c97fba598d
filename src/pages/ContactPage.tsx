import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactPage() {
  return (
    <>
      <ContactSplitForm
        tag="Contact GoPerf"
        title="Connect with Our Experts"
        description="Have questions about high-performance Go, optimized search algorithms, or our educational resources? Reach out to the GoPerf team. We're here to help you build faster, more efficient Go applications and understand complex topics like memory-efficient and cache-friendly implementations."
        inputs={[{"name":"name","type":"text","placeholder":"Your Name","required":true},{"name":"email","type":"email","placeholder":"Your Email","required":true},{"name":"subject","type":"text","placeholder":"Subject","required":true}]}
        textarea={{"name":"message","placeholder":"Your Message","rows":5,"required":true}}
        buttonText="Send Message"
        imageSrc="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDR8fGdvJTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzA2MjQ4MjYxfDA&ixlib=rb-4.0.3&q=80&w=1080"
      />
    </>
  );
}
