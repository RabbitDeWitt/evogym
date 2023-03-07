import { useState } from "react";
import { Benefits, Classes, Contact, Footer, Hero, Navbar } from "./components";
import { Page } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home)
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
