/**
 * HomePageHero - New positioning hero for SageStone Inc
 * 
 * Intelligent digital marketing + virtual operations agency positioning
 * with split layout, ops cockpit visual, and analytics hooks.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Star, TrendingDown } from "lucide-react";

// Defensive analytics helper
function track(eventName: string, properties?: Record<string, unknown>): void {
  try {
    // Check for Google Analytics gtag
    if (typeof window !== "undefined" && typeof (window as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, properties);
    }
    // Check for PostHog
    if (typeof window !== "undefined" && (window as { posthog?: { capture: (event: string, props?: Record<string, unknown>) => void } }).posthog?.capture) {
      (window as { posthog: { capture: (event: string, props?: Record<string, unknown>) => void } }).posthog.capture(eventName, properties);
    }
  } catch {
    // Silently no-op if analytics aren't configured
  }
}

interface HomePageHeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export function HomePageHero({ onPrimaryClick, onSecondaryClick }: HomePageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants - respect reduced motion preferences
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInScale = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const handlePrimaryClick = () => {
    track("hero_primary_cta_click", { location: "home_hero" });
    onPrimaryClick();
  };

  const handleSecondaryClick = () => {
    track("hero_secondary_cta_click", { location: "home_hero" });
    onSecondaryClick();
  };

  const metrics = [
    {
      label: "Ticket backlog",
      value: "−64%",
      status: "Under control",
      icon: TrendingDown,
      color: "#00FF88"
    },
    {
      label: "Coverage",
      value: "24/7 · CSAT 4.8★",
      status: "No more \"off hours\"",
      icon: Clock,
      color: "#B14EFF"
    },
    {
      label: "Support cost / resolution",
      value: "−38%",
      status: "Without cutting quality",
      icon: CheckCircle2,
      color: "#FF72E1"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118]">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#00FF88]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" aria-hidden="true" />
                Digital marketing + virtual ops
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-white mb-6">
              Focus on the big bets.
              <span className="block text-[#B14EFF]">We'll run the rest.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-[#C4B8D4] leading-relaxed mb-10">
              SageStone builds intelligent virtual support and operations teams that handle tickets, 
              back-office work, and customer conversations so leaders can focus on strategy instead of the queue.
            </motion.p>
            
            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={handlePrimaryClick}
                className="bg-[#00FF88] hover:bg-[#00DD77] text-[#0A0118] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                aria-label="Book a strategy call"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleSecondaryClick}
                className="border-[#B14EFF] text-[#B14EFF] hover:bg-[#B14EFF]/10 transition-all min-w-[44px] min-h-[44px]"
                aria-label="See how it works"
              >
                See how it works
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p variants={fadeInUp} className="text-sm text-[#C4B8D4]/80">
              Trusted by VC-backed ecommerce brands, lean SaaS teams, and growing property portfolios.
            </motion.p>
          </motion.div>

          {/* Right Column - Ops Cockpit Visual */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div 
              variants={fadeInScale}
              className="relative rounded-3xl overflow-hidden border border-[#2A1B3D] bg-gradient-to-br from-[#1A0B2E] via-[#0A0118] to-[#1A0B2E] p-6"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">Ops Cockpit</h3>
                <p className="text-sm text-[#C4B8D4]/70">Real-time operations overview</p>
              </div>

              {/* Metric Cards */}
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <motion.div key={index} variants={fadeInScale}>
                    <Card className="p-4 bg-[#0A0118]/60 backdrop-blur-sm border-[#2A1B3D] hover:border-[#B14EFF]/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${metric.color}20` }}
                        >
                          <metric.icon className="w-5 h-5" style={{ color: metric.color }} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#C4B8D4]/70 mb-0.5">{metric.label}</p>
                          <p className="text-lg font-bold text-white truncate">{metric.value}</p>
                          <p className="text-xs text-[#00FF88]">{metric.status}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Footer description */}
              <p className="mt-6 text-xs text-[#C4B8D4]/60 leading-relaxed">
                Designed for ecommerce, SaaS, property, and agencies that need calm, consistent operations—not another fire to put out.
              </p>

              {/* Glow effect */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B14EFF] to-[#00FF88] rounded-full blur-3xl opacity-20" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
