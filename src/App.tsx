import { useEffect } from 'react'
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import { ThemeContext } from "./components/theme/Theme"
import { Datepicker, Input, initTE } from "tw-elements";


import { useContext } from 'react'
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [mode] = useContext(ThemeContext)

  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);

  return (
    <div className={`${mode}`}>
      <Layout>
        <Hero />
        <Projects />
        <Technologies />
      </Layout>
      <Toaster />
    </div>
  );
}

export default App
