"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  ArrowLeft,
  Edit,
  Trash2,
  RefreshCw,
  ExternalLink,
  Clock,
  History,
  Bell,
  Code,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import Link from "next/link";

// Demo site data
const site = {
  id: 1,
  name: "Competitor A - Pricing",
  url: "https://competitor-a.com/pricing",
  category: "Pricing",
  checkFrequency: "hourly",
  lastChecked: "2024-01-25T10:30:00",
  status: "active",
  cssSelector: ".pricing-table",
  createdAt: "2024-01-01T00:00:00",
  totalChanges: 23,
  changesThisWeek: 3,
  changesThisMonth: 8,
};

// Demo change history
const changeHistory = [
  {
    id: 1,
    timestamp: "2024-01-25T10:30:00",
    type: "price",
    summary: "Price reduced by 15% on Pro plan",
    changePercent: -15,
    severity: "high",
  },
  {
    id: 2,
    timestamp: "2024-01-24T14:00:00",
    type: "content",
    summary: "Added new feature: 'AI Assistant' to Pro plan",
    changePercent: 5,
    severity: "medium",
  },
  {
    id: 3,
    timestamp: "2024-01-22T09:15:00",
    type: "layout",
    summary: "Minor layout adjustment on pricing cards",
    changePercent: 2,
    severity: "low",
  },
  {
    id: 4,
    timestamp: "2024-01-18T16:45:00",
    type: "price",
    summary: "Enterprise plan price increased by 10%",
    changePercent: 10,
    severity: "high",
  },
  {
    id: 5,
    timestamp: "2024-01-15T11:00:00",
    type: "content",
    summary: "Updated FAQ section",
    changePercent: 3,
    severity: "low",
  },
];

function ChangeIcon({ type }: { type: string }) {
  switch (type) {
    case "price":
      return <TrendingDown className="h-4 w-4 text-green-500" />;
    case "content":
      return <TrendingUp className="h-4 w-4 text-blue-500" />;
    default:
      return <Minus className="h-4 w-4 text-gray-500" />;
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
      return <Badge variant="outline">{severity}</Badge>;
  }
}

export default function SiteDetailPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/sites"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sites
          </Link>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold">{site.name}</h1>
                  <Badge variant="success">Active</Badge>
                </div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  {site.url}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Check Now
              </Button>
              <Link href={`/sites/${site.id}/edit`}>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Check Frequency</p>
                  <p className="text-2xl font-bold capitalize">{site.checkFrequency}</p>
                </div>
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">{site.changesThisWeek} changes</p>
                </div>
                <History className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">{site.changesThisMonth} changes</p>
                </div>
                <Bell className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Changes</p>
                  <p className="text-2xl font-bold">{site.totalChanges}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="history">
          <TabsList>
            <TabsTrigger value="history">Change History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="alerts">Alert Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Changes</CardTitle>
                <CardDescription>
                  All detected changes for this site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {changeHistory.map((change, index) => (
                    <div key={change.id}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <ChangeIcon type={change.type} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{change.summary}</h4>
                            <SeverityBadge severity={change.severity} />
                          </div>
                          <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              {new Date(change.timestamp).toLocaleString()}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {change.changePercent > 0 ? "+" : ""}
                              {change.changePercent}% change
                            </Badge>
                          </div>
                        </div>
                        <Link href={`/history/${change.id}`}>
                          <Button variant="ghost" size="sm">
                            View Diff
                          </Button>
                        </Link>
                      </div>
                      {index < changeHistory.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Monitoring Configuration</CardTitle>
                <CardDescription>
                  Current settings for this monitored site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      URL
                    </div>
                    <p className="mt-1 font-mono text-sm">{site.url}</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="h-4 w-4" />
                      CSS Selector
                    </div>
                    <p className="mt-1 font-mono text-sm">
                      {site.cssSelector || "None (full page)"}
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Check Frequency
                    </div>
                    <p className="mt-1 font-medium capitalize">
                      {site.checkFrequency}
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <History className="h-4 w-4" />
                      Created
                    </div>
                    <p className="mt-1 font-medium">
                      {new Date(site.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link href={`/sites/${site.id}/edit`}>
                    <Button>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Settings
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Rules</CardTitle>
                <CardDescription>
                  Configure when to receive notifications for this site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">Price Change Alert</h4>
                      <p className="text-sm text-muted-foreground">
                        Notify when pricing changes are detected
                      </p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">Major Content Change</h4>
                      <p className="text-sm text-muted-foreground">
                        Notify when content changes by more than 10%
                      </p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">GHL Webhook</h4>
                      <p className="text-sm text-muted-foreground">
                        Send changes to Go High Level workflow
                      </p>
                    </div>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Link href="/settings">
                    <Button variant="outline">
                      <Bell className="mr-2 h-4 w-4" />
                      Configure Alerts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
