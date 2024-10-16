import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App;