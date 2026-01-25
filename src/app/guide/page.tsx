"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  Globe,
  Bell,
  History,
  Settings,
  Webhook,
  Code,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Competitor Intel</h1>
          <p className="text-xl text-muted-foreground mt-2">
            AI-Powered Competitor Intelligence Platform
          </p>
          <p className="text-muted-foreground mt-1">
            Powered by ChangeDetection.io
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is Competitor Intel?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Competitor Intel is your competitive intelligence command center. It monitors your competitors&apos; websites 24/7, detects changes automatically, and alerts you when important updates happen—so you can react faster than ever.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Track Competitors</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor pricing, features, and content
                </p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="font-semibold">Instant Alerts</h4>
                <p className="text-sm text-muted-foreground">
                  Get notified the moment changes happen
                </p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold">Stay Ahead</h4>
                <p className="text-sm text-muted-foreground">
                  React to market changes faster
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Quick Start Guide
            </CardTitle>
            <CardDescription>
              Get up and running in 5 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Set Up ChangeDetection.io</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Install the open-source change detection engine using Docker:
                  </p>
                  <code className="block rounded bg-muted p-3 font-mono text-sm">
                    docker run -d -p 5000:5000 dgtlmoon/changedetection.io
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Or use their cloud service at{" "}
                    <a
                      href="https://changedetection.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      changedetection.io
                    </a>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Connect Your Instance</h4>
                  <p className="text-sm text-muted-foreground">
                    Go to{" "}
                    <Link href="/settings" className="text-primary hover:underline">
                      Settings → Integrations
                    </Link>{" "}
                    and enter your ChangeDetection.io URL and API key.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Add Your First Competitor</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate to{" "}
                    <Link href="/sites/new" className="text-primary hover:underline">
                      Monitored Sites → Add Site
                    </Link>{" "}
                    and enter a competitor URL. Start with their pricing page!
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Configure Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up notifications via email, Slack, or GHL webhooks in{" "}
                    <Link href="/alerts" className="text-primary hover:underline">
                      Alerts → Alert Rules
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Deep Dive */}
        <h2 className="text-2xl font-bold mb-4">Features Deep Dive</h2>

        {/* Site Monitoring */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              Site Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Monitor any public webpage for changes. Perfect for tracking:
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Competitor pricing pages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Product feature lists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Blog posts and content</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Job postings (hiring signals)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Press releases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Terms of service changes</span>
              </div>
            </div>

            <Separator />

            <div className="rounded-lg border bg-blue-500/5 p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Code className="h-4 w-4" />
                Pro Tip: Use CSS Selectors
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Instead of monitoring entire pages (which creates noise), use CSS selectors to focus on specific elements like <code className="bg-muted px-1 rounded">.pricing-table</code> or <code className="bg-muted px-1 rounded">#features-list</code>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Change History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-purple-500" />
              Change History & Diff Viewer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Every detected change is stored with a visual diff showing exactly what changed:
            </p>
            <div className="rounded-lg border bg-muted/30 p-4 font-mono text-sm">
              <div className="diff-removed mb-1 rounded px-2 py-1">
                - Pro Plan: $99/month
              </div>
              <div className="diff-added rounded px-2 py-1">
                + Pro Plan: $84/month (15% OFF!)
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Changes are categorized by severity (High, Medium, Low) and type (Price, Content, Layout) for easy filtering.
            </p>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-yellow-500" />
              Smart Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Get notified through multiple channels when important changes happen:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-3">
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Instant alerts or daily/weekly digests
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <h4 className="font-medium">Slack/Discord</h4>
                <p className="text-sm text-muted-foreground">
                  Post alerts to your team channels
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <h4 className="font-medium">GHL Webhooks</h4>
                <p className="text-sm text-muted-foreground">
                  Trigger automated workflows
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <h4 className="font-medium">Custom Webhooks</h4>
                <p className="text-sm text-muted-foreground">
                  Send data to any external system
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GHL Integration */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook className="h-5 w-5 text-orange-500" />
              Go High Level Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Connect competitor changes directly to your GHL workflows for automated responses:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5 shrink-0 bg-orange-500/10 text-orange-500">
                  1
                </Badge>
                <div>
                  <h4 className="font-medium">Create a Workflow Trigger</h4>
                  <p className="text-sm text-muted-foreground">
                    In GHL, create a new workflow with a &quot;Inbound Webhook&quot; trigger
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5 shrink-0 bg-orange-500/10 text-orange-500">
                  2
                </Badge>
                <div>
                  <h4 className="font-medium">Copy the Webhook URL</h4>
                  <p className="text-sm text-muted-foreground">
                    GHL will provide a unique webhook URL for your workflow
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5 shrink-0 bg-orange-500/10 text-orange-500">
                  3
                </Badge>
                <div>
                  <h4 className="font-medium">Add to Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Paste the webhook URL in Settings → Integrations → Go High Level
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="rounded-lg border bg-orange-500/5 p-4">
              <h4 className="font-semibold">Automation Ideas</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Trigger a price-match campaign when competitors lower prices</li>
                <li>• Alert your sales team when competitors add new features</li>
                <li>• Update a competitive analysis document automatically</li>
                <li>• Send weekly competitor reports to stakeholders</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* ChangeDetection.io Setup */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-gray-500" />
              ChangeDetection.io Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              ChangeDetection.io is the open-source engine that powers Competitor Intel&apos;s monitoring capabilities.
            </p>

            <div className="rounded-lg border p-4 space-y-4">
              <h4 className="font-semibold">Option 1: Self-Hosted (Free)</h4>
              <code className="block rounded bg-muted p-3 font-mono text-sm overflow-x-auto">
                docker run -d --restart always -p 5000:5000 \{"\n"}
                {"  "}-v changedetection-data:/datastore \{"\n"}
                {"  "}dgtlmoon/changedetection.io
              </code>
              <p className="text-sm text-muted-foreground">
                Access at <code className="bg-muted px-1 rounded">http://localhost:5000</code>
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Option 2: Cloud Service</h4>
              <p className="text-sm text-muted-foreground">
                Use the managed service at{" "}
                <a
                  href="https://changedetection.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  changedetection.io
                  <ExternalLink className="h-3 w-3" />
                </a>
                {" "}for hassle-free monitoring.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Required Settings</h4>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">
                    <strong>Instance URL:</strong> Your ChangeDetection.io address
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">
                    <strong>API Key:</strong> Found in ChangeDetection.io Settings → API
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Set Appropriate Check Frequencies</h4>
                  <p className="text-sm text-muted-foreground">
                    Pricing pages: hourly. Blogs: daily. Landing pages: weekly.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Focus Your Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Use CSS selectors to monitor specific elements, reducing false positives.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Prioritize Key Competitors</h4>
                  <p className="text-sm text-muted-foreground">
                    Start with your top 3-5 competitors. Quality over quantity.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Use Digest Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Avoid alert fatigue by using daily digests instead of instant notifications for non-critical changes.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Part of <strong>The Master&apos;s Edge Business Program</strong> - Tier 3
          </p>
          <p className="text-xs mt-1">
            Built with Next.js, Tailwind CSS, and ChangeDetection.io
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
