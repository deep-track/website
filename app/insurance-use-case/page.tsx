import React from "react";
import Head from "next/head";
import Image from "next/image";

import { Navbar } from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";

// Shared layout components (present in your repo)
import UseCaseDetailedInformation from "@/components/layout/useCaseDetailedInformation";
import FeatureHighlight from "@/components/layout/feature-highlight";
import FeatureInformation from "@/components/layout/useCaseFeatureInformation";
import InformationSection from "@/components/layout/informationSection";
import UseCaseFooterBanner from "@/components/layout/useCaseFooterBanner";

// Insurance specific extra section (you already have this)
import InsuranceUseCaseExtraSection from "@/components/layout/InsuranceUseCaseExtraSection";

// Data for feature list (keeps messaging from your slides)
const features = [
  {
    title: "Real-Time Fraud Detection",
    description:
      "Our AI neural authenticity engine analyzes images, video and documents instantly — detecting deepfakes, manipulated photos, and synthetic claims at submission time.",
  },
  {
    title: "Multimodal Verification",
    description:
      "Simultaneous verification of images, videos, documents and metadata to provide a single confidence score and an authenticity report for each claim.",
  },
  {
    title: "Automated Risk Assessment",
    description:
      "AI-driven risk scoring flags suspicious claims for manual review and fast-tracks legitimate claims to reduce operational costs and speed payouts.",
  },
];

export default function InsuranceUseCasePage() {
  return (
    <>
      <Head>
        <title>AI-Powered Insurance Fraud Prevention & Deepfake Detection | DeepTrack</title>
        <meta
          name="description"
          content="deeptrack provides AI-powered insurance fraud prevention: real-time deepfake detection, multimodal verification, and automated claim risk scoring to protect insurers and reinsurers."
        />
        <meta
          name="keywords"
          content="insurance fraud detection, deepfake detection insurance, automotive claims verification, AI KYC for insurers, synthetic identity detection, document forgery detection, claims automation"
        />
        <meta property="og:title" content="AI-Powered Insurance Fraud Prevention & Deepfake Detection" />
        <meta
          property="og:description"
          content="Protect your insurance business from synthetic claims and manipulated evidence with deeptrack's multimodal AI authenticity engine."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/insurance-use-case" />
      </Head>

      <main className="space-y-6">
        <Navbar />

        {/* Feature / Hero Section */}
<UseCaseDetailedInformation
  title="AI-Powered Insurance Fraud Prevention & Deepfake Detection"
  subtitle="Real-time multimodal verification for claims, onboarding and underwriting"
  description="Prevent fraudulent payouts caused by deepfakes, synthetic identities and manipulated documents. deeptrack integrates into claims pipelines via API or dashboard, providing instant authenticity reports and confidence scores."
  imageSrc="/images/insurance/insurance1.jpg"
  imageAlt="Example of insurance claims verification interface"
/>



        {/* Feature Highlight */}
        <FeatureHighlight
          title="Combat $80B+ in Global Insurance Fraud"
          subtitle="Multimodal AI authenticity engine"
          description="deeptrack detects object reuse, rebroadcast attacks, generative document forgeries and synthetic identities — enabling virtual inspections and automated claim triage."
          imageSrc="/images/insurance/insurance2.jpg"
          imageAlt="AI analyzing vehicle damage photos for fraud detection"
        />

        {/* Decorative vector (keeps same look as other pages) */}
        <Image
          src="/Vector.svg"
          alt="Decorative design element"
          width={400}
          height={300}
          className="absolute -right-72 md:-right-20 -z-10 customTeal"
        />

        {/* Features / Benefits */}
        <FeatureInformation
          features={features}
          title=""
          description=""
          imageSrc="/images/insurance/insurance3.jpg"
          imageAlt="Illustration showing multimodal detection: image, video and document analysis"
        />

        <Image
          src="/Vector.svg"
          alt="Decorative design element"
          width={400}
          height={300}
          className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
        />

        {/* Information Section (how it works, integration, compliance) */}
        <InformationSection
          subtitle="How it works"
          description="Users submit claims (photos, video, documents). DeepTrack runs multimodal scans, returns a confidence score and a detailed authenticity report via API callback — enabling automated decisions and audit-ready evidence."
          imageSrc="/images/insurance/insurance4.jpg"
          imageAlt="Diagram: claim submission → deepfake scan → confidence score"
        />

        {/* Footer CTA / Extra visuals */}
        <UseCaseFooterBanner
          title="Seamless Integration & Regulatory Compliance"
          imageSrc="/images/insurance/insurance3.jpg"
          imageAlt="Platform compliance and audit trail visualization"
          content={[
            {
              subtitle: "Virtual Inspections & Automated Verification",
              description:
                "Replace expensive onsite inspections with trusted virtual verifications that ensure photo and video integrity, reducing inspection costs and fraud risk.",
            },
            {
              subtitle: "Enterprise-Grade Security & Audit Trails",
              description:
                "deeptrack provides GDPR- and ISO-aligned security, clear authenticity reports and a full audit trail for claims and reinsurance workflows.",
            },
          ]}
        />

        {/* Extra Section (existing insurance-specific extra section) */}
        <InsuranceUseCaseExtraSection title="Ready to Transform Your Insurance Fraud Prevention with AI?" />

        <Footer />
      </main>
    </>
  );
}
