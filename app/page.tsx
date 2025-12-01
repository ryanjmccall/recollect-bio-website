"use client";

import { useState, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { EmailCaptureDialog } from "@/components/email-capture-dialog";
import { FlaskConical, ShieldCheck, Mail } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full bg-black" />
        }
      >
        <Spline
          style={{
            width: "100%",
            height: "100%",
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      {/* Gradient Overlay for better text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, transparent 50%),
            linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent 25%, transparent 75%, rgba(0, 0, 0, 0.7)),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, transparent 30%, transparent 60%, rgba(0, 0, 0, 0.95))
          `,
        }}
      />
    </div>
  );
}

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Galaxy Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Galaxy Spline Background */}
        <SplineBackground />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8 max-w-4xl">
          {/* Logo/Brand Name */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fade-in drop-shadow-2xl">
              Recollect Bio
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-2xl mx-auto font-medium drop-shadow-lg" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
              Your Biological Operating System
            </p>
          </div>

          {/* Brief Description */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9)' }}>
            We identify non-obvious, platform targets that current models miss, and turn unknown moonshots into clinical grade assets. Join us on our journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => setDialogOpen(true)}
              className="text-base px-8 py-6 bg-white text-black hover:bg-neutral-200"
              aria-label="Join the waitlist to receive updates from Recollect Bio"
            >
              Join Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 border-neutral-700 hover:bg-neutral-900"
            >
              <a href="mailto:anthony@recollect.bio" aria-label="Contact us for investor or partner inquiries">
                <Mail className="mr-2 h-5 w-5" />
                Investor / Partner Inquiry
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-neutral-500 text-sm">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
              <span>Research-Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span>Ethically Rigorous</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Compliance & Disclaimers Section */}
      <section className="py-16 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-neutral-300">Important Information</h2>
          <div className="space-y-4 text-sm text-neutral-500">
            <p className="flex items-start justify-center gap-2">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-left max-w-2xl">
                <strong className="text-neutral-400">For research use only.</strong> The information provided
                is not intended for diagnostic or therapeutic use. Recollect Bio products are currently in
                research and development.
              </span>
            </p>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              All information is exploratory and subject to change. This site does not constitute
              medical advice, a solicitation for investment, or a promise of product availability.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-xl font-semibold text-neutral-300">Recollect Bio</p>
              <p className="text-sm text-neutral-600 mt-1">Stealth mode</p>
            </div>

            <nav className="flex flex-wrap gap-6 justify-center text-sm text-neutral-500">
              <a href="/privacy" className="hover:text-neutral-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-neutral-300 transition-colors">
                Terms of Use
              </a>
              <a href="mailto:contact@recollect.bio" className="hover:text-neutral-300 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Recollect Bio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Email Capture Dialog */}
      <EmailCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
}
