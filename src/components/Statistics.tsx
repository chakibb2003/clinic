
import { Award, UserCheck, Smile, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { id: 1, icon: <Award size={32} />, count: "15+", label: "سنة من الخبرة" },
    { id: 2, icon: <UserCheck size={32} />, count: "25+", label: "طبيب مختص" },
    { id: 3, icon: <Smile size={32} />, count: "50K+", label: "مريض سعيد" },
    { id: 4, icon: <Clock size={32} />, count: "24/7", label: "دعم وخدمة" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-gray-100">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 group"
            >
              <div className="text-primary mb-4 bg-accent p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-tajawal font-bold text-blue-900 mb-1">{stat.count}</h4>
              <p className="text-gray-500 font-ibm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
