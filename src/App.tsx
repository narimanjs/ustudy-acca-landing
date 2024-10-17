import "./App.css";

import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import CourseSection from "./components/CourseSection/CourseSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import OurAdvantagesSection from "./components/OurAdvantagesSection/OurAdvantagesSection";
import StatsSection from "./components/StatsSection/StatsSection";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <IntroSection />
      <SubjectsSection />
      <AdvantagesSection />
      <StatsSection />
      <OurAdvantagesSection />
      <CourseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
