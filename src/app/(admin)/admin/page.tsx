import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";

export default function AdminDashboard() {
  return (
    <>
      <Navbar fixed></Navbar>
      <Main>
        <div>
          <div className="text-2xl text-primary font-bold flex items-center gap-2">
            Dashboard
          </div>
          <p className="text-gray text-sm">Manage dashboard</p>
        </div>
        <DashboardStats />
      </Main>
    </>
  );
}
