"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  ArrowLeft,
  Save,
  HelpCircle,
  Code,
  Clock,
  Tag,
  Bell,
} from "lucide-react";
import Link from "next/link";

export default function NewSitePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    category: "Pricing",
    checkFrequency: "daily",
    cssSelector: "",
    alertOnChange: true,
    minChangePercent: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log("Creating site:", formData);
    router.push("/sites");
  };

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
          <h1 className="text-3xl font-bold">Add New Site</h1>
          <p className="text-muted-foreground">
            Configure a new competitor page to monitor
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>
                    Enter the competitor page details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Site Name</label>
                    <Input
                      placeholder="e.g., Competitor A - Pricing Page"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      A friendly name to identify this monitored page
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">URL to Monitor</label>
                    <Input
                      type="url"
                      placeholder="https://competitor.com/pricing"
                      value={formData.url}
                      onChange={(e) =>
                        setFormData({ ...formData, url: e.target.value })
                      }
                      required
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      The exact URL of the page you want to track
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger>
                        <Tag className="mr-2 h-4 w-4" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pricing">Pricing</SelectItem>
                        <SelectItem value="Features">Features</SelectItem>
                        <SelectItem value="Content">Content/Blog</SelectItem>
                        <SelectItem value="Landing">Landing Page</SelectItem>
                        <SelectItem value="News">Industry News</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Monitoring Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Monitoring Settings
                  </CardTitle>
                  <CardDescription>
                    Configure how often and what to check
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Check Frequency</label>
                    <Select
                      value={formData.checkFrequency}
                      onValueChange={(value) =>
                        setFormData({ ...formData, checkFrequency: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5min">Every 5 minutes</SelectItem>
                        <SelectItem value="15min">Every 15 minutes</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="6hour">Every 6 hours</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-1 text-xs text-muted-foreground">
                      How often ChangeDetection.io should check this page
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      CSS Selector (Optional)
                    </label>
                    <Input
                      placeholder="e.g., .pricing-table, #features-list"
                      value={formData.cssSelector}
                      onChange={(e) =>
                        setFormData({ ...formData, cssSelector: e.target.value })
                      }
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Monitor only specific parts of the page. Leave empty to
                      monitor the entire page.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Alert Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Alert Settings
                  </CardTitle>
                  <CardDescription>
                    Configure when to notify you of changes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">
                        Alert on Any Change
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Get notified whenever this page changes
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant={formData.alertOnChange ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          alertOnChange: !formData.alertOnChange,
                        })
                      }
                    >
                      {formData.alertOnChange ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium">
                      Minimum Change Threshold
                    </label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.minChangePercent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            minChangePercent: parseInt(e.target.value) || 0,
                          })
                        }
                        className="w-24"
                      />
                      <span className="text-sm text-muted-foreground">
                        % change required to trigger alert
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Ignore minor changes below this threshold
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button type="submit" className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Create Site
                  </Button>
                  <Link href="/sites" className="block">
                    <Button type="button" variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <HelpCircle className="h-4 w-4" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      1
                    </Badge>
                    <p>
                      Start with <strong>pricing pages</strong> - they change
                      most frequently
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      2
                    </Badge>
                    <p>
                      Use <strong>CSS selectors</strong> to focus on specific
                      content and reduce noise
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      3
                    </Badge>
                    <p>
                      Set <strong>hourly checks</strong> for pricing, daily for
                      blogs
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      4
                    </Badge>
                    <p>
                      Right-click in Chrome DevTools →{" "}
                      <strong>Copy selector</strong> for CSS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
