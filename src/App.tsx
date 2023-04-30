import Layout from "./components/layout/Layout";
import { ThemeContext } from "./components/theme/Theme"


import { useContext } from 'react'

const App = () => {
  const [darkMode, toggleMode] = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Layout>
        {/* <Hero />
        <Projects/>
        <Technologies /> */}
        <h1>Test</h1>
      </Layout>
    </div>
  );
}

export default App
