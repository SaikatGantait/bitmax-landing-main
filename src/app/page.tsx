import { HeroSection } from "./components/HeroSection";
import { ContainerScrollSection } from "./components/ContainerScrollSection";
import Featurecard from "./components/ui/Featurecard";
import { BarChart3, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ContainerScrollSection />

      {/* Add FeatureCard here */}
      <div className="flex justify-center py-20">
        <Featurecard
          title="Balance"
          subtitle="Lorem ipsum dolor sit amet 
          consectetur. Molestie lorem arcu"
          items={[
            {
              id: "1",
              label: "PER-08",
              description: "Making testing very design system",
              active: true,
              icon: <BarChart3 size={16} />,
            },
            {
              id: "2",
              label: "PER-07",
              description: "Create a working prototype",
              active: false,
              icon: <CheckCircle size={16} />,
            },
          ]}
        />
      </div>
    </div>
  );
}
