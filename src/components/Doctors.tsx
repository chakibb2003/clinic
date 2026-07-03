
import { Star, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Doctors = () => {
  const doctors = [
    {
      name: "د. محمد يعقوب",
      spec: "أخصائي طب عام",
      exp: "15 سنة",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "د. سارة براهيمي",
      spec: "أخصائية نساء وتوليد",
      exp: "12 سنة",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "د. ياسين حسان",
      spec: "أخصائي طب الأسنان",
      exp: "8 سنوات",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "د. نوال حمادي",
      spec: "أخصائية أطفال",
      exp: "10 سنوات",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "د. كريم لعميدي",
      spec: "أخصائي أمراض القلب",
      exp: "20 سنة",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="section-title text-right">أطباؤنا المتخصصون</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          <button className="text-primary font-bold hidden md:block hover:underline">
            عرض جميع الأطباء
          </button>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:px-0 md:mx-0 gap-6 hide-scrollbar">
          {doctors.map((doctor, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden min-w-[280px] md:min-w-0 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative bg-accent">
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-tajawal font-bold text-xl text-blue-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{doctor.spec}</p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500 border-t border-gray-100 pt-3 mt-3">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-700">{doctor.rating}</span>
                  </div>
                  <div>خبرة {doctor.exp}</div>
                </div>

                <button className="w-full py-2.5 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                  <CalendarCheck size={18} />
                  <span>احجز موعد</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
