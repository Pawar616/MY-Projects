
import './App.css';
import Navbar from './header/nav';
import Intro from './section1_intro/intro';
import Services from './section2_facilities/facilities';
import About from './About/about';
import Class from './Class/class';
import Reg from './Registration/reg';
import Team from './team/team';
import Testimonials from './Testimonial/testimonial';
import Blog from './blog/blog';
import Footer from './footer/footer';
import Btt from './footer/backtotop/btt';
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <About />
      <Class />
      <Reg />
      <Team />
      <Testimonials />
      <Blog />
      <Footer />
      <Btt />

    </div>
  );
}

export default App;
