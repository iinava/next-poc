import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Users2 } from "lucide-react";

export default function CommunitySection() {
  const features = [
    {
      icon: Users,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: Building2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: Users2,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="py-5">
      <div className="container mx-auto px-4 text-center" style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)" }}>
        <h2 className=" text-3xl sm:text-5xl font-bold mb-2 text-[#4D4D4D]" >
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-gray-600 mb-12">Who is Nextcent suitable for?</p>

        <div className="flex justify-around gap-2 items-center flex-wrap">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-80 h-80"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
