export function Header() {
  const whatsappNumber = "8801533569685"
  const whatsappMessage = encodeURIComponent("আস্সালামু আলাইকুম! আমি AI Microstock Income Blueprint 2.0 সম্পর্কে জানতে আগ্রহী।")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">🚀</div>
          <span className="text-xl font-bold text-foreground">AI Microstock</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#course" className="text-sm text-muted-foreground hover:text-foreground transition">
            কোর্স
          </a>
          <a href="#bonuses" className="text-sm text-muted-foreground hover:text-foreground transition">
            বোনাস
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            মূল্য
          </a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
        >
          যোগাযোগ করুন
        </a>
      </div>
    </header>
  )
}
