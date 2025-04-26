import { Card, CardContent } from "@/components/ui/card";

export function Thankyou() {
  return (
    <Card>
      <CardContent className="flex flex-col  gap-4">
        <h1 className="text-2xl font-bold">Thank you!</h1>
        <p>You can visit other pages like.</p>
        <ul className="list-disc list-inside">
          <li>Dashboard</li>
          <li>Article</li>
          <li>User Management</li>
          <li>Settings</li>
        </ul>
      </CardContent>
    </Card>
  );
}
