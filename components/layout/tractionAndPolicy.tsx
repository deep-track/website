import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lock, Gavel, BriefcaseBusiness, PackageSearch, Rocket, Users, HandCoins, Handshake, Star } from "lucide-react";

export default function TractionSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Traction Highlights <span className="text-gray-400">(as of July 2025)</span></h2>
        </div>

        {/* Traction Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <Users className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-xl font-semibold">Clients & Pilots</h3>
              <p className="text-gray-400">3 pilot deployments live across Kenya including Innovex Solution and Editors Guild.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <Handshake className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-xl font-semibold">Partnerships</h3>
              <p className="text-gray-400">In integration talks with C2PA ecosystem partner.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <Star className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-xl font-semibold">Recognition</h3>
              <p className="text-gray-400">Featured on the Take on Tech Show.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <HandCoins className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-xl font-semibold">Funding</h3>
              <p className="text-gray-400">Received $10,000 Angel investment from Mr. Isaac Hayes. Currently bootstrapping and fundraising.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-none">
            <CardContent className="p-6">
              <Users className="h-6 w-6 text-gray-400 mb-2" />
              <h3 className="text-xl font-semibold">Team</h3>
              <p className="text-gray-400">Core team of 5 (Software, Cloud, Product, AI) with top-tier advisors onboarding across AI, cybersecurity, and regulatory domains.</p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Challenges */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">🧩 Key Strategic Challenges & Advisory Needs</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-none">
              <CardContent className="p-6">
                <Brain className="h-6 w-6 text-gray-400 mb-2" />
                <h4 className="text-lg font-semibold mb-1">AI & Product Direction</h4>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                  <li>Model benchmarking and explainability</li>
                  <li>Ethical governance in multimodal AI</li>
                  <li>Alignment with international AI safety policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-none">
              <CardContent className="p-6">
                <Gavel className="h-6 w-6 text-gray-400 mb-2" />
                <h4 className="text-lg font-semibold mb-1">Legal, Policy & IP</h4>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                  <li>Scalable IP/data use agreements</li>
                  <li>Understanding deepfake laws (EU/US)</li>
                  <li>Engaging in provenance policy standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-none">
              <CardContent className="p-6">
                <Lock className="h-6 w-6 text-gray-400 mb-2" />
                <h4 className="text-lg font-semibold mb-1">Cybersecurity</h4>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                  <li>Secure media pipelines</li>
                  <li>Adversarial attack protection</li>
                  <li>Compliance in high-risk regions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-none">
              <CardContent className="p-6">
                <BriefcaseBusiness className="h-6 w-6 text-gray-400 mb-2" />
                <h4 className="text-lg font-semibold mb-1">Enterprise Sales (Public Sector)</h4>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                  <li>Government procurement strategies</li>
                  <li>Scaling pilots to MoUs/contracts</li>
                  <li>Relationship-building in enterprise/public sector</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-none md:col-span-2">
              <CardContent className="p-6">
                <PackageSearch className="h-6 w-6 text-gray-400 mb-2" />
                <h4 className="text-lg font-semibold mb-1">Product-Market Fit & Distribution</h4>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                  <li>Refining GTM: freemium vs. enterprise</li>
                  <li>Scalable onboarding & docs</li>
                  <li>Packaging for channel/SI partners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Roadmap */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">🚀 6–12 Month Roadmap</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm text-gray-300">
              <thead>
                <tr className="bg-gray-900 text-left">
                  <th className="px-4 py-2">Objective</th>
                  <th className="px-4 py-2">Details</th>
                  <th className="px-4 py-2">Owner</th>
                  <th className="px-4 py-2">Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Launch Deeptrack Foundry v1.0</td>
                  <td className="px-4 py-2">Media scoring engine, dashboard, insurer API</td>
                  <td className="px-4 py-2">Product & Insurance Lead</td>
                  <td className="px-4 py-2">Q3 2025</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Raise $100k Pre-seed</td>
                  <td className="px-4 py-2">Expand AI, compliance, EU/GCC rollout</td>
                  <td className="px-4 py-2">Brian & Investment Advisors</td>
                  <td className="px-4 py-2">Q3–Q2 2025/2026</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Scale to 5 strategic clients</td>
                  <td className="px-4 py-2">Finance, insurance, media verticals</td>
                  <td className="px-4 py-2">Sales, GTM Advisors + Brian</td>
                  <td className="px-4 py-2">Q4 2025</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Publish whitepaper</td>
                  <td className="px-4 py-2">On synthetic content detection</td>
                  <td className="px-4 py-2">AI, Legal, Brian</td>
                  <td className="px-4 py-2">Q4 2025</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Release Deeptrack Mirror</td>
                  <td className="px-4 py-2">Alert system, takedown, impersonation log</td>
                  <td className="px-4 py-2">Brian + CISO Advisory</td>
                  <td className="px-4 py-2">Q1 2026</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-2">Expand advisory bench</td>
                  <td className="px-4 py-2">AI, legal, regulatory support</td>
                  <td className="px-4 py-2">Brian</td>
                  <td className="px-4 py-2">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing Notes */}
        <div className="pt-12 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            We are grateful for your presence and expertise on this board. Your insight will guide Deeptrack through critical product, legal, and market expansion phases as we become a leading force in content and identity verification.
          </p>
          <p className="mt-4 text-gray-400">
            We look forward to your ideas and engagement across calls, working groups, and shared documentation.
          </p>
        </div>
      </div>
    </section>
  );
}