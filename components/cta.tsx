"use client"

import { ArrowRight, Users, Clock, Zap } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">আর দেরি করবেন না!</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              প্রতিদিন হাজার হাজার মানুষ AI দিয়ে অনলাইন আয় করছে। আপনি কেন পিছিয়ে থাকবেন?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "সীমিত আসন",
                description: "প্রথম ব্যাচে মাত্র ৫০ জন শিক্ষার্থী",
              },
              {
                icon: Clock,
                title: "শীঘ্রই শুরু",
                description: "নভেম্বর ১, ২০২৫ থেকে শুরু",
              },
              {
                icon: Zap,
                title: "বিশেষ ছাড়",
                description: "৪৯% ছাড় শুধুমাত্র এই সপ্তাহে",
              },
            ].map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 bg-background/50 border border-border rounded-xl hover:border-primary/40 transition-colors"
                >
                  <div className="p-3 w-fit rounded-lg bg-primary/15 mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/15 to-accent/15 border-2 border-primary/40 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <p className="text-lg font-semibold mb-2">কোর্স শুরু হচ্ছে:</p>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">নভেম্বর ১, ২০২৫</p>
              <p className="text-muted-foreground">সীমিত আসন উপলব্ধ। এখনই যোগ দিন এবং প্রথম ব্যাচের অংশ হন।</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-heading font-bold text-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
                এখনই যোগ দিন - ৳২৫৫০
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-heading font-bold text-lg hover:bg-primary/10 transition">
                আরও তথ্য চান?
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">৩০ দিনের মানি-ব্যাক গ্যারান্টি • কোন প্রশ্ন জিজ্ঞাসা করা হবে না</p>
          </div>
        </div>
      </div>
    </section>
  )
}
