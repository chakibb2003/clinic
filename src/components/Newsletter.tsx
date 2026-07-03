
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="flex-1 relative z-10 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-tajawal font-bold text-blue-900">اشترك في نشرتنا الإخبارية</h2>
            </div>
            <p className="text-gray-600 font-ibm">احصل على آخر الأخبار، النصائح الصحية، وعروض العيادة الحصرية مباشرة إلى بريدك الإلكتروني.</p>
          </div>

          <div className="w-full md:w-auto flex-1 relative z-10">
            <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-700 font-ibm"
                required
              />
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-glow whitespace-nowrap hover:-translate-y-1">
                اشترك الآن
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
