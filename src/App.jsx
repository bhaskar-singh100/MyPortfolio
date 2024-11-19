import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyLatestWork from "./components/MyLatestWork/MyLatestWork";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <MyLatestWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;