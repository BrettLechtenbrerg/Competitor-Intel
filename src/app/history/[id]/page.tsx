"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Globe,
  ExternalLink,
  Clock,
  Download,
  Copy,
  Share2,
  AlertTriangle,
  CheckCircle,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

// Demo change data
const change = {
  id: 1,
  siteId: 1,
  siteName: "Competitor A - Pricing",
  siteUrl: "https://competitor-a.com/pricing",
  timestamp: "2024-01-25T10:30:00",
  type: "price",
  summary: "Price reduced by 15% on Pro plan",
  changePercent: -15,
  severity: "high",
  analysis: "Competitor A has reduced their Pro plan pricing by 15%, from $99/month to $84/month. This is likely a competitive response or promotional offer. Consider adjusting your pricing strategy.",
};

// Demo diff data
const diffLines = [
  { type: "context", lineOld: 1, lineNew: 1, content: "Pricing Plans" },
  { type: "context", lineOld: 2, lineNew: 2, content: "" },
  { type: "context", lineOld: 3, lineNew: 3, content: "Starter Plan" },
  { type: "context", lineOld: 4, lineNew: 4, content: "  Price: $29/month" },
  { type: "context", lineOld: 5, lineNew: 5, content: "  Features: Basic CRM, Email support" },
  { type: "context", lineOld: 6, lineNew: 6, content: "" },
  { type: "context", lineOld: 7, lineNew: 7, content: "Pro Plan" },
  { type: "removed", lineOld: 8, lineNew: null, content: "  Price: $99/month" },
  { type: "added", lineOld: null, lineNew: 8, content: "  Price: $84/month (15% OFF!)" },
  { type: "context", lineOld: 9, lineNew: 9, content: "  Features: Advanced CRM, Priority support, Analytics" },
  { type: "added", lineOld: null, lineNew: 10, content: "  NEW: AI Assistant included" },
  { type: "context", lineOld: 10, lineNew: 11, content: "" },
  { type: "context", lineOld: 11, lineNew: 12, content: "Enterprise Plan" },
  { type: "context", lineOld: 12, lineNew: 13, content: "  Price: $499/month" },
  { type: "context", lineOld: 13, lineNew: 14, content: "  Features: Custom solutions, Dedicated support" },
];

function DiffLineIcon({ type }: { type: string }) {
  switch (type) {
    case "added":
      return <PlusCircle className="h-4 w-4 text-green-500" />;
    case "removed":
      return <MinusCircle className="h-4 w-4 text-red-500" />;
    default:
      return <span className="w-4" />;
  }
}

function SeverityBadge({ severity }: { severity: string }) {
  switch (severity) {
    case "high":
      return (
        <Badge variant="destructive" className="gap-1">
          <AlertTriangle className="h-3 w-3" />
          High Priority
        </Badge>
      );
    case "medium":
      return <Badge variant="warning">Medium Priority</Badge>;
    case "low":
      return <Badge variant="secondary">Low Priority</Badge>;
    default:
      return <Badge variant="outline">{severity}</Badge>;
  }
}

export default function DiffViewerPage() {
  const stats = {
    added: diffLines.filter((l) => l.type === "added").length,
    removed: diffLines.filter((l) => l.type === "removed").length,
    unchanged: diffLines.filter((l) => l.type === "context").length,
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/history"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to History
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{change.summary}</h1>
                <SeverityBadge severity={change.severity} />
              </div>
              <div className="mt-2 flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <Link
                    href={`/sites/${change.siteId}`}
                    className="hover:text-primary"
                  >
                    {change.siteName}
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(change.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lines Added</p>
                  <p className="text-2xl font-bold text-green-500">
                    +{stats.added}
                  </p>
                </div>
                <PlusCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Lines Removed</p>
                  <p className="text-2xl font-bold text-red-500">
                    -{stats.removed}
                  </p>
                </div>
                <MinusCircle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Unchanged</p>
                  <p className="text-2xl font-bold">{stats.unchanged}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Change %</p>
                  <p className="text-2xl font-bold">{Math.abs(change.changePercent)}%</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <Tabs defaultValue="diff">
          <TabsList>
            <TabsTrigger value="diff">Side-by-Side Diff</TabsTrigger>
            <TabsTrigger value="unified">Unified View</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="diff" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Side-by-Side Comparison</CardTitle>
                <CardDescription>
                  View the before and after versions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {/* Old Version */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="text-red-500">
                        Before
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Original content
                      </span>
                    </div>
                    <div className="rounded-lg border bg-muted/30 font-mono text-sm">
                      {diffLines
                        .filter((line) => line.type !== "added")
                        .map((line, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 px-3 py-1 ${
                              line.type === "removed"
                                ? "diff-removed"
                                : ""
                            }`}
                          >
                            <span className="w-8 shrink-0 text-right text-muted-foreground">
                              {line.lineOld || ""}
                            </span>
                            <span>{line.content || "\u00A0"}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* New Version */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="text-green-500">
                        After
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Current content
                      </span>
                    </div>
                    <div className="rounded-lg border bg-muted/30 font-mono text-sm">
                      {diffLines
                        .filter((line) => line.type !== "removed")
                        .map((line, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 px-3 py-1 ${
                              line.type === "added"
                                ? "diff-added"
                                : ""
                            }`}
                          >
                            <span className="w-8 shrink-0 text-right text-muted-foreground">
                              {line.lineNew || ""}
                            </span>
                            <span>{line.content || "\u00A0"}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unified" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Unified Diff View</CardTitle>
                <CardDescription>
                  All changes in a single view
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-muted/30 font-mono text-sm">
                  {diffLines.map((line, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-1 ${
                        line.type === "added"
                          ? "diff-added"
                          : line.type === "removed"
                          ? "diff-removed"
                          : ""
                      }`}
                    >
                      <DiffLineIcon type={line.type} />
                      <span className="w-8 shrink-0 text-right text-muted-foreground">
                        {line.type === "added"
                          ? ""
                          : line.lineOld || ""}
                      </span>
                      <span className="w-8 shrink-0 text-right text-muted-foreground">
                        {line.type === "removed"
                          ? ""
                          : line.lineNew || ""}
                      </span>
                      <span className="flex-1">
                        {line.type === "added" && "+ "}
                        {line.type === "removed" && "- "}
                        {line.content || "\u00A0"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  AI Analysis
                </CardTitle>
                <CardDescription>
                  Automated insights about this change
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-primary/5 p-4">
                  <p className="text-sm leading-relaxed">{change.analysis}</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h4 className="font-semibold">Recommended Actions</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-lg border p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium">Review Your Pricing</h5>
                        <p className="text-sm text-muted-foreground">
                          Compare your Pro plan features and pricing against this new offer.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium">Monitor for Duration</h5>
                        <p className="text-sm text-muted-foreground">
                          This may be a limited-time promotion. Track to see if it reverts.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium">Consider Value Positioning</h5>
                        <p className="text-sm text-muted-foreground">
                          Highlight unique features that justify your pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
