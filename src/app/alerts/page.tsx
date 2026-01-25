"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  BellOff,
  Search,
  Filter,
  Check,
  X,
  Archive,
  Globe,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Settings,
  Trash2,
} from "lucide-react";
import Link from "next/link";

// Demo alerts data
const alerts = [
  {
    id: 1,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    type: "price_change",
    severity: "high",
    message: "Significant price change detected: Pro plan reduced by 15%",
    timestamp: "2024-01-25T10:30:00",
    status: "unread",
    changeId: 1,
  },
  {
    id: 2,
    siteId: 3,
    siteName: "Competitor C - Blog",
    type: "new_content",
    severity: "medium",
    message: "New blog post published: 'AI Integration Roadmap 2024'",
    timestamp: "2024-01-23T08:15:00",
    status: "unread",
    changeId: 3,
  },
  {
    id: 3,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    type: "feature_update",
    severity: "medium",
    message: "New feature added to Pro plan: AI Assistant",
    timestamp: "2024-01-24T14:00:00",
    status: "read",
    changeId: 2,
  },
  {
    id: 4,
    siteId: 4,
    siteName: "Industry News",
    type: "site_error",
    severity: "low",
    message: "Site monitoring failed: Connection timeout",
    timestamp: "2024-01-25T10:00:00",
    status: "read",
    changeId: null,
  },
  {
    id: 5,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    type: "price_change",
    severity: "high",
    message: "Enterprise plan price increased by 10%",
    timestamp: "2024-01-18T16:45:00",
    status: "archived",
    changeId: 6,
  },
];

// Alert rules
const alertRules = [
  {
    id: 1,
    name: "Price Change Alerts",
    description: "Notify when any pricing changes are detected",
    enabled: true,
    trigger: "price_change",
    sites: "all",
  },
  {
    id: 2,
    name: "Major Content Changes",
    description: "Alert when content changes by more than 10%",
    enabled: true,
    trigger: "content_change",
    threshold: 10,
    sites: "all",
  },
  {
    id: 3,
    name: "New Blog Posts",
    description: "Notify when competitors publish new content",
    enabled: true,
    trigger: "new_content",
    sites: ["Competitor C - Blog"],
  },
  {
    id: 4,
    name: "GHL Webhook - Price Drops",
    description: "Send price decrease alerts to GHL workflow",
    enabled: false,
    trigger: "price_decrease",
    sites: "all",
  },
];

function SeverityBadge({ severity }: { severity: string }) {
  switch (severity) {
    case "high":
      return (
        <Badge variant="destructive" className="gap-1">
          <AlertTriangle className="h-3 w-3" />
          High
        </Badge>
      );
    case "medium":
      return <Badge variant="warning">Medium</Badge>;
    case "low":
      return <Badge variant="secondary">Low</Badge>;
    default:
      return <Badge variant="outline">{severity}</Badge>;
  }
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "unread":
      return <Badge variant="info">Unread</Badge>;
    case "read":
      return <Badge variant="outline">Read</Badge>;
    case "archived":
      return <Badge variant="secondary">Archived</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

export default function AlertsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"alerts" | "rules">("alerts");

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.siteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || alert.status === statusFilter;
    const matchesSeverity =
      severityFilter === "all" || alert.severity === severityFilter;
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  const unreadCount = alerts.filter((a) => a.status === "unread").length;

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Alerts</h1>
            <p className="text-muted-foreground">
              Manage notifications and alert rules
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={activeTab === "alerts" ? "default" : "outline"}
              onClick={() => setActiveTab("alerts")}
            >
              <Bell className="mr-2 h-4 w-4" />
              Alerts
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </Button>
            <Button
              variant={activeTab === "rules" ? "default" : "outline"}
              onClick={() => setActiveTab("rules")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Alert Rules
            </Button>
          </div>
        </div>

        {activeTab === "alerts" && (
          <>
            {/* Stats */}
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Unread</p>
                      <p className="text-2xl font-bold text-blue-500">
                        {unreadCount}
                      </p>
                    </div>
                    <Bell className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">High Priority</p>
                      <p className="text-2xl font-bold text-red-500">
                        {alerts.filter((a) => a.severity === "high" && a.status === "unread").length}
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Rules</p>
                      <p className="text-2xl font-bold">
                        {alertRules.filter((r) => r.enabled).length}
                      </p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search alerts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[150px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="unread">Unread</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={severityFilter} onValueChange={setSeverityFilter}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severity</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Check className="mr-2 h-4 w-4" />
                    Mark All Read
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alert List */}
            <Card>
              <CardHeader>
                <CardTitle>All Alerts</CardTitle>
                <CardDescription>
                  {filteredAlerts.length} alerts found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAlerts.map((alert, index) => (
                    <div key={alert.id}>
                      <div
                        className={`flex items-start gap-4 rounded-lg p-3 ${
                          alert.status === "unread" ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <Bell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{alert.message}</h4>
                              <SeverityBadge severity={alert.severity} />
                              <StatusBadge status={alert.status} />
                            </div>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="h-3 w-3" />
                            <Link
                              href={`/sites/${alert.siteId}`}
                              className="hover:text-primary"
                            >
                              {alert.siteName}
                            </Link>
                            <span>•</span>
                            <span>
                              {new Date(alert.timestamp).toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {alert.changeId && (
                            <Link href={`/history/${alert.changeId}`}>
                              <Button variant="ghost" size="sm">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                            </Link>
                          )}
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      {index < filteredAlerts.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "rules" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Alert Rules</CardTitle>
                  <CardDescription>
                    Configure when and how you receive notifications
                  </CardDescription>
                </div>
                <Button>
                  <Bell className="mr-2 h-4 w-4" />
                  Create Rule
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertRules.map((rule, index) => (
                  <div key={rule.id}>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            rule.enabled
                              ? "bg-green-500/10"
                              : "bg-muted"
                          }`}
                        >
                          {rule.enabled ? (
                            <Bell className="h-5 w-5 text-green-500" />
                          ) : (
                            <BellOff className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{rule.name}</h4>
                            {rule.enabled ? (
                              <Badge variant="success">Active</Badge>
                            ) : (
                              <Badge variant="secondary">Disabled</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {rule.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant={rule.enabled ? "ghost" : "default"}
                          size="sm"
                        >
                          {rule.enabled ? "Disable" : "Enable"}
                        </Button>
                      </div>
                    </div>
                    {index < alertRules.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
