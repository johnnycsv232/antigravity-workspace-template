# IronClad Component Specifications

| Component | Path | Purpose | Interactive |
|---|---|---|---|
| Navbar.tsx | src/components/ | Sticky nav: ShieldLogo + wordmark, How It Works/Pricing/FAQ links, Get Started CTA, mobile hamburger, blur backdrop | Yes |
| Hero.tsx | src/components/ | H1: "Stop Losing Jobs to Voicemail", sub, 2 CTAs, trust badge, phone mockup | Yes |
| ProblemStats.tsx | src/components/ | Animated counters: 40%, 85%, 80%, closing "$3,000-$27,000/month" | Yes |
| HowItWorks.tsx | src/components/ | 3-step horizontal flow: Customer Calls → IronClad Catches It → You Get the Lead | No |
| Features.tsx | src/components/ | 6-card grid (2x3 desktop, 1-col mobile): Speed, AI Qual, Notifications, Contractors, ROI, Zero Risk | No |
| PricingCards.tsx | src/components/ | 3 cards: Starter $97/mo, Pro $197/mo (highlighted), Premium $347/mo with setup fees | Yes |
| ROICalculator.tsx | src/components/ | 2 sliders (missed calls 1-30, job value $200-$5000), live calc: calls×4×0.30×value | Yes |
| FAQ.tsx | src/components/ | Accordion: 6 questions from constants | Yes |
| FinalCTA.tsx | src/components/ | Dark bg, "Your Competitors Are Answering. Are You?", Get Started Now CTA | No |
| Footer.tsx | src/components/ | Logo+tagline, nav links, legal (ToS, Privacy), social icons, © 2026 | No |

## Icon Components (Lucide React)

| File | Lucide Icon | Purpose |
|---|---|---|
| PhoneRinging.tsx | Phone + Framer pulse | "Customer Calls" step |
| LightningBolt.tsx | Zap (gold) | "Under 10 Seconds" |
| ChatCheck.tsx | MessageSquareCheck | "AI Qualification" |
| BellAlert.tsx | BellRing + shake | "Instant Notifications" |
| Wrench.tsx | Wrench | "Built for Contractors" |
| BarChartUp.tsx | TrendingUp | "ROI Reports" |
| ShieldCheck.tsx | ShieldCheck | "Zero Risk" |
| ArrowFlow.tsx | Custom 3-node | "How It Works" connector |

All icons: 24×24 default, scalable, brand colors (#1B2A4A, #D4A843), stroke-width 2px.
