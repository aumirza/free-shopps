import { RevenueChart } from "@/components/RevenueChart";
import { SalesChart } from "@/components/SalesChart";
import { StatCard } from "@/components/StatCard";
import { DollarSign, Users, Package, CreditCard } from "lucide-react";

const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Total Products",
    value: "+12,234",
    description: "+19% from last month",
    icon: Package,
  },
  {
    title: "Active Orders",
    value: "+573",
    description: "+201 since last hour",
    icon: CreditCard,
  },
];

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className=" text-4xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} color="primary" />
        ))}
      </div>
      <SalesChart />
      <RevenueChart />
    </div>
  );
}
