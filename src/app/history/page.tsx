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
  History,
  Search,
  Filter,
  Calendar,
  Globe,
  ExternalLink,
  Eye,
  Download,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import Link from "next/link";

// Demo change history data
const allChanges = [
  {
    id: 1,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    siteUrl: "https://competitor-a.com/pricing",
    timestamp: "2024-01-25T10:30:00",
    type: "price",
    summary: "Price reduced by 15% on Pro plan",
    changePercent: -15,
    severity: "high",
    oldContent: "Pro Plan: $99/month",
    newContent: "Pro Plan: $84/month (15% OFF!)",
  },
  {
    id: 2,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    siteUrl: "https://competitor-a.com/pricing",
    timestamp: "2024-01-24T14:00:00",
    type: "content",
    summary: "Added new feature: 'AI Assistant' to Pro plan",
    changePercent: 5,
    severity: "medium",
    oldContent: "Features: CRM, Email, Analytics",
    newContent: "Features: CRM, Email, Analytics, AI Assistant",
  },
  {
    id: 3,
    siteId: 3,
    siteName: "Competitor C - Blog",
    siteUrl: "https://competitor-c.com/blog",
    timestamp: "2024-01-23T08:15:00",
    type: "content",
    summary: "New blog post: 'AI Integration Roadmap 2024'",
    changePercent: 12,
    severity: "medium",
    oldContent: "Latest: Product Update Dec 2023",
    newContent: "Latest: AI Integration Roadmap 2024",
  },
  {
    id: 4,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    siteUrl: "https://competitor-a.com/pricing",
    timestamp: "2024-01-22T09:15:00",
    type: "layout",
    summary: "Minor layout adjustment on pricing cards",
    changePercent: 2,
    severity: "low",
    oldContent: "Card padding: 24px",
    newContent: "Card padding: 32px",
  },
  {
    id: 5,
    siteId: 2,
    siteName: "Competitor B - Features",
    siteUrl: "https://competitor-b.com/features",
    timestamp: "2024-01-20T16:45:00",
    type: "content",
    summary: "Removed deprecated API feature",
    changePercent: -3,
    severity: "low",
    oldContent: "API v1 (deprecated), API v2",
    newContent: "API v2",
  },
  {
    id: 6,
    siteId: 1,
    siteName: "Competitor A - Pricing",
    siteUrl: "https://competitor-a.com/pricing",
    timestamp: "2024-01-18T16:45:00",
    type: "price",
    summary: "Enterprise plan price increased by 10%",
    changePercent: 10,
    severity: "high",
    oldContent: "Enterprise: $499/month",
    newContent: "Enterprise: $549/month",
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

function TypeBadge({ type }: { type: string }) {
  switch (type) {
    case "price":
      return <Badge variant="info">Price</Badge>;
    case "content":
      return <Badge className="bg-purple-500 text-white">Content</Badge>;
    case "layout":
      return <Badge variant="outline">Layout</Badge>;
    default:
      return <Badge variant="outline">{type}</Badge>;
  }
}

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredChanges = allChanges.filter((change) => {
    const matchesSearch =
      change.siteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      change.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity =
      severityFilter === "all" || change.severity === severityFilter;
    const matchesType = typeFilter === "all" || change.type === typeFilter;
    return matchesSearch && matchesSeverity && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Change History</h1>
            <p className="text-muted-foreground">
              View all detected changes across your monitored sites
            </p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Changes</p>
                  <p className="text-2xl font-bold">{allChanges.length}</p>
                </div>
                <History className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">High Priority</p>
                  <p className="text-2xl font-bold text-red-500">
                    {allChanges.filter((c) => c.severity === "high").length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Price Changes</p>
                  <p className="text-2xl font-bold text-green-500">
                    {allChanges.filter((c) => c.type === "price").length}
                  </p>
                </div>
                <TrendingDown className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
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
                  placeholder="Search changes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="layout">Layout</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Change List */}
        <Card>
          <CardHeader>
            <CardTitle>All Changes</CardTitle>
            <CardDescription>
              {filteredChanges.length} changes found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredChanges.map((change, index) => (
                <div key={change.id}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <ChangeIcon type={change.type} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{change.summary}</h4>
                          <TypeBadge type={change.type} />
                          <SeverityBadge severity={change.severity} />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {change.changePercent > 0 ? "+" : ""}
                          {change.changePercent}%
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="h-3 w-3" />
                        <Link
                          href={`/sites/${change.siteId}`}
                          className="hover:text-primary"
                        >
                          {change.siteName}
                        </Link>
                        <span>•</span>
                        <span>
                          {new Date(change.timestamp).toLocaleString()}
                        </span>
                      </div>

                      {/* Mini Diff Preview */}
                      <div className="mt-3 rounded-lg border bg-muted/30 p-3 font-mono text-xs">
                        <div className="diff-removed mb-1 rounded px-2 py-1">
                          - {change.oldContent}
                        </div>
                        <div className="diff-added rounded px-2 py-1">
                          + {change.newContent}
                        </div>
                      </div>
                    </div>
                    <Link href={`/history/${change.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Diff
                      </Button>
                    </Link>
                  </div>
                  {index < filteredChanges.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {filteredChanges.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <History className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No changes found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
