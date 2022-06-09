import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import FiltersNew from '../components/FiltersNew';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Items from './item/index';

const App = () => {
  return (
    <div>
      <MainHero />
      {/* <Filters /> */}
      <FiltersNew />
      {/* <SearchBar /> */}
      <Canvas />
      <LazyShow>
        <>
          <Items />
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
