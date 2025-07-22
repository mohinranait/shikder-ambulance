import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Eye, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Blog Posts",
      value: "24",
      change: "+2 this week",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Total Users",
      value: "1,234",
      change: "+12 this month",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Page Views",
      value: "45,678",
      change: "+8.2% from last month",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Engagement Rate",
      value: "68%",
      change: "+4.1% from last month",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
