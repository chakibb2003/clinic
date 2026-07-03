
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Doctors />
        <Appointment />
        <Statistics />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
