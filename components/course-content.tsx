"use client"

import { BookOpen, Zap, TrendingUp, DollarSign, Cog, Target } from "lucide-react"

export function CourseContent() {
  const modules = [
    {
      icon: BookOpen,
      title: "মডিউল ১: ফাউন্ডেশন",
      description: "মাইক্রোস্টক বিজনেসের মূল ধারণা এবং AI টুলস পরিচয়",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Zap,
      title: "মডিউল ২: AI মাস্টারি",
      description: "ChatGPT, Midjourney এবং অন্যান্য AI টুলস দিয়ে কন্টেন্ট তৈরি করুন",
      color: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "মডিউল ৩: SEO অপটিমাইজেশন",
      description: "আপনার কন্টেন্ট র‍্যাঙ্ক করান এবং বিক্রয় বাড়ান",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: DollarSign,
      title: "মডিউল ৪: মনিটাইজেশন",
      description: "সর্বোচ্চ আয়ের জন্য প্ল্যাটফর্ম এবং কৌশল নির্বাচন করুন",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Cog,
      title: "মডিউল ৫: অটোমেশন",
      description: "সম্পূর্ণ প্রক্রিয়া স্বয়ংক্রিয় করুন এবং প্যাসিভ আয় করুন",
      color: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
    },
    {
      icon: Target,
      title: "মডিউল ৬: স্কেলিং",
      description: "আপনার ব্যবসা বৃদ্ধি করুন এবং মাল্টিপল স্ট্রিম তৈরি করুন",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
  ]

  return (
    <section id="course" className="py-24 md:py-40 bg-card/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">কোর্স কন্টেন্ট</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ৬টি সম্পূর্ণ মডিউল যা আপনাকে শূন্য থেকে সফল মাইক্রোস্টক উদ্যোক্তা বানাবে
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, idx) => {
            const IconComponent = module.icon
            return (
              <div
                key={idx}
                className={`group relative p-8 bg-gradient-to-br ${module.color} border border-border rounded-2xl hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden`}
              >
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-primary">{idx + 1}</span>
                </div>

                <div
                  className={`mb-6 p-4 w-fit rounded-xl bg-background/50 group-hover:bg-background transition-colors`}
                >
                  <IconComponent className={`w-8 h-8 ${module.iconColor}`} />
                </div>

                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary w-0 group-hover:w-full transition-all duration-300" />
              </div>
            )
          })}
        </div>

        <div className="mt-20 pt-20 border-t border-border/50">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">আপনি শিখবেন</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "AI টুলস দিয়ে প্রফেশনাল কন্টেন্ট তৈরি",
                "মাইক্রোস্টক প্ল্যাটফর্মে সফল হওয়ার কৌশল",
                "SEO এবং মার্কেটিং অপটিমাইজেশন",
                "সম্পূর্ণ অটোমেশন সিস্টেম সেটআপ",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
