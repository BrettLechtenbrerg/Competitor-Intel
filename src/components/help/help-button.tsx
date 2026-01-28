"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronRight,
  Eye,
  Bell,
  History,
  Settings,
  CheckCircle2,
  AlertCircle,
  Webhook,
  Target,
  TrendingUp,
  Globe,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Connect ChangeDetection.io",
    icon: Settings,
    color: "emerald",
    content: [
      {
        subtitle: "Get Your API Access",
        instructions: [
          "Sign up at changedetection.io (or self-host)",
          "Go to your account settings",
          "Copy your API key and instance URL",
          "Paste them in Settings > API Configuration",
        ],
      },
      {
        subtitle: "Test Connection",
        instructions: [
          "Click 'Test Connection' to verify",
          "Green checkmark = ready to monitor",
          "Red X = check your credentials",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Add Competitor Sites",
    icon: Globe,
    color: "blue",
    content: [
      {
        subtitle: "Add Your First Site",
        instructions: [
          "Go to 'Sites' from the sidebar",
          "Click 'Add Site' button",
          "Enter the competitor URL to monitor",
          "Set check frequency (hourly, daily, weekly)",
          "Add optional CSS selectors for specific elements",
        ],
      },
      {
        subtitle: null,
        isWarning: true,
        instructions: [
          "Pro tip: Monitor pricing pages first - they change most often and have the biggest business impact!",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Target Specific Content",
    icon: Target,
    color: "purple",
    content: [
      {
        subtitle: "Using CSS Selectors",
        instructions: [
          "Right-click any element on competitor's site",
          "Select 'Inspect' to open DevTools",
          "Right-click the HTML element → Copy → Copy selector",
          "Paste the selector in your site settings",
        ],
      },
      {
        subtitle: "What to Monitor",
        instructions: [
          "Pricing tables: .pricing, #pricing-section",
          "Feature lists: .features, .feature-list",
          "Navigation: header, nav, .menu",
          "CTAs: .cta, .hero-button",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Review Changes",
    icon: History,
    color: "amber",
    content: [
      {
        subtitle: "Change History",
        instructions: [
          "Go to 'History' to see all detected changes",
          "Changes are color-coded by severity",
          "Green = content added, Red = content removed",
          "Click any change to see the full diff",
        ],
      },
      {
        subtitle: "Filter & Search",
        instructions: [
          "Filter by site, date range, or severity",
          "Search for specific keywords",
          "Export reports for team sharing",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Set Up Alerts",
    icon: Bell,
    color: "teal",
    content: [
      {
        subtitle: "Alert Types",
        instructions: [
          "Email: Daily digest or instant notifications",
          "Slack: Post to team channels",
          "Discord: Gaming/tech team alerts",
          "GHL Webhook: Trigger automations",
        ],
      },
      {
        subtitle: "Alert Rules",
        instructions: [
          "Set minimum change threshold (e.g., >10% change)",
          "Filter by keywords (e.g., 'price', 'discount')",
          "Choose severity level to trigger alerts",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Connect Go High Level",
    icon: Webhook,
    color: "pink",
    content: [
      {
        subtitle: "GHL Webhook Setup",
        instructions: [
          "In GHL: Create a new Workflow",
          "Add trigger: 'Inbound Webhook'",
          "Copy the webhook URL",
          "Paste in Competitor Intel Settings > Integrations",
        ],
      },
      {
        subtitle: "Automation Ideas",
        instructions: [
          "Notify sales when competitor drops prices",
          "Alert marketing when competitor launches features",
          "Trigger competitive response campaigns automatically",
        ],
      },
    ],
  },
];

const colorClasses: Record<string, string> = {
  teal: "bg-teal-500/20 text-teal-600 border-teal-500/30",
  blue: "bg-blue-500/20 text-blue-600 border-blue-500/30",
  emerald: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
  purple: "bg-purple-500/20 text-purple-600 border-purple-500/30",
  amber: "bg-amber-500/20 text-amber-600 border-amber-500/30",
  pink: "bg-pink-500/20 text-pink-600 border-pink-500/30",
};

const quickLinks = [
  { href: "/sites", label: "Sites", icon: Globe, color: "blue" },
  { href: "/history", label: "History", icon: History, color: "amber" },
  { href: "/alerts", label: "Alerts", icon: Bell, color: "teal" },
  { href: "/settings", label: "Settings", icon: Settings, color: "purple" },
];

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2"
        title="Getting Started Guide"
      >
        <HelpCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Help</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl">
                  Getting Started with Competitor Intel
                </DialogTitle>
                <DialogDescription className="mt-1">
                  Follow these steps to monitor your competition
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 -mx-6 px-6 space-y-3">
            {/* Welcome Section */}
            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">Welcome to Competitor Intel!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your AI-powered competitive intelligence platform that keeps you one step ahead.
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <strong className="text-foreground">What it does:</strong>{" "}
                      Competitor Intel monitors your competitors&apos; websites 24/7, detects changes to pricing,
                      features, and messaging, and alerts you instantly so you can respond strategically.
                    </p>
                    <p>
                      <strong className="text-foreground">Why it matters:</strong>{" "}
                      Companies that actively track competitors are 2x more likely to outperform their market.
                      Know when competitors change prices, launch features, or shift positioning—before your customers do.
                    </p>
                    <p>
                      <strong className="text-foreground">Example:</strong>{" "}
                      Add your top 3 competitors&apos; pricing pages. When one drops their prices by 15%,
                      you get an instant alert and can trigger a GHL workflow to notify your sales team or launch a counter-campaign.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Part of The Master&apos;s Edge:</strong>{" "}
                      Feeds intelligence into your CEO Dashboard revenue forecasts, and helps inform
                      Refferq referral offers based on what competitors are doing in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {steps.map((step) => {
              const isExpanded = expandedStep === step.number;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-xl border bg-card/50 overflow-hidden"
                >
                  {/* Step Header */}
                  <button
                    onClick={() =>
                      setExpandedStep(isExpanded ? null : step.number)
                    }
                    className="w-full flex items-center gap-4 p-4 hover:bg-accent/50 transition-colors text-left"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl border ${colorClasses[step.color]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-medium">{step.title}</h3>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Step Content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-0 space-y-4">
                      {step.content.map((section, idx) => (
                        <div
                          key={idx}
                          className={section.isWarning ? "mt-2" : ""}
                        >
                          {section.isWarning ? (
                            <div className="flex gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-700 leading-relaxed">
                                {section.instructions[0]}
                              </p>
                            </div>
                          ) : (
                            <>
                              {section.subtitle && (
                                <h4 className="text-sm font-medium text-muted-foreground mb-2 ml-14">
                                  {section.subtitle}
                                </h4>
                              )}
                              <ul className="space-y-1.5 ml-14">
                                {section.instructions.map((instruction, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                                    <span>{instruction}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Links */}
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  const colorClass = colorClasses[link.color];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border hover:opacity-80 transition-colors ${colorClass}`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t -mx-6 px-6">
            <Button onClick={() => setOpen(false)} className="w-full">
              Got it, let&apos;s monitor competitors!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
