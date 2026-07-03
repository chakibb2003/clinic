
import { HeartPulse, Globe, Camera, Briefcase, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-6 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. About Clinic */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-xl">
                <HeartPulse size={24} />
              </div>
              <h3 className="font-tajawal font-bold text-2xl text-white">كلينيك الحياة</h3>
            </div>
            <p className="font-ibm text-gray-400 mb-6 leading-relaxed">
              نحن ملتزمون بتقديم أفضل الخدمات الطبية لك ولعائلتك بأعلى معايير الجودة والاحترافية، في بيئة مريحة وآمنة.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 text-white transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-tajawal font-bold text-xl text-white mb-6 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3 font-ibm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> الرئيسية</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> من نحن</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> الأطباء</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> العروض</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> المدونة</a></li>
            </ul>
          </div>

          {/* 3. Medical Services */}
          <div>
            <h4 className="font-tajawal font-bold text-xl text-white mb-6 relative inline-block">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3 font-ibm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> الطب العام</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> طب الأسنان</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> النساء والتوليد</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> الأطفال</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-xs">◀</span> التحاليل والأشعة</a></li>
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div>
            <h4 className="font-tajawal font-bold text-xl text-white mb-6 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-ibm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span>الجزائر العاصمة، الجزائر<br />شارع الاستقلال، عمارة 12</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span dir="ltr">+213 555 12 34 56</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>contact@clinicelhayat.dz</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary mt-1 shrink-0" size={20} />
                <span>السبت - الخميس<br />08:00 - 20:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center font-ibm text-sm text-gray-500">
          <p>© {new Date().getFullYear()} كلينيك الحياة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
