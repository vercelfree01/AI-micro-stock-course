export function Footer() {
  const whatsappNumber = "8801533569685"
  const whatsappMessage = encodeURIComponent("আস্সালামু আলাইকুম! আমি AI Microstock Income Blueprint 2.0 সম্পর্কে জানতে আগ্রহী।")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">যোগাযোগ করুন</h4>
            <p className="text-muted-foreground mb-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                WhatsApp: +880 1533569685
              </a>
            </p>
            <p className="text-muted-foreground">Email: info@aimicrostock.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#course" className="hover:text-foreground transition">
                  কোর্স
                </a>
              </li>
              <li>
                <a href="#bonuses" className="hover:text-foreground transition">
                  বোনাস
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition">
                  মূল্য
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">আইনি</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  শর্তাবলী
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  রিফান্ড নীতি
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AI Microstock Income Blueprint. সর্বাধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
