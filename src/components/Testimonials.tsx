import { useRef } from 'react';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "تجربة ممتازة من الاستقبال إلى العلاج. الأطباء متفهمون والمكان نظيف ومريح.",
      author: "ليلى محمود",
      role: "الجزائر العاصمة",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      text: "أفضل عيادة في الجزائر. خدمة راقية واهتمام كبير بالمرضى من جميع الكوادر.",
      author: "يوسف .م",
      role: "وهران",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "أشكر الدكتور محمد على المتابعة والتشخيص الدقيق لحالتي. خدمة تستحق الإشادة.",
      author: "أمينة .د",
      role: "قسنطينة",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 4,
      text: "تقنيات حديثة جداً في قسم الأسنان، لم أشعر بأي ألم. شكراً دكتور ياسين.",
      author: "طارق س.",
      role: "عنابة",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 5,
      text: "رعاية ممتازة في قسم الأطفال. طاقم طبي ودود جداً مع الصغار.",
      author: "سميرة ح.",
      role: "البليدة",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="section-title">ماذا يقول مرضانا</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, idx) => (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-soft relative border border-gray-100 hover:shadow-xl transition-shadow flex-shrink-0 snap-center w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Quote size={40} className="text-blue-50 absolute top-6 right-6 z-0 transform rotate-180" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-ibm leading-relaxed mb-6 flex-grow">"{test.text}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                    <img src={test.img} alt={test.author} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                    <div>
                      <h4 className="font-tajawal font-bold text-blue-900">{test.author}</h4>
                      <p className="text-sm text-gray-500">{test.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-[calc(100%+4rem)] -left-8 pointer-events-none">
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
