import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import { ThemeContext } from "./components/theme/Theme"


import { useContext } from 'react'

const App = () => {
  const [mode] = useContext(ThemeContext)

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <Layout>
        <Hero />
        <Projects />
        <Technologies />
      </Layout>
    </div>
  );
}

export default App
