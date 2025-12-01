/**
 * HomePageHero Component
 * 
 * Conversion-focused hero section for SageStone's digital marketing + virtual ops positioning.
 * 
 * CUSTOMIZATION NOTES:
 * - Badge, headline, subhead, CTAs, and trust line can be adjusted via props or by editing the defaults below.
 * - Ops cockpit metrics (opsCockpitData) can be updated to reflect current/seasonal messaging.
 * - For A/B testing: pass different values via props or create variants of this component.
 * - Animation timing can be adjusted via the staggerDelay and cardDelay constants.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  ArrowRight, 
  Ticket,
  Clock,
  DollarSign
} from "lucide-react";

// Analytics tracking helper - defensive, won't throw if analytics not present
const track = (eventName: string, properties?: Record<string, unknown>) => {
  try {
    // GA4 gtag
    if (typeof window !== "undefined" && typeof (window as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, properties);
    }
    // PostHog
    if (typeof window !== "undefined" && typeof (window as { posthog?: { capture: (...args: unknown[]) => void } }).posthog?.capture === "function") {
      (window as { posthog: { capture: (name: string, props?: Record<string, unknown>) => void } }).posthog.capture(eventName, properties);
    }
  } catch {
    // Silently fail if analytics not available
  }
};

interface HomePageHeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

// Ops cockpit data - can be customized for A/B testing or seasonal messaging
const opsCockpitData = [
  {
    icon: Ticket,
    label: "Ticket Backlog",
    value: "12",
    trend: "-38%",
    trendLabel: "vs last week",
    color: "#B14EFF",
    bgColor: "rgba(177, 78, 255, 0.1)",
  },
  {
    icon: Clock,
    label: "Coverage",
    value: "24/7",
    subtitle: "Always-on support",
    color: "#00FF88",
    bgColor: "rgba(0, 255, 136, 0.1)",
  },
  {
    icon: DollarSign,
    label: "Cost per Resolution",
    value: "$4.25",
    trend: "-35%",
    trendLabel: "vs in-house",
    color: "#FF72E1",
    bgColor: "rgba(255, 114, 225, 0.1)",
  },
];

export function HomePageHero({ onPrimaryClick, onSecondaryClick }: HomePageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for text stack
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.1,
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for ops cockpit cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.95 
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.3 + i * 0.1,
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: "easeOut",
      },
    }),
  };

  const handlePrimaryClick = () => {
    track("hero_primary_cta_click", { cta: "book_strategy_call" });
    onPrimaryClick();
  };

  const handleSecondaryClick = () => {
    track("hero_secondary_cta_click", { cta: "see_how_it_works" });
    onSecondaryClick();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#0A0118]">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-20 left-1/4 w-96 h-96 bg-[#B14EFF]/20 rounded-full blur-3xl animate-pulse" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#00FF88]/10 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: "1s" }} 
        aria-hidden="true" 
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Badge className="mb-6 bg-[#B14EFF]/10 text-[#B14EFF] border-[#B14EFF]/30 backdrop-blur-sm">
                Digital marketing + virtual ops
              </Badge>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-white mb-6"
            >
              Focus on the big bets.{" "}
              <span className="text-[#B14EFF]">We&apos;ll run the rest.</span>
            </motion.h1>
            
            {/* Subhead */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl text-[#C4B8D4] leading-relaxed mb-10"
            >
              SageStone builds intelligent virtual support and ops teams that handle 
              tickets, back-office work, and customer conversations—so leaders stay 
              focused on strategy, not the queue.
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
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
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-sm text-[#9B98A3]"
            >
              Trusted by VC-backed ecommerce brands, lean SaaS teams, and growing property portfolios.
            </motion.p>
          </div>

          {/* Right Column - Ops Cockpit Visual */}
          <div className="relative">
            <div className="grid gap-4">
              {opsCockpitData.map((card, index) => (
                <motion.div
                  key={card.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="relative p-5 rounded-2xl border border-[#2A1B3D] bg-[#1A0B2E]/60 backdrop-blur-sm"
                  style={{ borderLeftWidth: "3px", borderLeftColor: card.color }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <card.icon 
                        className="w-6 h-6" 
                        style={{ color: card.color }} 
                        aria-hidden="true" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#9B98A3] uppercase tracking-wide mb-1">
                        {card.label}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="text-2xl font-bold"
                          style={{ color: card.color }}
                        >
                          {card.value}
                        </span>
                        {card.trend && (
                          <span className="text-sm text-[#00FF88] font-medium">
                            {card.trend}
                          </span>
                        )}
                      </div>
                      {card.trendLabel && (
                        <p className="text-xs text-[#6D6A73]">{card.trendLabel}</p>
                      )}
                      {card.subtitle && (
                        <p className="text-xs text-[#6D6A73]">{card.subtitle}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B14EFF] to-[#00FF88] rounded-full blur-3xl opacity-30" 
              aria-hidden="true" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
