"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  AlertTriangle,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
  Eye,
  Bell,
  Plus,
} from "lucide-react";
import Link from "next/link";

// Demo data for monitored sites
const monitoredSites = [
  {
    id: 1,
    name: "Competitor A - Pricing",
    url: "https://competitor-a.com/pricing",
    lastChecked: "5 min ago",
    status: "changed",
    changeCount: 3,
    lastChange: "Price reduced by 15%",
  },
  {
    id: 2,
    name: "Competitor B - Features",
    url: "https://competitor-b.com/features",
    lastChecked: "12 min ago",
    status: "unchanged",
    changeCount: 0,
    lastChange: null,
  },
  {
    id: 3,
    name: "Competitor C - Blog",
    url: "https://competitor-c.com/blog",
    lastChecked: "2 hours ago",
    status: "changed",
    changeCount: 1,
    lastChange: "New blog post: 'AI Integration'",
  },
  {
    id: 4,
    name: "Industry News",
    url: "https://industry-news.com",
    lastChecked: "30 min ago",
    status: "error",
    changeCount: 0,
    lastChange: null,
  },
];

// Demo data for recent alerts
const recentAlerts = [
  {
    id: 1,
    site: "Competitor A - Pricing",
    message: "Significant price change detected (-15%)",
    severity: "high",
    time: "5 min ago",
  },
  {
    id: 2,
    site: "Competitor C - Blog",
    message: "New content added: AI Integration announcement",
    severity: "medium",
    time: "2 hours ago",
  },
  {
    id: 3,
    site: "Competitor B - Features",
    message: "Minor text change in feature description",
    severity: "low",
    time: "1 day ago",
  },
];

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "changed":
      return <Badge variant="warning">Changed</Badge>;
    case "unchanged":
      return <Badge variant="success">No Changes</Badge>;
    case "error":
      return <Badge variant="destructive">Error</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
}

function SeverityBadge({ severity }: { severity: string }) {
  switch (severity) {
    case "high":
      return <Badge variant="destructive">High</Badge>;
    case "medium":
      return <Badge variant="warning">Medium</Badge>;
    case "low":
      return <Badge variant="secondary">Low</Badge>;
    default:
      return <Badge variant="outline">Info</Badge>;
  }
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your competition in real-time
            </p>
          </div>
          <Link href="/sites/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Site
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Monitored Sites
              </CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                +1 from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Changes Today
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                2 high priority
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                1 requires action
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Last Check
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5m</div>
              <p className="text-xs text-muted-foreground">
                All sites active
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Monitored Sites */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monitored Sites</CardTitle>
                  <CardDescription>
                    Real-time status of tracked competitors
                  </CardDescription>
                </div>
                <Link href="/sites">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monitoredSites.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{site.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          Last checked: {site.lastChecked}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={site.status} />
                      <Link href={`/sites/${site.id}`}>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>
                    Latest detected changes and notifications
                  </CardDescription>
                </div>
                <Link href="/alerts">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={alert.id}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{alert.site}</p>
                          <SeverityBadge severity={alert.severity} />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {alert.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                    {index < recentAlerts.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Link href="/sites/new">
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Site
                </Button>
              </Link>
              <Link href="/history">
                <Button variant="outline">
                  <Clock className="mr-2 h-4 w-4" />
                  View Change History
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="outline">
                  <Globe className="mr-2 h-4 w-4" />
                  Configure Integration
                </Button>
              </Link>
              <Link href="/alerts">
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" />
                  Manage Alerts
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
