import { useTranslation } from "react-i18next";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";

function App() {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,0,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto">
        <Navbar />
        <Profile />
      </div>
      
    </div>
  );
}

export default App;
