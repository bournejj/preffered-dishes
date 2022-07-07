import React from "react";

import About from "../components/About";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import Dishes from "../components/Dishes";
import Filters from "../components/Filters";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import Product from "../components/Product";

const App = () => {
  return (
    <div>
      <MainHero />
      <Filters />

      <Canvas />
      <LazyShow>
        <>
          <Dishes />
          <Product />
          <Canvas />
        </>
      </LazyShow>

      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
