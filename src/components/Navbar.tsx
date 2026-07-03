import { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, CalendarCheck } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#' },
    { name: 'الخدمات', href: '#' },
    { name: 'الأطباء', href: '#' },
    { name: 'المدونة', href: '#' },
    { name: 'اتصل بنا', href: '#' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-primary text-white p-2 rounded-xl">
            <HeartPulse size={28} />
          </div>
          <div>
            <h1 className="font-tajawal font-bold text-2xl text-blue-900 leading-tight">كلينيك الحياة</h1>
            <p className="text-xs text-gray-500 font-ibm">لصحتك.. نهتم لأجلك</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-ibm font-medium text-gray-600 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all shadow-glow hover:-translate-y-0.5">
            <CalendarCheck size={18} />
            <span>احجز موعدك</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-ibm text-lg text-gray-700 py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white font-bold py-3 px-6 rounded-xl flex justify-center items-center gap-2 mt-2">
            <CalendarCheck size={18} />
            <span>احجز موعدك</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
