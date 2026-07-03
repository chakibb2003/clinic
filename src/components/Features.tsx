
import { Headset, ShieldCheck, Users, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Headset className="w-8 h-8 text-primary" />,
      title: "دعم متواصل",
      desc: "خدمة متاحة 24/7",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "أمان المرضى",
      desc: "أفضل معايير السلامة",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "فريق متخصص",
      desc: "أطباء بخبرة عالية",
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-primary" />,
      title: "حجز سهل",
      desc: "احجز موعدك خلال دقائق",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative -mt-16 z-30 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-tajawal font-bold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 font-ibm text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
