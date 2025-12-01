/**
 * HomePageHero - New positioning hero for SageStone Inc
 * 
 * Reference-inspired layout (image1): 
 * - Left column: Bold headline, subhead describing intelligent virtual support, and two CTAs
 * - Right column: Tall card with hero image placeholder and floating metric cards near bottom-right
 * - Subtle grid pattern in background for texture
 * 
 * Easily customizable elements:
 * - Headline/subhead text in the left column
 * - CTA button labels and actions
 * - Metric card content (label, value, status) 
 * - Hero image source in the right column
 * 
 * Uses framer-motion with reduced-motion support and analytics hooks.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Star, TrendingUp, Users } from "lucide-react";

// Analytics window interface extensions
interface WindowWithAnalytics {
  gtag?: (...args: unknown[]) => void;
  posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
}

// Defensive analytics helper
function track(eventName: string, properties?: Record<string, unknown>): void {
  try {
    const win = typeof window !== "undefined" ? (window as unknown as WindowWithAnalytics) : null;
    if (win?.gtag) {
      win.gtag("event", eventName, properties);
    }
    if (win?.posthog?.capture) {
      win.posthog.capture(eventName, properties);
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

  // Floating metric cards for the right column
  const floatingMetrics = [
    {
      label: "Customer Satisfaction",
      value: "+18%",
      icon: TrendingUp,
      color: "#B14EFF"
    },
    {
      label: "Active Clients",
      value: "50+",
      icon: Users,
      color: "#FF72E1"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118]">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #B14EFF 1px, transparent 1px), linear-gradient(to bottom, #B14EFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true" 
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#B14EFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" aria-hidden="true" />
                Intelligent Virtual Support
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-white mb-6 text-4xl lg:text-5xl font-bold leading-tight">
              Empower your business with intelligent virtual support.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-[#C4B8D4] leading-relaxed mb-10">
              SageStone delivers tailored customer support and virtual assistant solutions that handle 
              tickets, back-office work, and customer conversations—so you can focus on strategy.
            </motion.p>
            
            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={handlePrimaryClick}
                className="bg-[#B14EFF] hover:bg-[#9B3EEF] text-white font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
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

          {/* Right Column - Hero Image Panel with Floating Metric Cards */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div 
              variants={fadeInScale}
              className="relative rounded-3xl overflow-hidden border border-[#2A1B3D] bg-gradient-to-br from-[#1A0B2E] via-[#0A0118] to-[#1A0B2E]"
            >
              {/* Hero Image Placeholder - tall panel */}
              <div className="aspect-[4/5] lg:aspect-[3/4] bg-gradient-to-br from-[#2A1B3D] to-[#1A0B2E] flex items-center justify-center relative">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/90 via-transparent to-transparent" aria-hidden="true" />
                
                {/* Placeholder visual - abstract pattern */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#B14EFF]/30 to-[#8E3AFF]/10 blur-2xl" />
                </div>
                
                {/* Centered icon/visual */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-2xl bg-[#B14EFF]/20 backdrop-blur-sm border border-[#B14EFF]/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-12 h-12 lg:w-16 lg:h-16 text-[#B14EFF]" aria-hidden="true" />
                  </div>
                  <p className="text-[#C4B8D4] text-sm lg:text-base font-medium">Virtual Operations</p>
                  <p className="text-[#C4B8D4]/60 text-xs lg:text-sm">24/7 Support Ready</p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B14EFF] to-[#8E3AFF] rounded-full blur-3xl opacity-30" aria-hidden="true" />
            </motion.div>

            {/* Floating Metric Cards - positioned near bottom-right */}
            <motion.div 
              variants={cardStagger}
              className="absolute -bottom-4 -left-4 lg:left-auto lg:-right-6 lg:bottom-16 space-y-3"
            >
              {floatingMetrics.map((metric, index) => (
                <motion.div key={index} variants={fadeInScale}>
                  <Card className="p-3 lg:p-4 bg-[#1A0B2E]/95 backdrop-blur-md border-[#2A1B3D] shadow-xl min-w-[160px] lg:min-w-[180px]">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${metric.color}20` }}
                      >
                        <metric.icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: metric.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-[#C4B8D4]/70">{metric.label}</p>
                        <p className="text-lg lg:text-xl font-bold text-white">{metric.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
