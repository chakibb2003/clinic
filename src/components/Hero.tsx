
import { motion } from 'framer-motion';
import { CalendarCheck, Shield, Heart, Stethoscope } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-l from-blue-50 to-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Right Content (RTL) - Text */}
          <div className="flex-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-bold text-blue-900 leading-tight mb-4">
                صحتك هي <span className="text-primary relative">
                  أولويتنا
                  <svg className="absolute w-full h-3 -bottom-1 right-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-tajawal text-gray-700 mb-6">
                رعاية طبية متكاملة بأعلى معايير الجودة
              </h2>
              
              <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 font-ibm leading-relaxed">
                نقدم لك ولعائلتك أفضل الخدمات الطبية بفريق متخصص وتجهيزات حديثة، لضمان صحتك وسلامتك في بيئة مريحة وآمنة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary flex items-center justify-center gap-2">
                  <CalendarCheck size={20} />
                  <span>احجز موعدك الآن</span>
                </button>
                <button className="btn-secondary">
                  تعرف علينا
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Left Content (RTL) - Image */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                alt="طبيب محترف" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl relative z-10 object-cover border-4 border-white"
                style={{ height: '600px', objectPosition: 'top' }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 right-10 z-20 glass-card p-4 text-primary"
            >
              <Shield size={32} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-32 right-4 z-20 glass-card p-4 text-red-500"
            >
              <Heart size={32} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 z-20 glass-card p-4 text-secondary"
            >
              <Stethoscope size={32} />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
