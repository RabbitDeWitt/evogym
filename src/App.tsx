import { useState } from "react";
import { Benefits, Hero, Navbar } from "./components";
import { Page } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home)
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />

    </div>
  );
}

export default App;
