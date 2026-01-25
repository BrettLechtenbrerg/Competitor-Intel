"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Globe,
  Key,
  Bell,
  Webhook,
  Save,
  TestTube,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Copy,
  Mail,
  MessageSquare,
  RefreshCw,
} from "lucide-react";

export default function SettingsPage() {
  const [changeDetectionUrl, setChangeDetectionUrl] = useState(
    "https://your-instance.changedetection.io"
  );
  const [changeDetectionApiKey, setChangeDetectionApiKey] = useState("");
  const [ghlWebhookUrl, setGhlWebhookUrl] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [emailAddress, setEmailAddress] = useState("team@company.com");
  const [digestFrequency, setDigestFrequency] = useState("daily");
  const [slackWebhook, setSlackWebhook] = useState("");
  const [connectionStatus, setConnectionStatus] = useState<
    "connected" | "disconnected" | "testing"
  >("disconnected");

  const handleTestConnection = () => {
    setConnectionStatus("testing");
    // Simulate API test
    setTimeout(() => {
      setConnectionStatus(changeDetectionApiKey ? "connected" : "disconnected");
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Configure integrations and notification preferences
          </p>
        </div>

        <Tabs defaultValue="integrations">
          <TabsList className="mb-6">
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          {/* Integrations Tab */}
          <TabsContent value="integrations">
            <div className="grid gap-6">
              {/* ChangeDetection.io */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>ChangeDetection.io</CardTitle>
                        <CardDescription>
                          Open-source website change detection engine
                        </CardDescription>
                      </div>
                    </div>
                    {connectionStatus === "connected" ? (
                      <Badge variant="success" className="gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Connected
                      </Badge>
                    ) : connectionStatus === "testing" ? (
                      <Badge variant="secondary" className="gap-1">
                        <RefreshCw className="h-3 w-3 animate-spin" />
                        Testing...
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="gap-1">
                        <XCircle className="h-3 w-3" />
                        Disconnected
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Instance URL</label>
                    <Input
                      placeholder="https://your-instance.changedetection.io"
                      value={changeDetectionUrl}
                      onChange={(e) => setChangeDetectionUrl(e.target.value)}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Your self-hosted ChangeDetection.io URL or the cloud instance URL
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">API Key</label>
                    <div className="flex gap-2">
                      <Input
                        type="password"
                        placeholder="Enter your API key"
                        value={changeDetectionApiKey}
                        onChange={(e) => setChangeDetectionApiKey(e.target.value)}
                      />
                      <Button variant="outline" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Found in ChangeDetection.io Settings → API
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button onClick={handleTestConnection}>
                      <TestTube className="mr-2 h-4 w-4" />
                      Test Connection
                    </Button>
                    <Button variant="outline">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <a
                      href="https://changedetection.io/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                    </a>
                  </div>

                  <Separator />

                  <div className="rounded-lg border bg-muted/30 p-4">
                    <h4 className="mb-2 font-semibold">Setup Guide</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          1
                        </Badge>
                        <span>
                          Install ChangeDetection.io via Docker:{" "}
                          <code className="rounded bg-muted px-1 font-mono text-xs">
                            docker run -d -p 5000:5000 dgtlmoon/changedetection.io
                          </code>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          2
                        </Badge>
                        <span>
                          Access your instance at{" "}
                          <code className="rounded bg-muted px-1 font-mono text-xs">
                            http://localhost:5000
                          </code>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          3
                        </Badge>
                        <span>
                          Go to Settings → API and generate an API key
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          4
                        </Badge>
                        <span>
                          Paste the URL and API key above, then test the connection
                        </span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Go High Level */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                      <Webhook className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle>Go High Level (GHL)</CardTitle>
                      <CardDescription>
                        Send competitor alerts to your GHL workflows
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Webhook URL</label>
                    <Input
                      placeholder="https://services.leadconnectorhq.com/hooks/..."
                      value={ghlWebhookUrl}
                      onChange={(e) => setGhlWebhookUrl(e.target.value)}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Create a Webhook trigger in GHL Workflows and paste the URL here
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline">
                      <TestTube className="mr-2 h-4 w-4" />
                      Send Test
                    </Button>
                    <Button variant="outline">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>

                  <Separator />

                  <div className="rounded-lg border bg-muted/30 p-4">
                    <h4 className="mb-2 font-semibold">Webhook Payload Format</h4>
                    <pre className="overflow-x-auto rounded bg-muted p-3 font-mono text-xs">
{`{
  "event": "competitor_change",
  "site_name": "Competitor A - Pricing",
  "site_url": "https://competitor-a.com/pricing",
  "change_type": "price_change",
  "severity": "high",
  "summary": "Price reduced by 15%",
  "timestamp": "2024-01-25T10:30:00Z",
  "change_percent": -15,
  "view_url": "https://your-app.com/history/123"
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle>Email Notifications</CardTitle>
                      <CardDescription>
                        Receive alerts via email
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">
                        Enable Email Alerts
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Send notifications when changes are detected
                      </p>
                    </div>
                    <Button
                      variant={emailNotifications ? "default" : "outline"}
                      size="sm"
                      onClick={() => setEmailNotifications(!emailNotifications)}
                    >
                      {emailNotifications ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  {emailNotifications && (
                    <>
                      <div>
                        <label className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Digest Frequency
                        </label>
                        <Select
                          value={digestFrequency}
                          onValueChange={setDigestFrequency}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instant">Instant (every change)</SelectItem>
                            <SelectItem value="hourly">Hourly digest</SelectItem>
                            <SelectItem value="daily">Daily digest</SelectItem>
                            <SelectItem value="weekly">Weekly digest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                      <MessageSquare className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle>Slack / Discord</CardTitle>
                      <CardDescription>
                        Post alerts to your team channels
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">
                      Slack Webhook URL
                    </label>
                    <Input
                      placeholder="https://hooks.slack.com/services/..."
                      value={slackWebhook}
                      onChange={(e) => setSlackWebhook(e.target.value)}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Create an incoming webhook in your Slack workspace
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline">
                      <TestTube className="mr-2 h-4 w-4" />
                      Send Test
                    </Button>
                    <Button variant="outline">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Webhooks Tab */}
          <TabsContent value="webhooks">
            <Card>
              <CardHeader>
                <CardTitle>Outgoing Webhooks</CardTitle>
                <CardDescription>
                  Configure webhooks to send change data to external systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">GHL Workflow Webhook</h4>
                      <p className="text-sm text-muted-foreground">
                        Send all high-priority changes to Go High Level
                      </p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Slack Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Post alerts to #competitor-intel channel
                      </p>
                    </div>
                    <Badge variant="secondary">Inactive</Badge>
                  </div>
                </div>

                <Button>
                  <Webhook className="mr-2 h-4 w-4" />
                  Add Webhook
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* General Tab */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure general application preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Default Check Frequency</label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="6hour">Every 6 hours</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium">Data Retention</label>
                  <Select defaultValue="90">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">180 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-1 text-xs text-muted-foreground">
                    How long to keep change history
                  </p>
                </div>

                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
