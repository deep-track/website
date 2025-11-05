import React from "react";
import Image from "next/image";
import Head from "next/head";

import { Navbar } from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";

import FinanceUseCaseFeatureSection from "@/components/layout/FinanceUseCaseFeatureSection";
import FeatureHighlight from "@/components/layout/feature-highlight";
import FeatureInformation from "@/components/layout/useCaseFeatureInformation";
import InformationSection from "@/components/layout/informationSection";
import UseCaseDetailedInformation from "@/components/layout/useCaseDetailedInformation";
import UseCaseFooterBanner from "@/components/layout/useCaseFooterBanner";
import FinanceUseCaseExtraSection from "@/components/layout/FinanceUseCaseExtraSection";

const features = [
  {
    title: "Real-Time Fraud Detection",
    description:
      "Our AI neural authenticity engine analyzes images, video and documents instantly — detecting deepfakes, manipulated photos, and synthetic claims at submission time.",
  },
  {
    title: "Multimodal Verification",
    description:
      "Simultaneous verification of images, videos, documents and metadata enables a unified authenticity score and automated decisioning for claim approvals.",
  },
];

export default function InsuranceUseCasePage() {
  return (
    <>
      <Head>
        <title>AI-Powered Insurance Fraud Detection & Deepfake Prevention | deeptrack</title>
        <meta
          name="description"
          content="deeptrack provides AI-powered insurance fraud prevention: real-time deepfake detection, multimodal verification, and automated claim risk scoring to protect insurers and reinsurers."
        />
        <meta
          name="keywords"
          content="insurance fraud detection, deepfake detection insurance, automotive claims verification, AI KYC for insurers, synthetic identity detection, document forgery detection"
        />
        <meta property="og:title" content="AI-Powered Insurance Fraud Detection & Deepfake Prevention" />
        <meta
          property="og:description"
          content="Protect your insurance business from synthetic claims and manipulated evidence with deeptrack's multimodal AI authenticity engine."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/insurance-use-case" />
      </Head>

      <div className="space-y-6">
        <Navbar />

        {/* HERO — using FinanceUseCaseFeatureSection for identical layout */}
        <FinanceUseCaseFeatureSection
          useCase="Insurance"
          title="AI-Powered Insurance Fraud Prevention & Deepfake Detection"
          description="Real-time multimodal verification for claims, onboarding and underwriting"
          imageSrc="/images/insurance/insurance1.jpg"
        />

        {/* Feature Highlight — same as Finance */}
        <FeatureHighlight
          title="Combat $80B+ in Annual Insurance Fraud with AI Precision"
          subtitle="AI-Powered Insurance Fraud Detection"
          description="deeptrack's advanced neural authenticity engine detects sophisticated fraud attempts including deepfake damage photos, synthetic claims, rebroadcast attacks, and object reuse schemes. Our insurance fraud detection AI analyzes vehicle images, documents, and metadata in real-time, providing confidence scores and authenticity reports to prevent fraudulent payouts."
          imageSrc="/images/insurance/insurance2.jpg"
          imageAlt="AI insurance fraud detection analyzing vehicle damage"
        />

        {/* Decorative vector (same placement as Finance) */}
        <Image
          src="/Vector.svg"
          alt="Decorative design element"
          width={400}
          height={300}
          className="absolute -right-72 md:-right-20 -z-10"
        />

        {/* Feature Information (list of benefits) */}
        <FeatureInformation features={features} title={""} description={""} />

        <Image
          src="/Vector.svg"
          alt="Decorative design element"
          width={400}
          height={300}
          className="absolute -left-[150px] -z-10 rotate-[180deg]"
        />

        {/* Info Section — how it works & integration */}
        <InformationSection
          subtitle="Advanced Fraud Pattern Detection"
          description="deeptrack identifies sophisticated fraud patterns including object reuse (same damaged parts reused across claims), rebroadcast attacks (reusing prior images), and geo-location inconsistencies. Our AI detects when photos weren't captured at the claimed location and identifies matching serial numbers across different claims, providing comprehensive insurance fraud prevention."
          imageSrc="/images/insurance/insurance3.jpg"
          imageAlt="Diagram showing multimodal claim verification"
        />

        {/* Use case footer banner (compliance + integrations) */}
        <UseCaseFooterBanner
          title="Seamless Integration & Regulatory Compliance"
          imageSrc="/images/insurance/insurance4.jpg"
          imageAlt="Compliance and audit trail dashboard"
          content={[
            {
              subtitle: "Virtual Inspections & Automated Verification",
              description:
                "Replace expensive onsite inspections with trusted virtual verifications using deeptrack's AI-powered platform. Customers and repair shops can submit claims instantly while our system ensures photo and video integrity.",
            },
            {
              subtitle: "Enterprise-Grade Security & Compliance",
              description:
                "deeptrack meets GDPR and ISO standards while integrating seamlessly into existing claims processing workflows via API, providing detailed audit trails and authenticity reports for reinsurance and compliance.",
            },
          ]}
        />

        {/* Extra section to match Finance extra section */}
        <FinanceUseCaseExtraSection title="Ready to Transform Your Insurance Fraud Prevention with AI?" />

        <Footer />
      </div>
    </>
  );
}
