import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {


  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/sendmessage")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);




  return (
    <>
      {/* <Header /> */}
      {/* <Hero></Hero> */}
      {/* <About></About> */}
      {/* <Resume></Resume> */}
      {/* <Skills></Skills> */}
      <Contact></Contact>
    </>
  );
}

export default App;
