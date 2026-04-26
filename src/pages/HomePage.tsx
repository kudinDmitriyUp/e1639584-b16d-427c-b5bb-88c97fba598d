import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import FooterSimpleReveal from '@/components/sections/footer/FooterSimpleReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsMinimalCards from '@/components/sections/metrics/MetricsMinimalCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import TestimonialMetricsCards from '@/components/sections/testimonial/TestimonialMetricsCards';
import { Code, Gauge, Zap } from "lucide-react";


export default function HomePage() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="GoPerf"
      navItems={[
        {
          name: "Algorithm",
          href: "#implementation",
        },
        {
          name: "Metrics",
          href: "#benchmarks",
        },
        {
          name: "Optimization",
          href: "#tips",
        },
        { name: "Contact", href: "/contact" },

      ]}
      ctaButton={{
        text: "Get Documentation",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      tag="Go Optimization"
      title="Idiomatic Binary Search in Go"
      description="High-performance search algorithms designed for scale. Learn how to write memory-efficient, cache-friendly search implementations that leverage modern Go patterns."
      primaryButton={{
        text: "View Implementation",
        href: "#implementation",
      }}
      secondaryButton={{
        text: "See Benchmarks",
        href: "#benchmarks",
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/a-minimalist-high-tech-abstract-visualiz-1776833436562-f9946b7f.png"
    />
  </div>

  <div id="features-1" data-section="features-1">
      <FeaturesMediaCards
      tag="Architecture"
      title="Why Performance Matters"
      description="Binary search is the backbone of efficient data retrieval. When implemented correctly in Go, it minimizes CPU cycles and maximizes cache hits."
      items={[
        {
          title: "Complexity Analysis",
          description: "Achieve O(log n) performance with zero memory allocation.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/close-up-of-highly-organized-server-data-1776833445571-a27b553a.png",
        },
        {
          title: "Cache Locality",
          description: "Sequential memory access patterns that play nice with CPU caches.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/close-up-of-highly-organized-server-data-1776833474293-269dd897.png",
        },
        {
          title: "Generic Support",
          description: "Utilize Go 1.18+ constraints for type-safe implementations.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/close-up-of-highly-organized-server-data-1776833482834-4e4394c4.png",
        },
      ]}
    />
  </div>

  <div id="implementation" data-section="implementation">
      <AboutFeaturesSplit
      tag="Code Implementation"
      title="The Perfect Binary Search"
      description="A production-ready example using the `sort.Search` interface while optimizing for specific data sets by avoiding unnecessary branching."
      items={[
        {
          icon: Code,
          title: "Zero Allocation",
          description: "In-place modification logic for minimal GC pressure.",
        },
        {
          icon: Gauge,
          title: "Branch Prediction",
          description: "Minimal branching to optimize processor pipelines.",
        },
        {
          icon: Zap,
          title: "Fast Path Execution",
          description: "Immediate exit strategies for common boundary cases.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/close-up-of-highly-organized-server-data-1776833492592-55223bb8.png"
    />
  </div>

  <div id="benchmarks" data-section="benchmarks">
      <MetricsMinimalCards
      tag="Performance Data"
      title="Benchmark Results"
      metrics={[
        {
          value: "2.4ns",
          description: "Mean execution time per search",
        },
        {
          value: "0B",
          description: "Memory allocations per op",
        },
        {
          value: "99.9%",
          description: "Cache hit optimization rate",
        },
      ]}
    />
  </div>

  <div id="tips" data-section="tips">
      <FaqTwoColumn
      tag="Best Practices"
      title="Optimization Tips"
      description="Strategies to further improve your Go search performance."
      items={[
        {
          question: "When should I prefer generic search?",
          answer: "Use generics when your dataset size exceeds 10k items or you are dealing with complex structs requiring custom comparators.",
        },
        {
          question: "Does slice size impact performance?",
          answer: "Yes, cache locality diminishes with very large slices; consider chunking data into smaller cache-aligned segments.",
        },
        {
          question: "Why use sort.Search?",
          answer: "It provides a battle-tested abstraction that is often faster than custom implementations due to underlying compiler optimizations.",
        },
      ]}
    />
  </div>

  <div id="usage" data-section="usage">
      <TestimonialMetricsCards
      tag="Validation"
      title="Trusted by Developers"
      description="Engineers from top-tier platforms use these architectural patterns daily."
      testimonials={[
        {
          name: "Alex Rivet",
          role: "Senior Arch",
          company: "GoCore",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-line-graph-chart-on-a-sleek-1776833454881-2b684f54.png",
        },
        {
          name: "Maria Zhou",
          role: "Staff Eng",
          company: "ScaleSoft",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-line-graph-chart-on-a-sleek-1776833500772-6f82d3c0.png",
        },
        {
          name: "David Vane",
          role: "Principal",
          company: "DataFlow",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-line-graph-chart-on-a-sleek-1776833510277-89b7d5ea.png",
        },
        {
          name: "Elena Kim",
          role: "Senior Dev",
          company: "StreamGo",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-line-graph-chart-on-a-sleek-1776833518595-aad247d7.png",
        },
        {
          name: "James Watt",
          role: "Arch",
          company: "Compute.io",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-line-graph-chart-on-a-sleek-1776833527336-3c4402a4.png",
        },
      ]}
      metrics={[
        {
          value: "1M+",
          label: "Ops Per Sec",
        },
        {
          value: "100+",
          label: "Optimized Repos",
        },
        {
          value: "99%",
          label: "Retention",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitEmail
      tag="Consultation"
      title="Need Architectural Review?"
      description="Get direct access to expert Go performance consultation and code reviews."
      inputPlaceholder="Enter your work email"
      buttonText="Schedule Review"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/modern-office-space-with-sleek-clean-des-1776833465439-6d664e60.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleReveal
      brand="GoPerf"
      columns={[
        {
          title: "Resources",
          items: [
            {
              label: "Docs",
              href: "#",
            },
            {
              label: "Benchmarking",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 GoPerf Architectural Services."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
