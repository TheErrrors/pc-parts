
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const mockUser = {
  username: "Gamer99",
  city: "Bengaluru",
  karma: "1,250",
  rank: "Top 5% Contributor",
  stats: {
    submissions: 14,
    approved: 12,
  }
};

const recentSubmissions = [
  { id: 1, component: "AMD Ryzen 5 7600", price: 18500, shop: "SP Road, BLR", date: "2 days ago", status: "Approved" },
  { id: 2, component: "ASUS RTX 4070 Dual OC", price: 57500, shop: "Golchha IT", date: "1 week ago", status: "Approved" },
  { id: 3, component: "Corsair RM750e", price: 8200, shop: "Ankit Infotech", date: "Yesterday", status: "Pending" },
  { id: 4, component: "Samsung 990 Pro 2TB", price: 15400, shop: "Super Computers", date: "2 weeks ago", status: "Rejected" },
];

const priceAlerts = [
  { id: 1, component: "AMD Ryzen 7 7800X3D", currentPrice: 38499, targetPrice: 38500, icon: "memory" },
  { id: 2, component: "NVIDIA RTX 4080 Super", currentPrice: 109999, targetPrice: 105000, icon: "developer_board" },
  { id: 3, component: "G.Skill Trident Z5 32GB", currentPrice: 11200, targetPrice: 10000, icon: "dns" },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Approved: "bg-[#22c55e]/10 text-[#006c49] border-[#22c55e]/20",
    Pending: "bg-amber-100 text-amber-700 border-amber-200",
    Rejected: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded font-label-md text-[11px] border ${styles[status as keyof typeof styles] || styles.Pending}`}>
      {status}
    </span>
  );
};

export default function DashboardPage() {
  return (
    <>
      {/* TopNavBar */}

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">

          {/* Left Sidebar (User Navigation) */}
          <div className="w-full md:w-[250px] shrink-0 sticky top-24 flex flex-col gap-6">

            {/* User Profile Card */}
            <div className="bg-surface-container-lowest border border-surface-container-high rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-display text-2xl mb-4 border-2 border-primary/20">
                {mockUser.username.charAt(0).toUpperCase()}
              </div>
              <h2 className="font-display text-headline-md text-on-surface mb-1">{mockUser.username}</h2>
              <div className="flex items-center justify-center gap-1 text-on-surface-variant font-body-sm mb-4">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {mockUser.city}
              </div>
              <div className="bg-surface py-2 px-4 rounded-lg inline-block border border-surface-container-high">
                <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider block mb-0.5">Karma Score</span>
                <span className="font-body-lg font-bold text-primary">{mockUser.karma}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-surface-container-high/50 font-body-sm font-medium text-on-surface">
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Dashboard
              </Link>
              <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface-container/50 font-body-sm font-medium text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                Price Alerts
              </Link>
              <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface-container/50 font-body-sm font-medium text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">bookmarks</span>
                Saved Lists
              </Link>
              <Link href="/contribute" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface-container/50 font-body-sm font-medium text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">upload_file</span>
                My Submissions
              </Link>
              <Link href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface-container/50 font-body-sm font-medium text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[20px]">settings</span>
                Settings
              </Link>
            </nav>

          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 flex flex-col gap-8">

            {/* Header & Stats Grid */}
            <div>
              <h1 className="font-display text-headline-lg text-on-surface mb-6">Welcome back, {mockUser.username}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 flex flex-col justify-between h-28">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">Total Submissions</span>
                    <span className="material-symbols-outlined text-[#22c55e] text-[18px]">trending_up</span>
                  </div>
                  <span className="font-display text-headline-lg font-bold text-on-surface">{mockUser.stats.submissions}</span>
                </div>
                <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 flex flex-col justify-between h-28">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">Approved Quotes</span>
                  </div>
                  <span className="font-display text-headline-lg font-bold text-on-surface">{mockUser.stats.approved}</span>
                </div>
                <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 flex flex-col justify-between h-28">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">Community Rank</span>
                  </div>
                  <span className="font-body-lg font-semibold text-primary">{mockUser.rank}</span>
                </div>
              </div>
            </div>

            {/* Recent Submissions Table */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-headline-md text-on-surface">Recent Submissions</h2>
                <Link href="/contribute" className="font-body-sm font-medium text-primary hover:underline">Submit New Price →</Link>
              </div>
              <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl overflow-x-auto shadow-sm">
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="border-b border-surface-container-high bg-surface font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">
                      <th className="px-6 py-4 font-semibold">Component</th>
                      <th className="px-6 py-4 font-semibold">Submitted Price</th>
                      <th className="px-6 py-4 font-semibold">Shop Name</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high font-body-sm text-on-surface">
                    {recentSubmissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-surface-container-lowest/50 transition-colors">
                        <td className="px-6 py-4 font-medium">{sub.component}</td>
                        <td className="px-6 py-4 tabular-nums">₹{sub.price.toLocaleString("en-IN")}</td>
                        <td className="px-6 py-4">{sub.shop}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{sub.date}</td>
                        <td className="px-6 py-4">
                          <StatusBadge status={sub.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Saved Price Alerts Section */}
            <div>
              <h2 className="font-display text-headline-md text-on-surface mb-4">Saved Price Alerts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {priceAlerts.map((alert) => {
                  const isHit = alert.currentPrice <= alert.targetPrice;
                  return (
                    <div
                      key={alert.id}
                      className={`bg-surface-container-lowest border rounded-xl p-5 flex flex-col ${isHit ? 'border-primary ring-1 ring-primary/50' : 'border-surface-container-high'}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[24px] text-on-surface-variant/50">{alert.icon}</span>
                        </div>
                        <h3 className="font-body-md font-semibold text-on-surface line-clamp-2 leading-snug">{alert.component}</h3>
                      </div>

                      <div className="flex items-center justify-between mt-auto bg-surface p-3 rounded-lg border border-surface-container-high/50">
                        <div className="flex flex-col">
                          <span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wide mb-1">Target</span>
                          <span className="font-body-md font-semibold tabular-nums text-on-surface">₹{alert.targetPrice.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="w-px h-8 bg-surface-container-high mx-2"></div>
                        <div className="flex flex-col text-right">
                          <span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wide mb-1">Current</span>
                          <span className={`font-body-md font-bold tabular-nums ${isHit ? 'text-[#22c55e]' : 'text-primary'}`}>
                            ₹{alert.currentPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>

                      {isHit && (
                        <div className="mt-3 text-center">
                          <span className="font-label-md text-[11px] text-[#22c55e] flex items-center justify-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">notifications_active</span>
                            Target price reached!
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </main>

          </>
  );
}
