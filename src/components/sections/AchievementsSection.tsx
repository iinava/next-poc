import { Users2, Building2, Calendar, CreditCard } from "lucide-react";

const achievementData = [
  { icon: Users2, count: "2,245,341", label: "Members" },
  { icon: Building2, count: "46,328", label: "Clubs" },
  { icon: Calendar, count: "828,867", label: "Event Bookings" },
  { icon: CreditCard, count: "1,926,436", label: "Payments" },
];

export default function AchievementsSection() {
  return (
    <section className="w-full  sm:px-[3vw] md:px-[100.23px]py-6 md:py-20 lg:py-20  flex justify-center bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="flex justify-around items-center flex-wrap gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Helping a local{" "} <br />
              <span className="text-[#22C55E]">business reinvent itself</span>
            </h2>
            <p className="text-gray-500 md:text-xl">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-2">
            {achievementData.map(({ icon: Icon, count, label }, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 sm:gap-10">
                  <Icon className="h-8 w-8 text-[#22C55E]" />
                  <span className="text-2xl font-bold">{count}</span>
                </div>
                <p className="text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
