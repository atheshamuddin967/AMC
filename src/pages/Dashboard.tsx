import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <p>Welcome to your dashboard. Manage your franchise applications and profile here.</p>
      <div className="mt-4">
        <a href="/franchise-application">
          <Button>Apply for Franchise</Button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;