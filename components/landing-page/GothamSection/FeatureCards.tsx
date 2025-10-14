import { Shield, Globe, UsersRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "AI-Powered Detection",
    text: "Advanced analysis for detecting manipulations and synthetic media.",
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "C2PA Provenance",
    text: "Complete media lineage tracking and authenticity verification.",
  },
  {
    icon: <UsersRound className="h-8 w-8 text-white" />,
    title: "Enterprise Ready",
    text: "Multi-tenant architecture with advanced user management.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-10 px-4 sm:px-6">
      {features.map((card, index) => (
        <Card
          key={index}
          className="bg-slate-900/30 border border-customTeal shadow-lg rounded-xl
                   flex flex-col items-center justify-center text-center p-2
                   w-full h-auto min-h-[160px] sm:min-h-[180px] transition-all"
        >
          <CardHeader className="flex items-center justify-center">
            <div className="flex items-center justify-center p-3 rounded-full bg-sky-600/20">
              {card.icon}
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-white text-base font-semibold mb-2">
              {card.title}
            </CardTitle>
            <p className="text-sm text-gray-200 leading-snug">{card.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}