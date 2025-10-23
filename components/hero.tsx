"use client"

import { Suspense } from "react"
import { Hero3DScene } from "./hero-3d-scene"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-background via-background to-card/30">
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={<div className="w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />}
        >
          <div className="w-full h-48 md:h-64">
            <Hero3DScene />
          </div>
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 md:mb-12">
          <img
            src="/ai-income-hero.png"
            alt="AI Income Blueprint - Superhero earning with microstock"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-5 py-2.5 bg-primary/15 border border-primary/40 rounded-full backdrop-blur-sm hover:bg-primary/20 transition">
            <span className="text-sm font-semibold text-primary font-heading">নভেম্বর ১, ২০২৫ থেকে শুরু</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance leading-tight">
            AI এবং অটোমেশন দিয়ে{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              মাইক্রোস্টক আয়
            </span>{" "}
            করুন
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance leading-relaxed max-w-2xl mx-auto font-bengali">
            আমাদের সম্পূর্ণ ব্লুপ্রিন্ট অনুসরণ করে প্রতি মাসে হাজার হাজার টাকা আয় করুন। কোন অভিজ্ঞতার প্রয়োজন নেই।
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-heading font-bold text-lg hover:bg-primary/90 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
              এখনই যোগ দিন
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary rounded-xl font-heading font-bold text-lg hover:bg-primary/10 transition">
              আরও জানুন
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
