import { useState } from 'react';
import { HeartPulse, Stethoscope, Baby, Microscope, Activity, Smile, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Stethoscope className="w-10 h-10 text-primary" />,
      title: "الطب العام",
      desc: "تشخيص وعلاج جميع الحالات المرضية العامة مع متابعة دورية.",
      fullDesc: "نقدم فحوصات شاملة، تشخيص دقيق للأمراض الشائعة والمزمنة، خطط علاجية مخصصة، ومتابعة مستمرة لحالتك الصحية لضمان أفضل النتائج."
    },
    {
      id: 2,
      icon: <Baby className="w-10 h-10 text-primary" />,
      title: "الأطفال وحديثي الولادة",
      desc: "رعاية صحية متكاملة لأطفالكم منذ الولادة وحتى البلوغ.",
      fullDesc: "عيادة متخصصة توفر لقاحات دورية، فحص النمو والتطور، علاج أمراض الطفولة، استشارات تغذية، ورعاية خاصة للأطفال الخدج."
    },
    {
      id: 3,
      icon: <HeartPulse className="w-10 h-10 text-primary" />,
      title: "النساء والتوليد",
      desc: "متابعة دقيقة للحمل ورعاية صحية متكاملة للمرأة.",
      fullDesc: "خدمات تشمل فحص السونار المتقدم، متابعة الحمل الحرج، استشارات تنظيم الأسرة، والكشف المبكر عن الأمراض النسائية."
    },
    {
      id: 4,
      icon: <Microscope className="w-10 h-10 text-primary" />,
      title: "التحاليل الطبية",
      desc: "مختبر متكامل يقدم تحاليل دقيقة وسريعة بنتائج موثوقة.",
      fullDesc: "مختبر مجهز بأحدث الأجهزة الأوتوماتيكية لإجراء تحاليل الدم، الهرمونات، الفيتامينات، والفحوصات الجينية بدقة متناهية."
    },
    {
      id: 5,
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "الأشعة والتشخيص",
      desc: "أحدث أجهزة الأشعة لتشخيص أدق الحالات بوضوح عالٍ.",
      fullDesc: "نوفر تصوير بالرنين المغناطيسي (MRI)، الأشعة المقطعية (CT Scan)، والأشعة السينية الرقمية للحصول على صور تشخيصية لا مثيل لها."
    },
    {
      id: 6,
      icon: <Smile className="w-10 h-10 text-primary" />,
      title: "طب الأسنان",
      desc: "عناية كاملة بصحة الفم والأسنان بأحدث التقنيات.",
      fullDesc: "علاج العصب، تبييض الأسنان، تقويم الأسنان الشفاف، زراعة الأسنان، وتجميل الابتسامة (هوليوود سمايل) بأيدي خبراء مختصين."
    },
  ];

  return (
    <section className="py-20 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="section-title">خدماتنا الطبية</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            نقدم مجموعة متكاملة من الخدمات الطبية المتخصصة لضمان صحة وسلامة جميع أفراد العائلة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-tajawal font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 font-ibm mb-4 leading-relaxed flex-grow">
                {service.desc}
              </p>
              
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-6"
                  >
                    <p className="text-primary font-ibm text-sm leading-relaxed p-4 bg-blue-50 rounded-xl border border-blue-100">
                      {service.fullDesc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="text-primary font-bold font-tajawal flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                <span>{expandedId === service.id ? "إخفاء التفاصيل" : "اقرأ المزيد"}</span>
                <span className="inline-block">
                  {expandedId === service.id ? <ChevronUp size={18} /> : <span className="rtl:rotate-180 inline-block">→</span>}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">
            عرض جميع الخدمات
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
