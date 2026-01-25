"use client";

import { useState } from "react";
import { HelpCircle, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface Step {
  title: string;
  description: string;
  tip?: string;
}

interface Section {
  id: string;
  title: string;
  icon: string;
  color: string;
  steps: Step[];
}

const helpSections: Section[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    steps: [
      {
        title: "Connect ChangeDetection.io",
        description:
          "Go to Settings and enter your ChangeDetection.io instance URL and API key. This enables real-time competitor monitoring.",
        tip: "You can self-host ChangeDetection.io or use their cloud service.",
      },
      {
        title: "Add Your First Competitor",
        description:
          "Navigate to Monitored Sites and click 'Add Site'. Enter the competitor's URL and configure monitoring options.",
        tip: "Start with pricing pages - they change most often!",
      },
      {
        title: "Configure Alert Rules",
        description:
          "Set up alerts to get notified when specific changes are detected. You can filter by keywords, percentage change, or element selectors.",
      },
    ],
  },
  {
    id: "monitoring",
    title: "Site Monitoring",
    icon: "👁️",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    steps: [
      {
        title: "CSS Selectors",
        description:
          "Use CSS selectors to monitor specific parts of a page, like pricing tables or feature lists. This reduces noise and focuses on what matters.",
        tip: "Right-click any element in Chrome DevTools and select 'Copy selector'.",
      },
      {
        title: "Check Frequency",
        description:
          "Set how often to check each site. Pricing pages might need hourly checks, while blog posts can be daily.",
      },
      {
        title: "Visual vs Text Changes",
        description:
          "Choose between text-only monitoring (faster, less noise) or visual comparison (catches layout changes).",
      },
    ],
  },
  {
    id: "changes",
    title: "Change Detection",
    icon: "🔍",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    steps: [
      {
        title: "View Diff History",
        description:
          "The Change History page shows all detected changes with a diff viewer. Green = added content, Red = removed content.",
      },
      {
        title: "Filter by Importance",
        description:
          "Use significance filters to focus on major changes. Minor text tweaks are automatically flagged as low importance.",
      },
      {
        title: "Export Reports",
        description:
          "Generate competitor intelligence reports for your team. Export as PDF or share via link.",
      },
    ],
  },
  {
    id: "alerts",
    title: "Alerts & Notifications",
    icon: "🔔",
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    steps: [
      {
        title: "GHL Webhook Integration",
        description:
          "Send alerts directly to Go High Level workflows. Perfect for triggering automated competitive response campaigns.",
        tip: "Use the webhook URL from your GHL workflow's trigger settings.",
      },
      {
        title: "Email Notifications",
        description:
          "Configure email alerts for your team. Set digest frequency to avoid notification overload.",
      },
      {
        title: "Slack/Discord",
        description:
          "Post alerts to your team channels. Great for real-time competitive intelligence sharing.",
      },
    ],
  },
  {
    id: "ghl",
    title: "GHL Integration",
    icon: "⚡",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    steps: [
      {
        title: "Webhook Setup",
        description:
          "Create a webhook trigger in GHL Workflows. Copy the webhook URL and add it in Settings > Integrations.",
      },
      {
        title: "Payload Format",
        description:
          "Competitor change data is sent as JSON with site URL, change summary, timestamp, and significance score.",
      },
      {
        title: "Automation Ideas",
        description:
          "Trigger price match campaigns when competitors lower prices. Alert sales team when competitor features change.",
      },
    ],
  },
];

export function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg">
          <HelpCircle className="h-6 w-6" />
          <span className="sr-only">Help</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Competitor Intel Quick Guide
          </DialogTitle>
          <DialogDescription>
            Learn how to monitor competitors and stay ahead of the market.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <Accordion type="single" collapsible className="w-full">
            {helpSections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={`${section.color} px-2 py-1`}
                    >
                      {section.icon}
                    </Badge>
                    <span className="font-semibold">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-2">
                    {section.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-3 rounded-lg border p-3"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                          {step.tip && (
                            <div className="mt-2 flex items-start gap-2 rounded bg-muted/50 p-2 text-xs">
                              <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-green-500" />
                              <span className="text-muted-foreground">
                                <strong>Pro tip:</strong> {step.tip}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 rounded-lg border bg-muted/30 p-4">
            <h4 className="mb-2 font-semibold">Need More Help?</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link
                href="/guide"
                className="flex items-center gap-2 text-primary hover:underline"
                onClick={() => setOpen(false)}
              >
                <ExternalLink className="h-4 w-4" />
                View Full Admin Guide
              </Link>
              <a
                href="https://changedetection.io/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                ChangeDetection.io Documentation
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
