import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
      </main>
    </>
  );
}

export default App;
