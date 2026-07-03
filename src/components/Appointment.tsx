
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Appointment = () => {
  return (
    <section className="py-20 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary to-blue-800 rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="flex flex-col lg:flex-row relative z-10">
          {/* Right Side (RTL) - Form */}
          <div className="flex-1 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-tajawal font-bold text-white mb-2">احجز موعدك الآن</h2>
            <p className="text-blue-100 font-ibm mb-8">املأ بياناتك وسيتم التواصل معك لتأكيد الموعد</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="الاسم الكامل" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="رقم الهاتف" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني (اختياري)" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-blue-100 appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 transition-all">
                  <option value="" disabled selected className="text-gray-900">اختر التخصص</option>
                  <option value="1" className="text-gray-900">الطب العام</option>
                  <option value="2" className="text-gray-900">طب الأسنان</option>
                  <option value="3" className="text-gray-900">الأطفال</option>
                  <option value="4" className="text-gray-900">النساء والتوليد</option>
                </select>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <input 
                  type="time" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <button className="w-full md:w-auto bg-white text-primary hover:bg-gray-50 font-bold py-3 px-10 rounded-xl transition-all shadow-lg mt-6 hover:-translate-y-1">
                احجز الآن
              </button>
            </form>
          </div>

          {/* Left Side (RTL) - Image with Glassmorphism */}
          <div className="flex-1 relative hidden md:block">
            <div className="h-full w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                alt="عيادة استقبال" 
                className="w-full h-full object-cover rounded-l-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/80"></div>
              
              {/* Glass Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-10 glass-dark p-6 rounded-2xl text-white max-w-sm"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-ibm">اتصل بنا الآن</p>
                    <p className="text-xl font-bold font-tajawal" dir="ltr">+213 555 12 34 56</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
