"use client"
import { Gift, Zap, Brain, AlertCircle } from "lucide-react"
import { useState } from "react"

export function Bonuses() {
  const [activeShowcase, setActiveShowcase] = useState<"seo" | "perplexity">("seo")
  const spotsRemaining = 12 // First 20 get Perplexity free, 12 remaining

  const bonuses = [
    {
      id: "seo",
      icon: Zap,
      title: "SEO BOOSTER PRO v5.0",
      description: "আপনার কন্টেন্টকে সার্চ ইঞ্জিনে টপে নিয়ে যাওয়ার জন্য প্রফেশনাল টুল।",
      value: "৳৫০০০",
      image: "/seo-booster-pro.png",
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      textColor: "text-primary",
    },
    {
      id: "perplexity",
      icon: Brain,
      title: "Perplexity Pro সাবস্ক্রিপশন",
      description: "এক বছরের জন্য প্রিমিয়াম এআই রিসার্চ টুল। আপনার কন্টেন্ট রিসার্চ সহজ করুন।",
      value: "৳১২০০০",
      image: "/perplexity-pro.png",
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30",
      textColor: "text-accent",
      isLimited: true,
      limitedText: "প্রথম ২০ জনের জন্য সম্পূর্ণ বিনামূল্যে!",
    },
  ]

  return (
    <section
      id="bonuses"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/15 border border-primary/40 rounded-full">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary font-heading">বিশেষ বোনাস</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">কোর্সের সাথে পাচ্ছেন</h2>
          <p className="text-lg text-muted-foreground">অতিরিক্ত মূল্যবান টুলস এবং সাবস্ক্রিপশন যা আপনার ব্যবসা ত্বরান্বিত করবে</p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {bonuses.map((bonus) => {
              const IconComponent = bonus.icon
              return (
                <button
                  key={bonus.id}
                  onClick={() => setActiveShowcase(bonus.id as "seo" | "perplexity")}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left relative ${
                    activeShowcase === bonus.id
                      ? `bg-gradient-to-br ${bonus.color} ${bonus.borderColor} border-primary/60 shadow-lg`
                      : "bg-background border-border hover:border-primary/40"
                  }`}
                >
                  {bonus.isLimited && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-accent to-primary text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                      সীমিত!
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-background/50 ${activeShowcase === bonus.id ? "bg-background" : ""}`}
                    >
                      <IconComponent className={`w-6 h-6 ${bonus.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-2">{bonus.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{bonus.description}</p>
                      <div className={`text-sm font-semibold ${bonus.textColor}`}>মূল্য: {bonus.value}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-sm">
            <div className="relative w-full aspect-video md:aspect-[16/10]">
              {bonuses.map((bonus) => (
                <div
                  key={bonus.id}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    activeShowcase === bonus.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {bonuses.map((bonus) => {
            const IconComponent = bonus.icon
            return (
              <div
                key={`card-${bonus.id}`}
                className={`p-8 bg-gradient-to-br ${bonus.color} border ${bonus.borderColor} rounded-2xl hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
              >
                {bonus.isLimited && (
                  <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-gradient-to-r from-accent/80 to-primary/80 text-accent-foreground text-xs font-bold text-center">
                    🔥 প্রথম ২০ জনের জন্য সম্পূর্ণ বিনামূল্যে! ({spotsRemaining} স্পট বাকি)
                  </div>
                )}
                <div className={`flex items-start justify-between mb-6 ${bonus.isLimited ? "mt-8" : ""}`}>
                  <div className="p-4 rounded-xl bg-background/50 group-hover:bg-background transition-colors">
                    <IconComponent className={`w-8 h-8 ${bonus.textColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-muted-foreground mb-1">মূল্য</div>
                    <div className={`text-lg font-heading font-bold ${bonus.textColor}`}>{bonus.value}</div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{bonus.title}</h3>
                <p className="text-muted-foreground mb-6">{bonus.description}</p>
                <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg">
                  <span className="text-sm font-semibold text-primary">
                    {bonus.isLimited ? bonus.limitedText : "সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত"}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border-2 border-accent/50 rounded-2xl">
          <div className="flex items-start gap-4 max-w-2xl mx-auto">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-heading font-bold text-accent mb-2">⚡ সীমিত সময়ের অফার!</p>
              <p className="text-muted-foreground">
                প্রথম ২০ জন ক্রেতা Perplexity Pro সাবস্ক্রিপশন সম্পূর্ণ বিনামূল্যে পাবেন (মূল্য ৳১২,০০০)। এখনই অর্ডার করুন, মাত্র{" "}
                <span className="font-bold text-foreground">{spotsRemaining} স্পট বাকি!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 border border-primary/30 rounded-2xl text-center">
          <div className="mb-4">
            <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
          </div>
          <p className="text-2xl font-heading font-bold mb-2">মোট বোনাস মূল্য: ৳১৭,০০০</p>
          <p className="text-lg text-primary font-semibold">সম্পূর্ণ বিনামূল্যে!</p>
        </div>
      </div>
    </section>
  )
}
