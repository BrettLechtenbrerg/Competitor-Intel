"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  Plus,
  Search,
  Filter,
  ExternalLink,
  Trash2,
  Edit,
  RefreshCw,
  Eye,
  Clock,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";

// Demo data
const sites = [
  {
    id: 1,
    name: "Competitor A - Pricing",
    url: "https://competitor-a.com/pricing",
    category: "Pricing",
    checkFrequency: "hourly",
    lastChecked: "2024-01-25T10:30:00",
    status: "active",
    changesThisWeek: 3,
    cssSelector: ".pricing-table",
  },
  {
    id: 2,
    name: "Competitor B - Features",
    url: "https://competitor-b.com/features",
    category: "Features",
    checkFrequency: "daily",
    lastChecked: "2024-01-25T08:00:00",
    status: "active",
    changesThisWeek: 0,
    cssSelector: null,
  },
  {
    id: 3,
    name: "Competitor C - Blog",
    url: "https://competitor-c.com/blog",
    category: "Content",
    checkFrequency: "daily",
    lastChecked: "2024-01-24T12:00:00",
    status: "active",
    changesThisWeek: 1,
    cssSelector: ".blog-posts",
  },
  {
    id: 4,
    name: "Industry News",
    url: "https://industry-news.com",
    category: "News",
    checkFrequency: "hourly",
    lastChecked: "2024-01-25T10:00:00",
    status: "error",
    changesThisWeek: 0,
    cssSelector: null,
  },
  {
    id: 5,
    name: "Competitor D - Landing Page",
    url: "https://competitor-d.com",
    category: "Landing",
    checkFrequency: "weekly",
    lastChecked: "2024-01-20T00:00:00",
    status: "paused",
    changesThisWeek: 0,
    cssSelector: null,
  },
];

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "active":
      return <Badge variant="success">Active</Badge>;
    case "paused":
      return <Badge variant="secondary">Paused</Badge>;
    case "error":
      return <Badge variant="destructive">Error</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

function FrequencyBadge({ frequency }: { frequency: string }) {
  return (
    <Badge variant="outline" className="font-mono text-xs">
      {frequency}
    </Badge>
  );
}

export default function SitesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || site.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(sites.map((site) => site.category))];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Monitored Sites</h1>
            <p className="text-muted-foreground">
              Manage your competitor monitoring list
            </p>
          </div>
          <Link href="/sites/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Site
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search sites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sites List */}
        <div className="grid gap-4">
          {filteredSites.map((site) => (
            <Card key={site.id} className="overflow-hidden">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{site.name}</h3>
                      <StatusBadge status={site.status} />
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      {site.url}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <FrequencyBadge frequency={site.checkFrequency} />
                      </span>
                      {site.cssSelector && (
                        <span className="font-mono bg-muted px-1 rounded">
                          {site.cssSelector}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{site.changesThisWeek}</div>
                    <div className="text-xs text-muted-foreground">
                      changes this week
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/sites/${site.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/sites/${site.id}/edit`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Globe className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No sites found</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {searchQuery || categoryFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Start by adding your first competitor site"}
              </p>
              <Link href="/sites/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Site
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
