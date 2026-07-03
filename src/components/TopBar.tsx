
import { Phone, MapPin, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 px-4 md:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-ibm">
        <div className="flex items-center gap-2">
          <span className="font-medium">نحن نهتم بصحتك</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-blue-200" />
          <span>الجزائر العاصمة، الجزائر</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-200" />
            <span dir="ltr">08:00 - 20:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-200" />
            <span dir="ltr" className="font-bold">+213 555 123 456</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
