import { About, Events, Footer, Hero, Membership, Navbar } from "./components";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Membership />

      <Footer />
    </div>
  );
}

export default App;
