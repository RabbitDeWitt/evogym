import { useState } from "react";
import { Benefits, Hero, Navbar } from "./components";
import { Page } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home)
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
