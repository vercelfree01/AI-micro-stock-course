"use client"

import { Check, Zap, Clock, AlertCircle } from "lucide-react"

export function Pricing() {
  const spotsRemaining = 12
  const totalSpots = 20

  return (
    <section
      id="pricing"
      className="py-24 md:py-40 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/15 border border-accent/40 rounded-full">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent font-heading">বিশেষ মূল্য</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">সীমিত সময়ের অফার</h2>
          <p className="text-lg text-muted-foreground">এই মূল্যে কোর্স পাওয়ার সুযোগ শীঘ্রই শেষ হবে</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8 p-4 bg-gradient-to-r from-accent/30 to-primary/30 border-2 border-accent/60 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <div>
              <p className="font-bold text-accent">🔥 প্রথম {totalSpots} জনের জন্য Perplexity Pro বিনামূল্যে!</p>
              <p className="text-sm text-muted-foreground">মাত্র {spotsRemaining} স্পট বাকি - এখনই অর্ডার করুন!</p>
            </div>
          </div>

          <div className="relative p-10 md:p-12 bg-gradient-to-br from-primary/20 via-card to-accent/10 border-2 border-primary/40 rounded-3xl shadow-2xl overflow-visible">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-accent to-primary text-accent-foreground rounded-full text-sm font-heading font-bold shadow-lg flex items-center gap-2">
              <Zap className="w-4 h-4" />
              সীমিত অফার
            </div>

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">AI Microstock Income Blueprint 2.0</h3>

              <div className="mb-10 space-y-3">
                <div className="text-sm text-muted-foreground line-through">নিয়মিত মূল্য: ৳৫০০০</div>
                <div className="text-6xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ৳২৫৫০
                </div>
                <div className="text-xl text-accent font-heading font-bold">৪৯% ছাড়!</div>
              </div>

              <div className="space-y-4 mb-10 text-left bg-background/50 p-8 rounded-2xl border border-border/50">
                {[
                  "৬টি সম্পূর্ণ মডিউল",
                  "SEO BOOSTER PRO v5.0 (৳৫০০০)",
                  "Perplexity Pro ১ বছর - প্রথম ২০ জনের জন্য বিনামূল্যে! (মূল্য ৳১২০০০)",
                  "আজীবন আপডেট",
                  "২৪/৭ সাপোর্ট",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-8 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-heading font-bold text-lg hover:shadow-xl transition transform hover:scale-105 shadow-lg">
                এখনই কিনুন
              </button>

              <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                ৩০ দিনের মানি-ব্যাক গ্যারান্টি
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
