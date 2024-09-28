import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Technologies from "./technologies/Technologies";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(155,150,150,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto">
        <Navbar />
        <Profile />
        <Experience />
        <Technologies />
        <Projects />
    
      </div>
    </div>
  );
}

export default App;
