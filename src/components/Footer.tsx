import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent py-8 sm:py-12 px-4 pb-32 sm:pb-28">
      <div className="container mx-auto max-w-4xl">
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 text-center sm:text-right">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-3 text-sm">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <a
                  href="https://aromaamorperfumes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors"
                >
                  المتجر
                </a>
              </li>
              <li>
                <a
                  href="https://aromaamorperfumes.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors"
                >
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-3 text-sm">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://aromaamorperfumes.com/lookup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors"
                >
                  تتبع طلبك
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-3 text-sm">السياسات</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://aromaamorperfumes.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-accent-foreground/70 hover:text-gold text-xs sm:text-sm transition-colors">
                  شروط الخدمة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-accent-foreground mb-3 text-sm">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/96598882565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-green-500 text-xs sm:text-sm transition-colors"
                >
                  واتساب
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aromamore.kw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-pink-500 text-xs sm:text-sm transition-colors"
                >
                  انستغرام
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-foreground/20 pt-6 text-center">
          <p className="text-accent-foreground/80 text-xs sm:text-sm">
            © 2026 Aroma More - جميع الحقوق محفوظة
          </p>
          <p className="text-accent-foreground/60 text-[10px] sm:text-xs mt-1.5 sm:mt-2">
            منتج طبيعي 100% | صنع في الكويت 🇰🇼
          </p>

          {/* Media Trend Support */}
          <a
            href="https://linktr.ee/mediatrendkw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#1a2332] hover:bg-[#243044] rounded-full transition-colors"
          >
            <img
              src="https://soapy-bubbles.com/media-trend.png"
              alt="Media Trend Logo"
              className="h-6 sm:h-8 w-auto"
            />
            <span className="text-white text-xs sm:text-sm font-medium">بدعم من</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
